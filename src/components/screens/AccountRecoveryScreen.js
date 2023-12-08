import { View } from "react-native";
import React from "react";
import AccountRecoveryForm from "../forms/AccountRecoveryForm";

export default function AccountRecoveryScreen(props) {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <AccountRecoveryForm {...props} />
    </View>
  );
}
