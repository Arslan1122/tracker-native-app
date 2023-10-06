import { StyleSheet } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  startRecording,
  stopRecording,
  setTrackName,
} from "../store/reducers/LocationReducer";

const TrackForm = () => {
  const { recording, trackName } = useSelector((state) => state.location);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        autoCorrect={false}
        value={trackName}
        onChangeText={(trackName) => dispatch(setTrackName(trackName))}
        autoCapitalize="none"
      />

      {recording ? (
        <Button
          title="STOP Recording"
          onPress={() => dispatch(stopRecording())}
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={() => dispatch(startRecording())}
        />
      )}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
