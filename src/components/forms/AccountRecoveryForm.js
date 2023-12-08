import React from 'react';
import { View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider, TextInput } from 'react-native-paper';

const AccountRecoveryForm = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <PaperProvider>
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Account Recovery</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email Address"
        style={{ marginTop: 10 }}
        error={false}
      />
      <Button

      icon="account-group" mode="contained" style={{ marginTop: 10 }}>
        SEND RESET INSTRUCTIONS
      </Button>
      <Button
        icon="lock-reset"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        REMEMBER PASSWORD
      </Button>
      <Button
      onPress={() => navigation.navigate("Login")}
        icon="account-plus"
        style={{ marginTop: 10 }}
      >
        Back to Login
      </Button>
    </View>
      </Modal>
    </Portal>
    <Button style={{marginTop: 30}} onPress={showModal}>
      INSTRUCTIONS
    </Button>
  </PaperProvider>
  );
  };

  export default AccountRecoveryForm;
