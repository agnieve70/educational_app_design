import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";

const ProfileScreen = (props) => {
  function logoutHandler() {
    props.navigation.navigate("Auth");
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-1/275671993_2095381223956787_3744870201662105590_n.jpg?stp=c2.82.316.316a_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH4KC02G7gL0lQO77zygebNPWG8BMAvI0c9YbwEwC8jR4E_JZUMPRxTI_BJA9Kd6jUkeZMtsRj6cZiZGPKBLVeI&_nc_ohc=719Mygc9faIAX8iwk74&tn=hynhq_vLV0FNTPKK&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-3WMjiyRqxrC0ysQeIQRJEY45Jf2prnDLHmo7eQ2Peaw&oe=62AE34AF",
              }}
            />
          </View>
          <Text style={{ ...styles.title, ...styles.header }}>
            JOWNA JONA
          </Text>
          <View style={styles.changePasswordButton}>
            <Button title="Logout" onPress={logoutHandler} />
          </View>
          <Text style={styles.content}>
            Address:{" "}
            <Text style={styles.emphasize}>
              Lim del Rosario Street., Digos City, Davao del Sur
            </Text>
          </Text>
          <Text style={styles.content}>
            Gender: <Text style={styles.emphasize}>Female</Text>{" "}
          </Text>
          <Text style={styles.content}>
            Status: <Text style={styles.emphasize}>Single</Text>{" "}
          </Text>
          <Text style={styles.content}>
            Email: <Text style={styles.emphasize}>jownajona@gmail.com</Text>
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={5}
          style={styles.screen}
        >
          <View style={styles.container}>
            <ScrollView>
              <View>
                <Text style={styles.title}>CHANGE PASSWORD</Text>
                <Text style={styles.label}>Old Password: </Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  keyboardType="default"
                  autoCapitalize="none"
                />
              </View>
              <View>
                <Text style={styles.label}>New Password: </Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  keyboardType="default"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.changePasswordButton}>
                <Button title="Change Password" />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Hi JOWNA",
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
  screen: {
    flex: 1,
  },
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
  label: {
    marginHorizontal: 20,
  },
  input: {
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profileImage: { width: 200, height: 200, borderRadius: 200 / 2 },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  changePasswordButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  header: {
    fontSize: 24,
    color: Color.green,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  emphasize: {
    fontWeight: "bold",
  },
});

export default ProfileScreen;
