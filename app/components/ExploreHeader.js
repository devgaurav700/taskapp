import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Label from './Label'
import { getIcon } from '../utils/getIcon'

export default function ExploreHeader({title,showBack,showLocation,onLocation}) {
  return (
    <View style={styles.container}>
        {showBack&&<Image source={getIcon("back")}/>}
      <Label text={title} font={"semiBold"} size={20} style={styles.label}/>
     {showLocation&& <Image source={getIcon("map")}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:24,
        paddingVertical:10,
        marginTop:30,
        marginBottom:14
    },
    label:{
      flex:1,
    marginLeft:16}
})