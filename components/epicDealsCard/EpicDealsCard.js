import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")

const EpicDealsCard = ({item}) => {
    
  return (
    <View style={[styles.container, {backgroundColor: item?.id == 1? "green":"yellow"}]}>
        <ImageBackground source={{"uri": item?.image}} style={styles.bckImg}>
            <View style={{flex: 1, justifyContent: "center", padding: 10, backgroundColor: "rgba(0, 0, 0, 0.3)", width: "100%", display: "flex", alignItems: "center"}}>
                <Text style={{color: "#fff", fontSize: 40, fontWeight: "bold"}}>{item?.title}</Text>
                <Text style={{color: "#fff", fontSize: 20, textAlign: "center",}}>{item?.description}</Text>
                <Text style={{color: "#fff", fontSize: 30, backgroundColor: "#000", textAlign: "center", padding: 5}}>{item?.code}</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default EpicDealsCard

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex1: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    bckImg: {width: "100%", height: "100%", borderRadius: 10, resizeMode: "contain",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
})