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
        position: "relative"
    },
    image: {
        width: "60%",
        height: normalize(180)
    },
    wave: {
        position: "absolute",
        bottom: -70,
        left: 0
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: size.big,
        paddingHorizontal: size.xx_normal
    }
})

export default styles;