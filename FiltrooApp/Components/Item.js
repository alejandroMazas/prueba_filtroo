import TextStyles from "./StyleText"
import { View, Image, Button, StyleSheet } from "react-native"

const Item = ({ item, navigation }) => (

    <View style={styles.container}>
        <TextStyles fontSize="tittle">{item.name}</TextStyles>
        <TextStyles fontSize="subtittle">{item.rating.average}</TextStyles>
        <TextStyles fontSize="description">{item.genres.toString()}</TextStyles>
        <View style={styles.image}>
            <Image
                source={item.image.medium}
                style={{ width: 400, height: 400 }}
                resizeMode="contain"
            />
        </View>
        <Button style={styles.button}
            onPress={() => navigation.navigate('Details', { id: item.id })}
            title="Ver Detalles"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
)

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
        display: "flex",
        alignSelf: "center"
    }
})

export default Item