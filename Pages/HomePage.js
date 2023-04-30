import { useNavigation } from "@react-navigation/native"
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"
import TextStyles from "../Components/StyleText"

const Home = () => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('List')
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <TextStyles style={{ alignSelf: "center" }} fontSize="logo">ShowTime</TextStyles>
            </View>
            <Image
                source={require("../assets/posters.png")}
                style={{ width: 500, height: 500 }}
                resizeMode="contain"
            />
            <TouchableOpacity
                onPress={handlePress}
                style={buttonStyles.button}>
                <Text style={buttonStyles.text}>Ir a la lista</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 30,
        paddingBottom: 50,
        paddingTop: 10,
        backgroundColor: 'black',
        display: "flex",
        alignItems: "center"

    },
    image: {
        paddingBottom: 20,
        paddingTop: 15,
        display: "flex",
        alignSelf: "center"
    }
});

const buttonStyles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#841584',
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

export default Home