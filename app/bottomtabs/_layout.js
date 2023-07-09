import { Tabs } from "expo-router";
import { AntDesign, Octicons } from "@expo/vector-icons";

export default () => {
  const ICONSIZE = 30;
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#fff",
          height: 57,
          elevation: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          color: "#000",
          fontWeight: "bold",
          marginBottom: 4,
        },
        tabBarActiveTintColor: "#0070a8",
        tabBarIconStyle: {
          marginBottom: -4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={ICONSIZE}
              color={focused ? "#0070a8" : "grey"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          href: "/bottomtabs/cart",
          tabBarIconStyle: {
            marginTop: -20,
          },
          tabBarLabelStyle: {
            marginBottom: 6,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                borderWidth: 4,
                borderColor: "#f8f8f8",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffe3eb",
                  borderRadius: 500,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="shoppingcart"
                  size={ICONSIZE}
                  color={focused ? "#0070a8" : "grey"}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    width: 13,
                    height: 13,
                    borderRadius: 20 / 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffe3eb",
                    borderWidth: 1,
                    borderColor: focused ? "#0070a8" : "grey",
                    zIndex: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 6,
                      color: focused ? "#0070a8" : "grey",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    9+
                  </Text>
                </View>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: "/bottomtabs/profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.profileView,
                {
                  borderWidth: 2,
                  borderColor: focused ? "#0070a8" : "transparent",
                },
              ]}
            >
              <Userprofileicon />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  profileView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Image, StyleSheet, Text, View } from "react-native";

const Userprofileicon = () => {
  return (
    <Image
      source={{
        uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1688091789~exp=1688092389~hmac=269856f8c9b755528c0f2aa969a0f4ba034f9c51409fdd12b2e6ce06c6d6d7d7",
      }}
      style={{
        width: 30,
        height: 30,
        resizeMode: "contain",
        borderRadius: 30 / 2,
      }}
    />
  );
};
