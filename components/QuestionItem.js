import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";

const QuestionItem = (props) => {
  const { id, question, choices, answer, bookmark, answered } = props;

  const [isBookmark, setIsBookmark] = useState(bookmark ? bookmark : false);
  const [isAnswer, setIsAnswer] = useState(answered ? answered: false);
  const answerHandler = () => {
    setIsAnswer(true)
  };

  return (
    <View style={styles.card}>
      <Text style={styles.question}>
        <TouchableNativeFeedback onPress={() => setIsBookmark(true)}>
          <Ionicons
            name={`ios-bookmark${isBookmark ? "" : "-outline"}`}
            size={25}
            color={Color.primary}
          />
        </TouchableNativeFeedback>
        {question}
      </Text>
      {choices.map((choice, indx) => (
        <View style={styles.choices} key={indx}>
          <TouchableNativeFeedback onPress={answerHandler}>
            <Text>{choice}</Text>
          </TouchableNativeFeedback>
        </View>
      ))}

      {isAnswer ? (
        <Text
          style={{
            ...styles.answer,
            ...{ borderColor: "green", borderWidth: 1 },
          }}
        >
          Answer: {choices[answer]}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: "0.3",
    shadowOffset: { width: 0, height: 3 },
  },
  question: {
    fontFamily: "sans-serif",
    fontSize: 18,
    fontWeight: "bold",
  },
  choices: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#eee",
  },
  answer: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
  },
});

export default QuestionItem;
