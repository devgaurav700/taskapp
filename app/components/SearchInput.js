import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { getIcon } from '../utils/getIcon'
import { appColors } from '../utils/appColors'

export default function SearchInput({ }) {
    return (
        <View style={styles.container}>
            <Image source={getIcon("search")} />
            <TextInput
                placeholder='Search'
                placeholderTextColor={"#97A8BE"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth:1,
        borderColor:appColors.border,
        borderRadius:8,
        paddingHorizontal:12

    }
})