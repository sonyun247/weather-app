import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Thunder!",
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "DRRRizle",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "Let it Rain",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "ogengkidesuka",
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Go outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Clouds",
    subtitle: "grayish",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#E7E9BB", "#403B4A"],
    title: "Mist",
    subtitle: "Put on a mask",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#D3CBB8", "#6D6027"],
    title: "Dust",
    subtitle: "Put on a mask",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#E7E9BB", "#403B4A"],
    title: "Haze",
    subtitle: "Put on a mask",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={180}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer_bottom}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
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
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  cityName: {
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },
  temp: {
    fontSize: 40,
    color: "white",
  },
  halfContainer_bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 5,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});
