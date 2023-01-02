import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import {
  onSnapshot,
  query,
  collection,
  doc,
  orderBy,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { dbService } from "./firebase";
import { async } from "@firebase/util";

export default function App() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [edittask, setEditTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const pushCategory = async (cat) => {
    setCategory(cat); // 눈에 바로 보이는 탭 변경
    await updateDoc(doc(dbService, "category", "currentCategory"), {
      category: cat,
    });
  };

  const onSubmitTask = async () => {
    const newtask = {
      // id: uuid.v4(),
      task,
      isDone: false,
      isEdit: false,
      category,
      createAt: Date.now(),
    };
    // setTasklist([...tasklist, newtask]);
    await addDoc(collection(dbService, "Tasks"), newtask);
    setTask("");
  };

  const changeIsDone = async (id) => {
    // const tasks = tasklist.map((task) => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       isDone: !task.isDone,
    //     };
    //   } else {
    //     return {
    //       ...task,
    //     };
    //   }
    // });
    // setTasklist(tasks);
    const snapshot = await getDoc(doc(dbService, "Tasks", id)); // 하나의 doc를 가져옴.
    await updateDoc(doc(dbService, "Tasks", id), {
      isDone: !snapshot.data().isDone,
    });
  };

  const deleteTask = async (id) => {
    // const tasks = tasklist.filter((task) => task.id !== id);
    // await deleteDoc(doc(dbService, "Tasks", id));
    // setTasklist([...tasks]);
    Alert.alert("Task 삭제", "정말 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        style: "destructive",
        onPress: async () => {
          // const newTodos = todos.filter((todo) => todo.id !== id);
          // setTodos(newTodos);
          await deleteDoc(doc(dbService, "Tasks", id));
        },
      },
    ]);
  };

  const editInputhandler = async (id) => {
    // const tasks = tasklist.map((task) => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       isEdit: !task.isEdit,
    //     };
    //   } else {
    //     return {
    //       ...task,
    //     };
    //   }
    // });

    // setTasklist(tasks);
    await updateDoc(doc(dbService, "Tasks", id), { isEdit: true });
  };

  const editSubmitTask = async (id) => {
    // const tasks = tasklist.map((task) => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       task: edittask,
    //       isEdit: !task.isEdit,
    //     };
    //   } else {
    //     return {
    //       ...task,
    //     };
    //   }
    // });
    // setTasklist(tasks);
    // setEditTask("");
    await updateDoc(doc(dbService, "Tasks", id), {
      task: edittask,
      isEdit: false,
    });
    setEditTask("");
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "Tasks"),
      orderBy("createAt", "desc") // 해당 collection 내의 docs들을 createdAt 속성을 내림차순 기준으로
    );

    onSnapshot(q, (snapshot) => {
      // q (쿼리)안에 담긴 collection 내의 변화가 생길 때 마다 매번 실행됨
      const newTasks = snapshot.docs.map((doc) => {
        const newTask = {
          id: doc.id,
          ...doc.data(), // doc.data() : { text, createdAt, ...  }
        };
        // console.log(newTask);
        return newTask;
      });

      setTasklist(newTasks);
    });

    const getCategory = async () => {
      // 렌더링이 되었을때 탭의 위치 저장.
      const snapshot = await getDoc(
        doc(dbService, "category", "currentCategory")
      );
      setCategory(snapshot.data().category);
    };
    getCategory();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header pushCategory={pushCategory} category={category} />
      <TaskInput onSubmitTask={onSubmitTask} setTask={setTask} task={task} />
      <TaskList
        tasklist={tasklist}
        category={category}
        edittask={edittask}
        editSubmitTask={editSubmitTask}
        setEditTask={setEditTask}
        changeIsDone={changeIsDone}
        editInputhandler={editInputhandler}
        deleteTask={deleteTask}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
});
