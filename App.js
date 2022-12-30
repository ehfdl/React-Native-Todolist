import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import uuid from "react-native-uuid";

export default function App() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const onSubmitTask = () => {
    const newtask = {
      id: uuid.v4(),
      task,
      isDone: false,
      category,
    };
    setTasklist([...tasklist, newtask]);
    setTask("");
  };

  const changeIsDone = (id) => {
    const tasks = tasklist.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
        return {
          ...task,
        };
      }
    });

    setTasklist(tasks);
  };

  const deleteTask = (id) => {
    const tasks = tasklist.filter((task) => task.id !== id);
    setTasklist([...tasks]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headContainer}>
        <TouchableOpacity onPress={() => setCategory("js")}>
          <View
            style={styles.headbox}
            backgroundColor={category === "js" ? "lightblue" : "gray"}
          >
            <Text style={styles.headtext}>Javascript</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory("Rt")}>
          <View
            style={styles.headbox}
            backgroundColor={category === "Rt" ? "lightblue" : "gray"}
          >
            <Text style={styles.headtext}>React</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory("ct")}>
          <View
            style={styles.headbox}
            backgroundColor={category === "ct" ? "lightblue" : "gray"}
          >
            <Text style={styles.headtext}>Coding Test</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.tasktextinput}
          placeholder="Enter your task"
          value={task}
          onSubmitEditing={onSubmitTask}
          onChangeText={setTask}
        />
      </View>
      <View style={styles.taskcontainer}>
        {tasklist.map((task) => {
          if (category === "js") {
            return task.category === "js" ? (
              <View style={styles.taskbox} key={task.id}>
                {task.isDone ? (
                  <Text style={styles.done}>{task.task}</Text>
                ) : (
                  <Text>{task.task}</Text>
                )}
                <View style={styles.taskiconbox}>
                  <TouchableOpacity onPress={() => changeIsDone(task.id)}>
                    <AntDesign name="checksquare" size={24} color="black" />
                  </TouchableOpacity>
                  {/*  */}
                  <FontAwesome name="pencil-square-o" size={24} color="black" />
                  {/*  */}
                  <TouchableOpacity onPress={() => deleteTask(task.id)}>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null;
          } else if (category === "Rt") {
            return task.category === "Rt" ? (
              <View style={styles.taskbox} key={task.id}>
                {task.isDone ? (
                  <Text style={styles.done}>{task.task}</Text>
                ) : (
                  <Text>{task.task}</Text>
                )}
                <View style={styles.taskiconbox}>
                  <TouchableOpacity onPress={() => changeIsDone(task.id)}>
                    <AntDesign name="checksquare" size={24} color="black" />
                  </TouchableOpacity>
                  <FontAwesome name="pencil-square-o" size={24} color="black" />
                  <TouchableOpacity onPress={() => deleteTask(task.id)}>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null;
          } else if (category === "ct") {
            return task.category === "ct" ? (
              <View style={styles.taskbox} key={task.id}>
                {task.isDone ? (
                  <Text style={styles.done}>{task.task}</Text>
                ) : (
                  <Text>{task.task}</Text>
                )}
                <View style={styles.taskiconbox}>
                  <TouchableOpacity onPress={() => changeIsDone(task.id)}>
                    <AntDesign name="checksquare" size={24} color="black" />
                  </TouchableOpacity>
                  <FontAwesome name="pencil-square-o" size={24} color="black" />
                  <TouchableOpacity onPress={() => deleteTask(task.id)}>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null;
          }
        })}
      </View>
    </SafeAreaView>
  );
}
{
  /* <TaskBox>
                <Text>{task.task}</Text>
                <TaskIconsBox>
                  <AntDesign name="checksquare" size={24} color="black" />
                  <FontAwesome name="pencil-square-o" size={24} color="black" />
                  <AntDesign name="delete" size={24} color="black" />
                </TaskIconsBox>
              </TaskBox> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
  },
  headContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    marginTop: 10,
  },
  headbox: {
    width: 95,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headtext: {
    fontWeight: "bold",
  },
  inputcontainer: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  tasktextinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 17,
  },
  taskcontainer: {
    width: "100%",
  },
  taskbox: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgray",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  taskiconbox: {
    width: 90,
    height: "100%",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  done: {
    textDecorationLine: "line-through",
  },
});
