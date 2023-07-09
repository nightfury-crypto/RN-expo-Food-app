import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CartCard from "../../components/cartcard/CartCard";
import { Foundation, Entypo } from "@expo/vector-icons";
import { popularData } from "../../tempData/popularData";

const cart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "You picked",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "700",
            color: "#000",
          },
          headerBackButtonMenuEnabled: true,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backbtn}
              onPress={() => navigation.goBack()}
            >
              {/* backIcon */}
              <View
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: 600,
                  borderWidth: 2,
                  borderColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="arrowleft" size={20} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{width: "100%"}}>

      <FlatList 
      contentContainerStyle={{paddingHorizontal: 10, display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: 12}}
      style={{ width: "100%"}}
      bounces={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={popularData}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={(item) => item.id}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        contentContainerStyle={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        style={{ width: "100%", flex: 1, marginTop: 20 }}
      >
        <View style={styles.applyCoupon}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#000" }}>
              Apply Coupon
            </Text>
            <Foundation name="price-tag" size={24} color="black" />
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              width: "100%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              paddingTop: 10,
              height: 50,
            }}
          >
            <TextInput
              placeholder="Apply Coupon"
              style={{
                borderWidth: 0.5,
                borderColor: "lightgrey",
                flex: 1,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 3,
              }}
            />
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={{ fontSize: 13, fontWeight: "500" }}>Apply Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.appliedCoponView}>
            <Entypo name="circle-with-cross" size={12} color="black" />
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#FF6C44" }}>
              MLOVE100 applied
            </Text>
          </View>
        </View>

        {/* total */}
        <View style={styles.priceInfoWrapView}>
          <View style={styles.priceInfo}>
            <View style={styles.priceInfoWrap}>
              <Text style={styles.textHeading}>Subtotal</Text>
              <Text style={styles.textprice}>Rs. 1,000</Text>
            </View>

            <View style={styles.priceInfoWrap}>
              <Text style={styles.textHeading}>Tax & Fees</Text>
              <Text style={styles.textprice}>Rs. 5.75</Text>
            </View>

            <View style={styles.priceInfoWrap}>
              <Text style={styles.textHeading}>Delivery Charges</Text>
              <Text style={styles.textprice}>Rs. 55</Text>
            </View>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "lightgrey" }}
            />
            <View style={styles.priceInfoWrap}>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#0070a8" }}
              >
                TOTAL
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#0070a8" }}
              >
                Rs. 1060.75
              </Text>
            </View>
          </View>
          {/* terms */}

          <View style={styles.termsView}>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#000" }}>
              By placing your order, you agree to our
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
                color: "#0070a8",
                marginHorizontal: 5,
              }}
            >
              Terms of Use
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#000" }}>
              and
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
                color: "#0070a8",
                marginLeft: 5,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          {/* terms ends here */}
          <View style={styles.checkoutBtnView}>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.continueShoppingView}>
            <TouchableOpacity style={styles.continueShoppingBtn}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "rgb(89, 89, 89)",
                }}
              >
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* total ends here */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  backbtn: {
    marginLeft: 10,
    width: 36,
    height: 36,
    backgroundColor: "rgba(255, 4, 12, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36 / 2,
  },
  applyCoupon: {
    width: "100%",
    backgroundColor: "#fff",
  },
  applyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    height: "100%",
    backgroundColor: "rgba(255, 4, 12, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appliedCoponView: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
    flexDirection: "row",
  },
  priceInfoWrapView: {
    marginTop: 10,
    backgroundColor: "#facfd5",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 40,
    flex: 1,
  },
  priceInfo: {
    width: "75%",
    backgroundColor: "#fff",
    marginTop: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    paddingHorizontal: 20,
  },
  priceInfoWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textHeading: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
  },
  textprice: {
    fontSize: 15,
    fontWeight: "600",
    color: "grey",
  },

  checkoutBtnView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  checkoutBtn: {
    width: "75%",
    backgroundColor: "#0070a8",
    paddingVertical: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  continueShoppingView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  continueShoppingBtn: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "#ff7a91",
  },
  termsView: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
