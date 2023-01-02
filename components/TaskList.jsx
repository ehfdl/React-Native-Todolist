import { StyleSheet, View } from "react-native";
import Task from "./Task";

const TaskList = ({
  tasklist,
  category,
  editSubmitTask,
  edittask,
  setEditTask,
  changeIsDone,
  editInputhandler,
  deleteTask,
}) => {
  return (
    <View style={styles.taskcontainer}>
      {tasklist.map((task) => {
        if (category === task.category) {
          return (
            <Task
              editSubmitTask={editSubmitTask}
              edittask={edittask}
              setEditTask={setEditTask}
              changeIsDone={changeIsDone}
              editInputhandler={editInputhandler}
              deleteTask={deleteTask}
              id={task.id}
              isEdit={task.isEdit}
              task={task.task}
              isDone={task.isDone}
              key={task.id}
            />
          );
        }
        // } else if (category === "Rt") {
        //   return task.category === "Rt" ? (
        //     <Task
        //       editSubmitTask={editSubmitTask}
        //       edittask={edittask}
        //       setEditTask={setEditTask}
        //       changeIsDone={changeIsDone}
        //       editInputhandler={editInputhandler}
        //       deleteTask={deleteTask}
        //       id={task.id}
        //       isEdit={task.isEdit}
        //       task={task.task}
        //       isDone={task.isDone}
        //     />
        //   ) : null;
        // } else if (category === "ct") {
        //   return task.category === "ct" ? (
        //     <Task
        //       editSubmitTask={editSubmitTask}
        //       edittask={edittask}
        //       setEditTask={setEditTask}
        //       changeIsDone={changeIsDone}
        //       editInputhandler={editInputhandler}
        //       deleteTask={deleteTask}
        //       id={task.id}
        //       isEdit={task.isEdit}
        //       task={task.task}
        //       isDone={task.isDone}
        //     />
        //   ) : null;
        // }
      })}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskcontainer: {
    width: "91%",
  },
});
