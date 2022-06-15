import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { QUESTIONS } from "../data/dummy-data";
import QuestionItem from "../components/QuestionItem";
import Color from "../constants/Color";

const BookmarksScreen = (props) => {
  const catId = "c1"

  const displayedQuestions = QUESTIONS.filter(
    (que) => que.category_id === catId
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Questions</Text>
        <Text style={styles.instruction}>
          Please Select the correct answer. After selecting answer, you will be
          shown the correct answer.
        </Text>
        {displayedQuestions.map((que) => (
          <QuestionItem
            answered={true}
            bookmark={true}
            key={que.id}
            id={que.id}
            question={que.question}
            choices={que.choices}
            answer={que.answer}
          />
        ))}
      </View>
    </ScrollView>
  );
};

BookmarksScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Bookmarks",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.7)",
  },
  heading: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  instruction: {
    color: "#aaa",
    fontSize: 12,
    marginHorizontal: 20,
  },
  finishButton: {
    backgroundColor: Color.primary,
    marginBottom: 30,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },
  textFinishButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default BookmarksScreen;
