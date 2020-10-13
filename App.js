import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import getEnv from "./environment";
const { API_KEY } = getEnv();

export default class extends React.Component {
  state = { isLoading: true };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        name,
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, temp, condition: weather[0].main, name });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Error", "Can't find your location");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} name={name} />
    );
  }
}
