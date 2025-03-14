import { StyleSheet } from "react-native";

import { colors, screenHeight, screenWidth, size } from "../../helpers/variables";

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
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black
    },
    whiteContainer: {
        maxHeight: screenHeight - size.large,
        width: screenWidth - size.xx_normal,
        backgroundColor: colors.white
    },
    contentContainer: {
        justifyContent: "center",
        paddingVertical: size.xx_tiny,
        paddingHorizontal: size.xxx_small,
        backgroundColor: colors.orange
    },
    title: {
        color: colors.white,
        textAlign: 'center'
    },
    closeIconContainer: {
        position: "absolute",
        right: 0,
        padding: size.tiny
    },
    closeContainer: {
        paddingRight: size.x_small
    },

})

export default styles;