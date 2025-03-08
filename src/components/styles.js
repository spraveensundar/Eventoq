import { StyleSheet } from "react-native";

import { colors, fontScale, normalize, size } from "../helpers/variables";

const styles = StyleSheet.create({
    bottomItem: {
        width: normalize(100),
        alignItems: "center",
        paddingTop: size.xx_tiny
    },
    btmitemview: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingVertical: size.five,
        flexWrap: 'wrap'
    },
    label: {
        color: colors.dark,
        fontSize: fontScale(14),
        fontWeight: "500"
    }
});

export default styles;