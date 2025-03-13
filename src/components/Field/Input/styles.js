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
    },
    label: {
        color: colors.dark,
        fontSize: fontScale(14),
        fontFamily: fonts.poppinsMedium
    },
    errorText: {
        marginTop: size.two,
        alignItems: "flex-end",
        marginBottom: -10
    },
    labelText: {
        fontSize: fontScale(17),
        color: colors.black,
        marginBottom: size.xx_tiny,
        fontFamily: fonts.poppinsMedium
    },
    form: {
        width: normalize(330),
        borderColor: colors.dawn,
        borderWidth: 1,
        borderRadius: 8,
        height: size.big
    },
    formContainer: {
        paddingTop: size.xx_tiny
    },
    textContainer: {
        height: size.big,
        paddingVertical: 0,
        backgroundColor: "transparent"
    },
    phoneLabel: {
        padding: 0,
        color: colors.black,
        fontSize: fontScale(14),
        fontFamily: fonts.poppinsMedium
    },
    flag: {
        width: size.medium,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;