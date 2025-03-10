import { StyleSheet } from "react-native";

import { colors, normalize, size } from "../../../helpers/variables";

const containerPosition = {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: size.xx_medium,
        backgroundColor: colors.white
    },
    event: {
        width: normalize(116),
        height: size.normal
    },
    leftContainer: {
        ...containerPosition,
        left: size.normal
    },
    rightContainer: {
        ...containerPosition,
        right: size.normal,
    },
    card: {
        backgroundColor: colors.orange,
        padding: size.xx_tiny,
        borderRadius: size.big
    },
    icon: {
        padding: size.xx_tiny,
        borderRadius: size.big
    },
    container: {
        padding: size.xxx_small,
        gap: size.small
    },
    row: {
        flexDirection: 'row',
        gap: size.small
    },
    cardContainer: {
        flex: 1,
        borderRadius: size.small,
        paddingVertical: size.xxx_tiny,
        paddingHorizontal: size.xxxx_tiny,
        marginTop: size.xx_tiny
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        height: normalize(68)
    }
})

export default styles;