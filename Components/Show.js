import { useNavigation } from "@react-navigation/native"
import TextStyles from "./StyleText"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const Show = ({ item }) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('Details', { id: item.id })
    }

    return (

        <View style={styles.container}>
            <TextStyles fontSize="tittle">{item.name}</TextStyles>
            <TextStyles fontSize="subtittle">{item.rating.average}</TextStyles>
            <TextStyles fontSize="description">{item.genres.join(", ")}</TextStyles>
            <View style={styles.image}>
                <Image
                    source={{ uri: item.image.medium }}
                    style={{ width: 400, height: 400 }}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                onPress={handlePress}
                style={buttonStyles.button}>
                <Text style={buttonStyles.text}>Ver Detalles</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 30,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'black',
    },
    image: {
        paddingBottom: 20,
        paddingTop: 15,
        display: 'flex',
        alignSelf: 'center'
    }
})

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#ED860A',
        padding: 10,
        borderRadius: 5,
        width: 250,
        alignSelf: "center"
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Show