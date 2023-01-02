import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Task = ({
  editSubmitTask,
  edittask,
  setEditTask,
  changeIsDone,
  editInputhandler,
  deleteTask,
  id,
  isEdit,
  task,
  isDone,
}) => {
  return (
    <View style={styles.taskbox} key={id}>
      {isEdit ? (
        <TextInput
          style={styles.edittextinput}
          value={edittask}
          onSubmitEditing={() => editSubmitTask(id)}
          onChangeText={setEditTask}
        />
      ) : isDone ? (
        <Text style={styles.done}>{task}</Text>
      ) : (
        <Text>{task}</Text>
      )}
      <View style={styles.taskiconbox}>
        <TouchableOpacity onPress={() => changeIsDone(id)}>
          <AntDesign name="checksquare" size={24} color="black" />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity onPress={() => editInputhandler(id)}>
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity onPress={() => deleteTask(id)}>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  tasktextinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 12,
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
  edittextinput: {
    width: 200,
    height: "100%",
    borderWidth: 1,
    paddingLeft: 5,
  },
  taskiconbox: {
    width: 90,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  done: {
    textDecorationLine: "line-through",
  },
});
