import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Header = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.root}>
      <TextInput
        placeholder="Search here..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    backgroundColor: "#222",
    color: "white",
  },
});

export default Header;
