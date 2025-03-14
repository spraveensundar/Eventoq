import { StyleSheet } from "react-native";

import { colors, normalize, size } from "../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        backgroundColor: colors.orange,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
    },
    image: {
        width: "60%",
        height: normalize(180),
        marginTop: size.xxx_small,
        backgroundColor: colors.orange
    },
    wave: {
        position: "absolute",
        bottom: -70,
        left: 0
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: size.xlarge,
        paddingHorizontal: size.xx_normal
    },
    leftContainer: {
        position: "absolute",
        top: 60,
        bottom: 0,
        zIndex: 1,
        left: size.xxx_small
    },
    headerLogo: {
        width: "30%",
        height: "40%",
        position: "absolute",
        top: "35%"
    },
    header: {
        width: "50%",
        height: "20%",
        position: "absolute",
        top: "45%"
    },
    leafSix: {
        position: "absolute",
        right: -10,
        bottom: -15
    },
    leafFive: {
        position: "absolute",
        right: -10,
        bottom: -15
    },
    leafFour: {
        position: "absolute",
        right: -10,
        bottom: -15
    },
    leafThree: {
        position: "absolute",
        bottom: 0,
        right: 150
    },
    leafTwo: {
        position: "absolute",
        right: -10,
        bottom: -15
    },
    leafOne: {
        position: "absolute",
        bottom: 0,
        right: 20
    },
    flower: {
        position: "absolute",
        left: -35,
        bottom: -30
    },
    internet: {
        padding: size.x_small
    },
})

export default styles;