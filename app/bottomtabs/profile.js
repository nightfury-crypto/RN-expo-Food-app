import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Stack, useNavigation } from "expo-router";
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import RecentOrders from "../../components/recentorders/RecentOrders";

const profile = () => {
  const [orderShow, setOrderShow] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", display: "flex" }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={styles.profileTop}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            }}
            style={styles.img}
          />
        </View>

        {/* user Info */}
        <View style={styles.userInfo}>
          <View style={styles.info}>
            <Entypo name="user" size={24} color="#960019" />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>ig_codez</Text>
          </View>
          <View style={styles.info}>
            <MaterialIcons name="email" size={24} color="#960019" />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>
              codez@gmail.com
            </Text>
          </View>
          <View style={styles.info}>
            <Entypo name="phone" size={24} color="#960019" />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>
              +91 1234567890
            </Text>
          </View>
          <View style={[styles.info, { alignItems: "flex-start" }]}>
            <FontAwesome name="address-book" size={24} color="#960019" />
            <Text style={{ fontSize: 16, fontWeight: "400", width: "90%" }}>
              H.No. 34 Unknown street, 1466X6, Somewhere in the world.
            </Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* recent posts */}
        <View style={styles.recentOrders}>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <View
              style={{
                gap: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="history" size={24} color="black" />
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Order History
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>View All</Text>
          </View>
          {!orderShow ? (
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "300", color: "grey" }}>
                No Recent Orders
              </Text>
            </View>
          ) : (
            <View style={styles.order}>
              <RecentOrders />
              <RecentOrders />
              <RecentOrders />
              <RecentOrders />
              <RecentOrders />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  profileTop: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: "#ccc",
  },
  userInfo: {
    width: "100%",
    backgroundColor: "rgba(255, 4, 12, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical: 20,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  recentOrders: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  order: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    gap: 10,
    height: 180,
    overflow: "hidden",
  },
  editBtn: {
    width: "100%",
    backgroundColor: "#960019",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
