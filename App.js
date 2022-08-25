import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

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
      <Text style={{ fontweight: "bold" }}>Result: {total} </Text>

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
        <TouchableOpacity style={styles.Button} onPress={add}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={subtract}>
          <Text>-</Text>
        </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: "gray",
    width: "50%",
  },
  ButtonView: {
    marginTop: 4,
    flexDirection: "row",
  },

  Button: {
    height: 40,
    width: 40,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 6,
    justifyContent: "center",
    backgroundColor: "gray",
  },
});
