import react from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../theme.js"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.baseColor,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeigths.normal
    },
    tittle: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.tittle,
        fontWeight: theme.fontWeigths.bold
    },
    subtittle: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subtittle,
        fontWeight: theme.fontWeigths.bold
    }
})

export default function TextStyles({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyle = [
        styles.text,
        fontSize === "body" && styles.text,
        fontSize === "tittle" && styles.tittle,
        fontSize === "subtittle" && styles.subtittle
    ]
    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    )
}