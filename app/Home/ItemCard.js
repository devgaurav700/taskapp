import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Label from '../components/Label'
import { appColors } from '../utils/appColors'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function ItemCard() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ=" }}
                style={styles.image}
            />
            <View style={styles.item}>
                <Label
                    font={"semiBold"}
                    size={16}
                    text={"CK Bakery Shop "}
                />
                <Label
                    text={"Kolkata, India"}
                    style={{ color: appColors.lightBlack }}
                />
                <View style={styles.bottom}>
                    <Label
                        text={"4.5 "}
                        style={{ color: appColors.lightBlack }}
                    />
                    <Rating
                        // showRating
                        ratingCount={5}
                        imageSize={14}
                        style={{ paddingVertical: 4,paddingHorizontal:3.6 }}
                    />
                    <Label
                        text={"(9k)"}
                        style={{ color: appColors.lightBlack }}
                    />
                </View>
                <View style={styles.bottom}>
                    <Label
                        text={"Closed "}
                        style={{ color: appColors.red }}
                    />
                    <Label
                        text={"; Opens 9 AM"}
                        style={{ color: appColors.lightBlack }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 110,
        width: 120,
        borderRadius: 8
    },
    container: {
        flexDirection: "row",
        marginVertical: 12
    },
    item: {
        marginLeft: 16,
        justifyContent: "center"
    },
    bottom: {
        flexDirection: "row",
        alignItems:"center"

    }
})