import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Label from './Label';
import { appColors } from '../utils/appColors';
export default function PopupList({ title, options }) {
    return (
        <View>
            <Menu>
                <MenuTrigger text={title}
                    customStyles={triggerStyles}
                />
                <MenuOptions customStyles={optionsStyles}>
                    {options && options.map((val, key) => {
                        return (
                            <MenuOption key={key} onSelect={() => alert(val.label)} >
                                <Label font={"medium"} text={val.label} />
                            </MenuOption>
                        )
                    })}
                </MenuOptions>
            </Menu>
        </View>
    )
}

const triggerStyles = {
    triggerText: {
        color: appColors.text,
        fontFamily: "Inter-SemiBold"
    },
    triggerOuterWrapper: {
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 20
    },
    triggerWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // triggerTouchable: {
    //   underlayColor: 'darkblue',
    //   activeOpacity: 70,
    //   style : {
    //     flex: 1,
    //   },
    // },
};
const optionsStyles = {
    optionsContainer: {
        backgroundColor: appColors.white,
        overflow: "hidden",
          paddingVertical: 15,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    optionsWrapper: {
        //   backgroundColor: 'purple',
    },
    optionWrapper: {
        //   backgroundColor: 'yellow',
        //   margin: 5,
        paddingHorizontal:15,
        height:31,
    },
    optionTouchable: {
          underlayColor: '#F2E9FF',
        //   activeOpacity: 70,
    },
    optionText: {
        //   color: 'brown',
    },
};
const styles = StyleSheet.create({

})