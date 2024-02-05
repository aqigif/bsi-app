import { StyleSheet, View } from "react-native";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card title={"Kucing 1"} description={"Kucing 1 desc"} />
      <Card title={"Kucing 2"} description={"Kucing 2 desc"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10
  },
});
