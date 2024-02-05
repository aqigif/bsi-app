import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({ title, description, image }) {
  const [isOnCart, setIsOnCart] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
      <View style={{ marginBottom: 10 }}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity onPress={() => setIsOnCart(!isOnCart)}>
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ textAlign: "center", color: "white" }}>
            {isOnCart ? "Hapus dari Keranjang" : "Tambah ke keranjang"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: { backgroundColor: "white", borderRadius: 10, padding: 10 },
  cardImage: { width: 200, height: 200, borderRadius: 10 },
});
