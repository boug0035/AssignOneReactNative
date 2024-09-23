import React from "react";
import { SafeAreaView, ScrollView, Image } from "react-native";

const SecondScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{ uri: "https://via.placeholder.com/400" }}
          style={{ width: 150, height: 150 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondScreen;
