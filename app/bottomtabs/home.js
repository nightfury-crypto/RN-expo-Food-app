import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { images } from "../../Constants";
import Constants from "expo-constants";
import SearchComp from "../../components/search/SearchComp";
import { epicDealsData } from "../../tempData/epicdealsData";
import EpicDealsCard from "../../components/epicDealsCard/EpicDealsCard";
import { categoriesData } from "../../tempData/categoriesData";
import CategoryCard from "../../components/categoriescard/CategoryCard";
import PopularCard from "../../components/popularcard/PopularCard";
import { popularData } from "../../tempData/popularData";
import { FontAwesome5, Ionicons  } from "@expo/vector-icons";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const home = () => {

  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      setCurrentTime("breakfast")
    } else if (currentTime >= 12 && currentTime < 29) {
      setCurrentTime("lunch")
    } else {
      setCurrentTime("dinner")
    }
  }, [currentTime])
  if (!currentTime) {
    return <Text>Loading...</Text>
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 12 }}
      >
        {/* header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerleft}>
              <Text style={styles.welcmText}>Hey! Codez 👋</Text>
              <Text style={{ fontSize: 13, color: "grey" }}>
                It's {currentTime} time
              </Text>
            </View>
            <View style={styles.headerright}>
              {/* <FontAwesome5 name="grip-lines" size={24} color="#575656" /> */}
              {/* <Ionicons name="notifications" size={24} color="#575656" /> */}
              <View>
                <View style={styles.notiBadge} />
              <Ionicons name="notifications" size={24} color="#575656" />
              </View>
            </View>
          </View>

          <View style={styles.headerBottom}>
            <Ionicons name="md-location" size={28} color="crimson" />
            <View style={styles.locationWrap}>
              <Text style={{ fontSize: 13, fontWeight: "700" }}>Home</Text>
              <Text style={{fontSize: 11, marginTop: -8,}} ellipsizeMode="tail" numberOfLines={1}>
              H.No. 34 Unknown street, 1466X6, Somewhere in the world.</Text>
            </View>
          </View>
        </View>

        {/* search bar */}
        <View style={styles.searchWrap}>
          <SearchComp />
        </View>

        {/* epic deals cards */}
        <View
          style={{
            width: "100%",
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <FlatList
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
            }}
            contentContainerStyle={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            bounces={false}
            bouncesZoom={false}
            data={epicDealsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ width: deviceWidth - 20, height: 300 }}>
                <EpicDealsCard item={item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").width - 20}
          />
        </View>

        {/* categoriess */}
        <View style={styles.categoriesWrap}>
          <Text style={{ fontSize: 19, fontWeight: "700" }}>Categories</Text>
          <FlatList
            contentContainerStyle={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
            }}
            data={categoriesData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryCard item={item} />}
          />
        </View>

        {/* popular */}
        <View style={styles.categoriesWrap}>
          <Text style={{ fontSize: 19, fontWeight: "700" }}>Popular</Text>
          <FlatList
            contentContainerStyle={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
            }}
            data={popularData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              // <View style={styles.popularWrap}>
              <PopularCard item={item} />
              // </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  headerTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  locationWrap: {
    width: "78%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  welcmText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchWrap: {
    width: "100%",
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesWrap: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
  },
  popularWrap: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
  },
  notiBadge: {
    width: 8,
    height: 8,
    borderRadius: 10/2,
    backgroundColor: "crimson",
    position: "absolute",
    bottom: 6,
    right: 2,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#fff"

  }
});
