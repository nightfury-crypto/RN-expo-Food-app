import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const PopularCard = ({ item }) => {

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: 14,
        }}
      >
        <Text style={styles.titleText}>{item?.title}</Text>
        <Image source={{ uri: item?.image }} style={styles.img} />
        <Text>Rs.{item?.price}</Text>
        <View>
          <TouchableOpacity style={styles.addBtn}>
            <AntDesign name="plus" size={14} color="#FF6C44" />
            <Text style={{ color: "#FF6C44", fontSize: 15 }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth / 2.5 - 10,
    height: 200,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginVertical: 8,
  },
  shadowProp: {
    elevation: 2,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  addBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF6C44",
    marginTop: 10,
    gap: 4,
  },
});
