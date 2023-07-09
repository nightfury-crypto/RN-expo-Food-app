import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecentOrders = () => {
  return (
    <View style={styles.container}>
      <Text>RecentOrders</Text>
    </View>
  )
}

export default RecentOrders

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#e4f7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    },
})