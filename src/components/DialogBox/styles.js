import { StyleSheet } from "react-native";

import { colors, size } from "../../helpers/variables";

const containerPosition = {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1
};

const styles = StyleSheet.create({
    webviewContainer: {
        flex: 1,
        backgroundColor: colors.black
    },
    header: {
        backgroundColor: colors.black,
        paddingVertical: size.xx_normal,
    },
    leftContainer: {
        ...containerPosition,
        left: size.xxx_small
    },
    rightContainer: {
        ...containerPosition,
        right: size.xxx_small
    },
    title: {
        textAlign: "center",
        color: colors.white
    },
    event: {
        width: size.xxxx_big,
        height: size.xlarge
    }
})

export default styles;