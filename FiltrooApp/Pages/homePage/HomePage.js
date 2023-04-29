import { Text, View, Button } from "react-native"

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Esta es la home</Text>
            <Button
                onPress={() => navigation.navigate('List')}
                title="Ir a la lista"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default Home