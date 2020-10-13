import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Loading() {
  return (
    <LinearGradient
      colors={["#12c2e9", "#c471ed", "#f64f59"]}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>주변 둘러보는 중...</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});

export default Loading;
