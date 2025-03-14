import { StyleSheet } from "react-native";

import { normalize, size } from "../../../../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    account: {
        width: size.xx_large,
        height: size.xx_large
    },
    nextButton: {
        width: normalize(180)
    }
})

export default styles;