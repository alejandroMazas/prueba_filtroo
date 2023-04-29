import react from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../theme.js"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.body,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeigths.normal,
        paddingBottom: 5
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
    }

})

export default function TextStyles({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyle = [
        styles.text,
        fontSize === "body" && styles.text,
        fontSize === "tittle" && styles.tittle,
        fontSize === "subtittle" && styles.subtittle,
        fontSize === "description" && styles.description,
        style
    ]
    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    )
}