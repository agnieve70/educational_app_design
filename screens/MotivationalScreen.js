import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";
const MotivationalScreen = (props) => {

  const QUOTES = [
    `"If you're not willing to learn, no one can help you. If you're determined to learn, no one can stop you."`,
    `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    `"Failure is a success if we learn from it."`,
    `"The roots of education are bitter, but the fruit is sweet."`,
    `"Education is the movement from darkness to light."`,
    `"Develop a passion for learning. If you do, you will never cease to grow"`
  ];

  const [rand, setRand] = useState(0);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setRand(Math.floor(Math.random() * QUOTES.length));
  }, [reload]);

  function handleReload(){
    setReload(reload + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quotes}>{QUOTES[rand]}</Text>
      <Button title="Reload" color={Color.primary} onPress={handleReload} />
    </View>
  );
};

MotivationalScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Motivational Quotes",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  quotes: {
    fontSize: 30,
    fontStyle: "italic",
  },
});

export default MotivationalScreen;
