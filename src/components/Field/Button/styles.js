import { StyleSheet } from "react-native";

import { colors, fontScale, size } from "d:/React Native/ReactNative/src/helpers/variables";

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: size.small,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size.tiny,
        height: size.xxxxx_medium,
        flexDirection: 'row',
        width: 330
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    rightSubContainer: {
        backgroundColor: colors.royal,
        padding: size.x_tiny,
        borderRadius: size.xxx_small,
        left: size.tiny
    },
    buttonSubContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    htmlContainer: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    leftSubContainer: {
        padding: size.x_tiny,
        right: size.tiny
    },
    iconWrapper: {
        marginRight: size.xx_tiny,
        color: colors.white,
        fontSize: fontScale(20)
    },
})
export default styles;