import { colors } from "../../../helpers/variables";

export const getColors = (color, type) => {
    var textColor = (type === "secondary") ? colors.orange : colors.white;
    var backgroundColor = (type === "secondary") ? null : colors.orange;

    if (color === 'grey') {
        return {
            backgroundColor: backgroundColor,
            textColor: colors.grey
        }
    }
    if (color === 'purple') {
        return {
            backgroundColor: colors.purple,
            textColor: colors.white
        }
    }
    if (color === 'royal') {
        return {
            backgroundColor: colors.royal,
            textColor: colors.white
        }
    }
    return {
        backgroundColor: backgroundColor,
        textColor: textColor
    }
}