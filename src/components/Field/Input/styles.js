import { StyleSheet } from "react-native";

import { colors, fontScale, size } from "d:/React Native/ReactNative/src/helpers/variables";

const styles = StyleSheet.create({
    inputContainer: {
        width: 330,
        paddingHorizontal: 16,
        fontWeight: "400",
        height: 50,
        lineHeight: fontScale(21),
    },
    checkboxWrapper: {
        flexDirection: "row",
        alignItems: 'center'
    },
    checkboxSubContainer: {
        height: size.xxxx_small,
        width: size.xxxx_small,
        borderWidth: 1,
        borderRadius: size.two,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange
    },
    labelWrapper: {
        paddingLeft: size.xx_tiny
    }
})

export default styles;