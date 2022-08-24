import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState();

  const add = () => {
    const sum = +value1 + +value2;
    setTotal(sum);
  };
  const subtract = () => {
    const sum = +value1 - +value2;
    setTotal(sum);
  };
  return (
    <View style={styles.container}>
      <Text>Result = {total} </Text>

      <View style={styles.Text}>
        <TextInput
          value={value1}
          onChangeText={(text) => setValue1(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.Text}>
        <TextInput
          value={value2}
          onChangeText={(text) => setValue2(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.ButtonView}>
        <Button style={styles.Button} title="+" onPress={add} />
        <Button style={styles.Button} title="-" onPress={subtract} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: "50%",
    fontWeight: "bold",
  },
  ButtonView: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  Button: {
    marginLeft: 10,
    width: "auto",
    height: 100,
    padding: 10,
  },
});
