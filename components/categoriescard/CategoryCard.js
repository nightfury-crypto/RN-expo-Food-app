import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCard = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: item?.id == 3 ? "#f5ffc4" : "rgba(255, 4, 12, 0.1)" }]}>
        <Image source={{"uri" : item?.image}} style={styles.image}/>
      <Text style={{fontSize: 15, fontWeight: "600"}}>{item?.title}</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        marginBottom: 0
    }
})