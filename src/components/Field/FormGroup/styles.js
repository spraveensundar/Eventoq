import { StyleSheet } from "react-native";

import { colors, fontScale, size } from "../../../helpers/variables";

const styles = StyleSheet.create({
    errorText: {
        marginTop: size.two,
        alignItems: "flex-end",
        marginBottom: -10
    },
    label: {
        fontSize: fontScale(17),
        color: colors.black,
        fontWeight: "500",
        marginBottom: size.xx_tiny
    },
    form: {
        borderColor: colors.dawn,
        borderWidth: 1,
        borderRadius: 8
    },
    formContainer: {
        paddingTop: size.xx_tiny
    }
})

export default styles;