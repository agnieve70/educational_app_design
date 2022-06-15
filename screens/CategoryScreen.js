import React from "react";
import { FlatList } from "react-native";
import CategoriesGridItem from "../components/CategoriesGridItem";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoriesGridItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelectCategory={() => {
          props.navigation.navigate({
            routeName: "Questions",
            params: {
              categoryId: itemData.item.id,
              title: itemData.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
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

export default CategoryScreen;
