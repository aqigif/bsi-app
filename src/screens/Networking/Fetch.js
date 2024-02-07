import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";

const FetchScreen = ({ navigation }) => {
  // tipe data
  // string => all characters in keyboard with quote => "" '' `` => contoh : "Saya Budi"
  // number => 1-9 => contoh : 90909
  // boolean => true | false
  // object => kumpulan data yg menjelaskan satu entitas => person : { name:"Budi", gender: "Male" }
  // array => kumpulan data jamak => people : [{ name:"Budi", gender: "Male" }, { name:"Siska", gender: "Female" }]

  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log("FETCH START");
    fetch("https://reqres.in/api/users?page=2").then((response) =>
      response.json().then((response) => setResult(response?.data))
    );
  }, []);

  return (
    <ScrollView>
      {result &&
        result.map((item) => (
          <View key={item.id}>
            <Text>
              {item.first_name} {item.last_name}
            </Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default FetchScreen;
