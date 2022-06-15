import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";

const CategoriesGridItem = props => {
    return (
      <View style={styles.gridItem}>
        <TouchableNativeFeedback onPress={props.onSelectCategory}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </TouchableNativeFeedback>
      </View>
    );
}


const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 18,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(255,255,255, 0.7)",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
    textAlign: "center",
  },
});

export default CategoriesGridItem;