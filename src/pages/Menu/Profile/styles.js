import { StyleSheet } from "react-native";

import { colors, normalize, size } from "../../../helpers/variables";

const styles = StyleSheet.create({
    userContainer: {
        width: size.xxxx_big,
        height: size.xxxx_big,
        backgroundColor: colors.smoke,
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: normalize(100)
    },
    user: {
        paddingVertical: size.xx_small,
        alignItems: "center"
    },
    icon: {
        top: size.five
    },
    userName: {
        paddingTop: size.xxx_small
    },
    panelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: size.x_tiny,
        height: size.xxx_big
    },
    copyRight: {
        paddingTop: size.xxx_small,
        paddingBottom: size.xx_big,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default styles;