import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  LineChart,
  PieChart
} from "react-native-chart-kit";

import CustomHeaderButton from "../components/HeaderButton";
const StatusScreen = props => {

    const chartConfig = {
      backgroundColor: "#aaa",
      backgroundGradientFrom: "#eee",
      backgroundGradientTo: "#ddd",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `black`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional
    };
    
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: ["Quizzes Scoreboard"], // optional
    };

    const pieData = [
      {
        name: "MATH",
        population: 78,
        color: "#86af49",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
      {
        name: "ENGLISH",
        population: 80,
        color: "#034f84",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
      {
        name: "FILIPINO",
        population: 90,
        color: "#f7786b",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
      {
        name: "SCIENCE",
        population: 75,
        color: "#ff7b25",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
      {
        name: "HISTORY",
        population: 56,
        color: "#b2ad7f",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
      {
        name: "LAW",
        population: 98,
        color: "#ada397",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Status Monitoring</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        <PieChart
          data={pieData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 10]}
          absolute
        />
      </View>
    );
}

StatusScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Educational Status",
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
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    marginVertical: 10
  }
});

export default StatusScreen;