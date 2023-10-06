import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Button, Text, Input } from "react-native-elements";

const AuthForm = ({ headerText, errorMsg, ButtonTitle, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Spacer />
      <Text h2>{headerText}</Text>
      <Spacer />

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />

      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

      <Spacer />

      <Button
        title={ButtonTitle}
        onPress={() => onSubmit({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});

export default AuthForm;
