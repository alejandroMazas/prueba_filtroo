import { Text, StyleSheet } from "react-native"
import theme from "../theme.js"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.baseColor,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeigths.normal,
        paddingBottom: 10
    },
    tittle: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.tittle,
        fontWeight: theme.fontWeigths.bold,
        paddingBottom: 20
    },
    subtittle: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subtittle,
        fontWeight: theme.fontWeigths.bold,
        paddingBottom: 5
    },
    description: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.subtittle,
        fontWeight: theme.fontWeigths.normal,
        paddingBottom: 10
    },
    logo: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.Logo,
        fontWeight: theme.fontWeigths.bold,
        paddingBottom: 20,

    }

})

export default function TextStyles({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyle = [
        styles.text,
        fontSize === "body" && styles.text,
        fontSize === "tittle" && styles.tittle,
        fontSize === "subtittle" && styles.subtittle,
        fontSize === "description" && styles.description,
        fontSize === "logo" && styles.logo,
        style
    ]
    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    )
}