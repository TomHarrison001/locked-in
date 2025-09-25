import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

const Journal = () => {
  const { colours } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colours.background}]}>
      <Text style={[styles.content, {color: colours.text}]}>Journal.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    fontSize: 24,
  }
});

export default Journal;
