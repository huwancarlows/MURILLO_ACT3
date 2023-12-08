import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LandingForm({ navigation }) {

    return (
        <View styles={{ flex: 1, backgroundColor: "black", }}>
        <Image
        style={styles.logo}
        source={require('../forms/logo.png')}
      />
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.description}>
        Explore amazing features and connect with people around the world.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
        onPress={() => navigation.navigate("Login")}
        icon="login" mode="contained" style={{ marginTop: 10, width: '80%', alignSelf: 'center' }}>
        Login
        </Button>
        <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus" mode="contained" style={{ marginTop: 10, width: '80%', alignSelf: 'center' }}>
        Register
        </Button>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
      },
      logo: {
        width: 200,
        height: 100,
        marginBottom: 20,
    },
    buttonContainer: {
      marginTop: 80,
    },
});