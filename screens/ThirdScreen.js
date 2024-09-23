import React from "react";
import { SafeAreaView, FlatList, Pressable, Text } from "react-native";

const ThirdScreen = ({ navigation }) => {
  const data = [{ key: "Item 1" }, { key: "Item 2" }, { key: "Item 3" }];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text>{item.key}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};

export default ThirdScreen;
