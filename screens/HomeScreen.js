import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export function HomeScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendRequest = async () => {
    try {
      await fetch("https://webhook.site/7e0221d5-313f-45bb-9fd8-302877dee222", {
        method: "post",
        mode: "no-core",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
        }),
      });
      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <Text>Unesi ime</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi prezime</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSurname}
          value={surname}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Unesi lozinku</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <Button title="Send request" onPress={sendRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
  },
  inputWrapper: {
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
