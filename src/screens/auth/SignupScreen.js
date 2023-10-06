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

const SignupScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearErrorMessage());
    }, [])
  );

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.auth.errorMessage);

  const HandleSignUp = async (data) => {
    try {
      const response = await trackerApi.post("/signup", data);

      dispatch(setUser({ user: data.email, token: response.data.token }));

      navigation.navigate("TrackerNavigation", { screen: "TrackList" });
    } catch (err) {
      console.log(err);
      dispatch(addError("Something Went Wrong!"));
    }
  };

  return (
    <View style={styles.container}>
      <Spacer />

      <AuthForm
        headerText="Sign Up For Tracker"
        errorMsg={errorMsg}
        ButtonTitle="Sign Up"
        onSubmit={HandleSignUp}
      />

      <Spacer />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
