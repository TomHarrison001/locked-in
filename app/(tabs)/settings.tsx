import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const { toggleDarkMode, colours } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colours.background}]}>
      <Text style={[styles.content, {color: colours.text}]}>Settings.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={[styles.content, {color: colours.text}]}>
          Toggle Dark Mode.
        </Text>
      </TouchableOpacity>
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

export default Settings;
