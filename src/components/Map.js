import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import React from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { useSelector } from "react-redux";

const Map = () => {
  const state = useSelector((state) => state.location);

  if (!state.currentLocation.coords) {
    return (
      <ActivityIndicator
        size="large"
        color="#00ff00"
        style={{ marginTop: 200 }}
      />
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: state.currentLocation.coords.latitude,
        longitude: state.currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        latitude: state.currentLocation.coords.latitude,
        longitude: state.currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={state.currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />

      <Polyline coordinates={state.locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
