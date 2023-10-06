import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import CreateTrackScreen from "./src/screens/CreateTrackScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import SigninScreen from "./src/screens/auth/SigninScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./src/store/Index";
import { Provider, useSelector } from "react-redux";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const customTabBarStyle = {
  tabBarIcon: {
    color: "black",
  },
  tabBarStyle: {
    backgroundColor: "white", // Change the background color as needed
  },
};

const TrackerNavigation = () => {
  return (
    <Stack.Navigator useLegacyImplementation>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetails" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator barStyle={customTabBarStyle.tabBarStyle}>
          <Tab.Screen name="TrackerNavigation" component={TrackerNavigation} />
          <Tab.Screen name="Create" component={CreateTrackScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
