import { StyleSheet, Text, TextInput, View } from "react-native";
import React, {useState, useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
const SearchComp = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("pizza")
  useEffect(() => {
    const unsub = setInterval(() => {
      if(searchPlaceholder === "pizza"){
        setSearchPlaceholder("burger")
      }else if(searchPlaceholder === "burger"){
        setSearchPlaceholder("hotdog")
      }else if(searchPlaceholder === "hotdog"){
        setSearchPlaceholder("sandwich")
      }else if(searchPlaceholder === "sandwich"){
        setSearchPlaceholder("sweet")
      }else if(searchPlaceholder === "sweet"){
        setSearchPlaceholder("sushi")
      }else if(searchPlaceholder === "sushi"){
        setSearchPlaceholder("pasta")
      }else if(searchPlaceholder === "pasta"){
        setSearchPlaceholder("noodle")
      }else if(searchPlaceholder === "noodle"){
        setSearchPlaceholder("drink")
      }else if(searchPlaceholder === "drink"){
        setSearchPlaceholder("pastry")
      }else if(searchPlaceholder === "pastry"){
        setSearchPlaceholder("pizza")
      }
    }, 3000)

    return () => {
      clearInterval(unsub)
    }
  }, [searchPlaceholder])
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={18} color="grey" />
      <TextInput placeholder={`Search "${searchPlaceholder}"`} style={styles.searchinput} />
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(200, 200, 200, 0.1)",
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  searchinput: {
    flex: 1,
    fontSize: 14,
  },
});
