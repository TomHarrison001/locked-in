import { StyleSheet, Text, View } from "react-native";

const Notes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Notes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
  },

  content: {
    color: "#c3c3c3",
    fontSize: 24,
  }
});

export default Notes;
