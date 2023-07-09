import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { images } from "../../Constants";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const CartCard = ({item}) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 14,
        }}
      >
        <Text style={styles.titleText}>{item?.title}</Text>
        <Image
          source={{ uri: item?.image }}
          style={styles.img}
        />
        <Text style={{fontSize: 16, fontWeight: "600"}}>{`Rs. ${item?.price}`}</Text>
        <View style={styles.quantityView}>
          <View style={styles.quantityViewWrap}>
            <TouchableOpacity style={styles.addBtn}>
              <AntDesign name="minus" size={14} color="#FF6C44" />
            </TouchableOpacity>

            <TextInput style={[styles.input, {color: "black"}]} value="1" editable={false} />
            <TouchableOpacity style={styles.addBtn}>
              <AntDesign name="plus" size={14} color="#FF6C44" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth / 2.5 - 10,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
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
  },
  quantityView: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  quantityViewWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 7,
    width: "50%"
  },
  input: {
    width: 40,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
