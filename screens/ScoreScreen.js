import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";

const ScoreScreen = (props) => {

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Category" })],
  });
  
    return (
      <View style={styles.container}>
        <Text style={styles.goodJob}>Good Job!</Text>
        <Ionicons name="happy" size={50} color={Color.accentColor} />
        <Text style={styles.motivation}>You have a long way to go</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>3/30</Text>
        </View>
        <View style={styles.goToProfileButton}>
          <TouchableNativeFeedback onPress={() => {
             props.navigation.dispatch(resetAction);
            } 
            } >

            <Text style={styles.goToProfileButtonText}>Back to Categories</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
};

ScoreScreen.navigationOptions  = {
    headerLeft: () => null
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: "0.3",
    shadowOffset: { width: 0, height: 3 },
    height: 370,
  },
  goodJob: {
    fontSize: 30,
  },
  motivation: {
    fontSize: 20,
  },
  scoreContainer: {
    // backgroundColor: '#ccc',
    padding: 20,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: Color.primary,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  goToProfileButton: {
    backgroundColor: Color.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 15,
  },
  goToProfileButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ScoreScreen;