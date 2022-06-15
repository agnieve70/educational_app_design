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

const QuestionScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedQuestions = QUESTIONS.filter(
    (que) => que.category_id === catId
  );

  return (
    <ScrollView>
      {displayedQuestions.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.heading}>Questions</Text>
          <Text style={styles.instruction}>
            Please Select the correct answer. After selecting answer, you will
            be shown the correct answer.
          </Text>
          {displayedQuestions.map((que) => (
            <QuestionItem
              key={que.id}
              id={que.id}
              question={que.question}
              choices={que.choices}
              answer={que.answer}
            />
          ))}
          <View style={styles.finishButton}>
            <TouchableNativeFeedback
              onPress={() => {
                props.navigation.navigate("Score");
              }}
            >
              <Text style={styles.textFinishButton}>FINISH</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      ) : (
        <View style={styles.container2}>
          <Text style={styles.noContent}>No Question/s Available for this Category</Text>
        </View>
      )}
    </ScrollView>
  );
};

QuestionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("title"),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.7)",
  },
  container2: {
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.7)",
    alignItems: "center",
    alignContent: 'center',
    justifyContent: 'center',
    height: 300
  },
  noContent: {
    fontSize: 14,
    fontWeight: 'bold'
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

export default QuestionScreen;
