import { StyleSheet, TextInput, View, Button } from "react-native";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Ini judul");
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{ height: 40, borderRadius: 4, borderWidth: 1, minWidth: 400, marginBottom: 5 }}
      />
      <Card title={title} description={"Kucing 1 desc"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
});
