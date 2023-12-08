import { View, Image } from "react-native";
import React from "react";
import { Button, Text, TextInput, Appbar } from "react-native-paper";

export default function LoginForm({ navigation, style }) {

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: 200,
      height: 100,
      marginBottom: 20, }}
        source={require('../forms/logo.png')}
        mode="contained"
      />
      <Text style={{
      fontSize: 20,
      textAlign: 'center',
      margin: 10 }}>Welcome to Home Page</Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        icon="logout"
        mode="contained"
        style={{ bottom: 20,
        position: 'absolute',
        borderRadius: 5 }}
      >
        Log-Out
      </Button>
    </View>
  );
}
``