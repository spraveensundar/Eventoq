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
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    subContainer: {
        flex: 1
    },
    header: {
        paddingVertical: size.x_normal,
    },
    leftContainer: {
        ...containerPosition,
        left: size.x_normal
    },
    rightContainer: {
        ...containerPosition,
        right: size.x_normal
    },
    title: {
        textAlign: "center"
    },
    content: {
        paddingRight: size.regular,
        paddingLeft: size.regular
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: size.xx_medium
    }
})

export default styles;