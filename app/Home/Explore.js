import { StyleSheet, Text, View, Image,FlatList } from 'react-native'
import React from 'react'
import { getIcon } from '../utils/getIcon'
import { appColors } from '../utils/appColors'
import ExploreHeader from '../components/ExploreHeader'
import SearchInput from '../components/SearchInput'
import ItemCard from './ItemCard'
import PopupList from '../components/PopupList'

export default function Explore() {
  const ProximityOptns=[
    {
    label:"< 10km",
    onPress:""
  },
  {
    label:"10km - 20km",
    onPress:""
  },
  {
    label:"20km - 30km",
    onPress:""
  },
  {
    label:"30km - 40km",
    onPress:""
  },
  {
    label:">40km",
    onPress:""
  },
]
  const ratingOptns=[
    {
    label:"Any",
    onPress:""
  },
  {
    label:"5 stars",
    onPress:""
  },
  {
    label:"4.5 stars",
    onPress:""
  },
  {
    label:"3 - 4 stars",
    onPress:""
  },
  {
    label:">4 stars",
    onPress:""
  },
]
  return (
    <View style={styles.container}>
      <ExploreHeader
      showBack={true}
      showLocation={true}
        title={"Explore now!"}
      />
    <View style={styles.body}>
    <SearchInput/>
   <View style={styles.popupWrap}>
   <PopupList title={"Proximity"}
    options={ProximityOptns}
    />
     <PopupList title={"Rating"}
    options={ratingOptns}
    />
     <PopupList title={"Popular"}
    options={[]}
    />
   </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={[1,2,3,4,5,6]}
      renderItem={()=> <ItemCard/>}
      keyExtractor={(item,index)=>"key"+index}
      />
     
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white
  },
  popupWrap:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  body:{
    paddingHorizontal:24,
    flex:1
  }
})