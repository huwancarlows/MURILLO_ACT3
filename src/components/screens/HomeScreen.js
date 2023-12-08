import { View } from "react-native";
import React from "react";
import LoginForm from "../forms/HomeForm";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#805158",
      }}
    >
      <LoginForm {...props} />
    </View>
  );
}
