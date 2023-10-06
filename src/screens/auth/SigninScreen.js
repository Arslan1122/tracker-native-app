import React from "react";
import { StyleSheet, View } from "react-native";
import Spacer from "../../components/Spacer";
import { Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import trackerApi from "../../api/tracker";
import {
  addError,
  clearErrorMessage,
  setUser,
} from "../../store/reducers/AuthReducer";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../../components/AuthForm";
import { useFocusEffect } from "@react-navigation/native";

const SigninScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearErrorMessage());
    }, [])
  );

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.auth.errorMessage);

  const HandleSignIn = async (data) => {
    try {
      const response = await trackerApi.post("/signin", data);

      dispatch(setUser({ user: data.email, token: response.data.token }));

      navigation.navigate("TrackerNavigation", { screen: "TrackList" });
    } catch (err) {
      dispatch(addError("Something Went Wrong!"));
    }
  };

  return (
    <View style={styles.container}>
      <Spacer />

      <AuthForm
        headerText="Sign In For Tracker"
        errorMsg={errorMsg}
        ButtonTitle="Sign In"
        onSubmit={HandleSignIn}
      />

      <Spacer />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.loginText}>Already have account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 250,
    justifyContent: "center",
  },

  loginText: {
    textAlign: "center",
    color: "blue",
  },
});
