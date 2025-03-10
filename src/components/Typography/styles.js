import { StyleSheet } from "react-native";

import { colors, fonts, normalize, size, fontScale } from "../../helpers/variables";

const styles = StyleSheet.create({
    required: {
        color: colors.red
    },
    margin0: {
        paddingTop: 0
    },
    margin5: {
        paddingTop: normalize(5)
    },
    margin10: {
        marginTop: normalize(10)
    },
    margin15: {
        marginTop: normalize(15)
    },
    margin20: {
        marginTop: normalize(20)
    },
    margin30: {
        marginTop: normalize(30)
    },
    h1: {
        fontFamily: fonts.poppinsBold,
        fontWeight: "700",
        fontSize: fontScale(28),
        lineHeight: fontScale(42),
        color: colors.black,
    },
    h2: {
        fontFamily: fonts.poppinsMedium,
        fontSize: fontScale(17),
        lineHeight: fontScale(25),
        color: colors.black
    },
    h3: {
        fontFamily: fonts.poppinsRegular,
        fontSize: fontScale(14),
        lineHeight: fontScale(21),
        color: colors.dark
    },
    h4: {
        fontFamily: fonts.poppinsRegular,
        fontSize: fontScale(16),
        lineHeight: fontScale(24),
        color: colors.dark
    },
    h5: {
        fontFamily: fonts.poppinsBold,
        fontSize: fontScale(17),
        color: colors.orange
    },
    p: {
        fontFamily: fonts.poppinsRegular,
        fontSize: fontScale(14),
        color: colors.dark
    },
    small: {
        fontFamily: fonts.poppinsRegular,
        fontSize: fontScale(12)
    },
    label: {
        fontSize: fontScale(22),
        fontFamily: fonts.poppinsSemiBold,
        lineHeight: fontScale(22),
        color: colors.black
    },
    link: {
        fontFamily: fonts.poppinsBold,
        color: colors.royal
    },
    text: {
        paddingTop: size.xx_tiny,
        lineHeight: fontScale(22)
    },
    title: {
        fontSize: fontScale(22),
        fontFamily: fonts.poppinsBold,
        color: colors.black,
        fontWeight: "700"
    },
    bold: {
        fontFamily: fonts.poppinsBold
    },
    medium: {
        fontFamily: fonts.poppinsMedium
    },
    semiBold: {
        fontFamily: fonts.poppinsSemiBold
    },
    regular: {
        fontFamily: fonts.poppinsRegular
    },
    center: {
        textAlign: 'center'
    },
    left: {
        textAlign: 'left'
    },
    big: {
        fontSize: fontScale(45),
        fontFamily: fonts.poppinsBold,
        color: colors.black,
        fontWeight: "700"
    },
    right: {
        textAlign: 'right'
    },
    labelText: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;