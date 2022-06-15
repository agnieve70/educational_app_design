import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Platform } from "react-native";

import Color from "../constants/Color";
import CategoryScreen from "../screens/CategoryScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import ScoreScreen from "../screens/ScoreScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AuthScreen from "../screens/AuthScreen";
import MotivationalScreen from "../screens/MotivationalScreen";
import StatusScreen from "../screens/StatusScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" || Platform.OS === "web"
        ? Color.primary
        : Color.primary,
  },
  headerTitleStyle: {},
  headerTintColor:
    Platform.OS === "android" || Platform.OS === "web" ? "#fff" : Color.primary,
};

const QuestionsNavigator = createStackNavigator(
  {
    Category: CategoryScreen,
    Questions: QuestionsScreen,
    Score: ScoreScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Bookmarks: BookmarksScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenConfig = {
  Places: {
    screen: QuestionsNavigator,
    navigationOptions: {
      tabBarLabel: "Places",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-help" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.primary,
      tabBarLabel: <Text>Questions</Text>,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-bookmark" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.accentColor,
      tabBarLabel:
        Platform.OS === "android" || Platform.OS === "web" ? (
          <Text /*style={{ fontFamily: "open-sans-bold" }}*/>Bookmarks</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const QuestionFavTabNavigator = createMaterialBottomTabNavigator(
  tabScreenConfig,
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-help" : "ios-help"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    activeColor: "white",
    shifting: true,
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-person" : "ios-person"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MotivationalNavigator = createStackNavigator(
  {
    Motivational: MotivationalScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={
            Platform.OS === "android"
              ? "md-battery-charging"
              : "ios-battery-charging"
          }
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const StatusNavigator = createStackNavigator(
  {
    Status: StatusScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "bar-chart" : "bar-chart"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const UserNavigator = createDrawerNavigator(
  {
    Profile: ProfileNavigator,
    Motivational: MotivationalNavigator,
    Status: StatusNavigator,
    QuestionsFav: {
      screen: QuestionFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Questions",
      },
    },
    // Bookings: BookingNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Color.green,
      itemsContainerStyle: {
        marginVertical: 84,
      },
      iconContainerStyle: {
        opacity: 1,
      },
      labelStyle: {
        // fontFamily: "open-sans-bold",
        fontSize: 15,
      },
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  User: UserNavigator,
});

export default createAppContainer(MainNavigator);