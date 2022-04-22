import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { appColors } from '../utils/appColors'


function Label({ text, style, size, font }) {
    const fontStyle =
        font === "semiBold" ?
            styles.semiBold
            : font === "medium" ?
                styles.medium :
                styles.regular


    return (
        <Text style={[styles.label, size && { fontSize: size }, fontStyle, style,]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        color: appColors.text,

    },
    regular: { fontFamily: "Inter-Regular" },
    medium: { fontFamily: "Inter-Medium" },
    semiBold: { fontFamily: "Inter-SemiBold" },
    light: {
        color: appColors.black
    },
    dark: {
        color: appColors.white
    }
})


export default Label