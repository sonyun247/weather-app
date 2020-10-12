import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons size="120" name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfcontainer}>{/* todo */}</View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
  },
});
