import "../_mockLocations";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../store/reducers/LocationReducer";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../components/TrackForm";

const CreateTrackScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.location);

  const callback = useCallback(
    (location) => {
      dispatch(addLocation(location));
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>

      <Map />

      {err && <Text>Please Enable Location Services! </Text>}

      <TrackForm />
    </SafeAreaView>
  );
};

export default CreateTrackScreen;
