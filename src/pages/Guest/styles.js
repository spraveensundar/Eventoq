import { StyleSheet } from "react-native";

import { colors, fonts, normalize, size, fontScale } from "../../helpers/variables";

const styles = StyleSheet.create({
    checkbox: {
        width: normalize(330),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: size.xxx_small
    },
    loginButton: {
        paddingTop: size.xxx_small,
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        width: normalize(57),
        borderBottomColor: colors.dark,
        borderBottomWidth: 1
    },
    checkBoxContainer: {
        width: normalize(330),
        paddingTop: size.xxx_small
    },
    orContent: {
        paddingTop: size.small,
        flexDirection: "row",
        alignItems: "center"
    },
    account: {
        fontSize: fontScale(14),
        color: colors.dark,
        fontFamily: fonts.poppinsMedium
    },
    login: {
        fontSize: fontScale(17),
        fontFamily: fonts.poppinsMedium,
        color: colors.black
    },
    bottomContainer: {
        paddingVertical: size.x_normal,
        paddingBottom: size.xxx_small
    },
    content: {
        fontSize: fontScale(17),
        fontWeight: "500"
    }
})

export default styles;