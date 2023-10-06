import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/AuthReducer";

const TrackListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
