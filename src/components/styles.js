import { StyleSheet } from "react-native";

import { size } from "../helpers/variables";

const styles = StyleSheet.create({
    btmitemview: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomItem: {
        flex: 1,
        paddingTop: size.xxxx_tiny,
        justifyContent: 'space-evenly'
    },
    text: {
        paddingVertical: size.tiny,
        flexWrap: 'wrap'
    }
})

export default styles;
