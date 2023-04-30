import { useNavigation } from "@react-navigation/native"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"

const Home = () => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('List')
    }

    return (
        <View>
            <Text>Esta es la home</Text>
            <TouchableOpacity
                onPress={handlePress}
                style={buttonStyles.button}>
                <Text style={buttonStyles.text}>Ir a la lista</Text>
            </TouchableOpacity>
        </View>
    )
}

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