import { StyleSheet, TextInput, View } from "react-native";

const TaskInput = ({ onSubmitTask, setTask, task }) => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.tasktextinput}
        placeholder="Enter your task"
        value={task}
        onSubmitEditing={onSubmitTask}
        onChangeText={setTask}
      />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputcontainer: {
    width: "91%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 20,
  },
  tasktextinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 12,
  },
});
