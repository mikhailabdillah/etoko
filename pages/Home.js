import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f9fbfa",
  },
  header: {
    padding: 16,
    backgroundColor: "#333",
    color: "white",
  },
});

export default Home;
