import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate("Second")}
      />
      <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate("Third")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
