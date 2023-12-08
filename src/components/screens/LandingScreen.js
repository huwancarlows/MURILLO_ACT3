import { View } from "react-native";
import React from "react";
import LandingForm from "../forms/LandingForm";

export default function LandingScreen(props) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#805158", }}>
      <LandingForm {...props} />
    </View>
  );
}
