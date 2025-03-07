import { StyleSheet } from "react-native";

import { colors, fonts, fontScale, normalize, size } from "../../../helpers/variables";

const styles = StyleSheet.create({
    inputContainer: {
        width: normalize(330),
        paddingHorizontal: size.x_small,
        fontWeight: "400",
        height: size.big,
        lineHeight: fontScale(21)
    },
    checkboxWrapper: {
        flexDirection: "row",
        alignItems: 'center'
    },
    checkboxSubContainer: {
        height: size.xxxx_small,
        width: size.xxxx_small,
        borderWidth: 1,
        borderRadius: size.two,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange
    },
    labelWrapper: {
        paddingLeft: size.xx_tiny
    },
    pinCodeContainer: {
        width: size.big,
        height: size.big,
        borderBottomWidth: 2,
        borderRadius: size.five,
        borderColor: colors.dawn
    },
    pinCodeText: {
        fontSize: fontScale(24),
        color: colors.orange,
        fontFamily: fonts.poppinsSemiBold,
        textAlign: 'center'
    },
    focusStick: {
        width: '100%',
        height: size.xxx_tiny,
        backgroundColor: colors.black,
        marginTop: size.tiny
    },
    activePinCodeContainer: {
        borderBottomWidth: size.two
    },
    pinCode: {
        paddingVertical: size.xxx_small
    }
})

export default styles;