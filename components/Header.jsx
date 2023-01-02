import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = ({ pushCategory, category }) => {
  return (
    <View style={styles.headContainer}>
      <TouchableOpacity onPress={() => pushCategory("js")}>
        <View
          style={styles.headbox}
          backgroundColor={category === "js" ? "lightblue" : "gray"}
        >
          <Text style={styles.headtext}>Javascript</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pushCategory("Rt")}>
        <View
          style={styles.headbox}
          backgroundColor={category === "Rt" ? "lightblue" : "gray"}
        >
          <Text style={styles.headtext}>React</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pushCategory("ct")}>
        <View
          style={styles.headbox}
          backgroundColor={category === "ct" ? "lightblue" : "gray"}
        >
          <Text style={styles.headtext}>Coding Test</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
