import { StyleSheet, Text, View, Button } from 'react-native'
import List from '../Components/List'

const ListPage = ({ navigation }) => {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Volver"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <List navigation={navigation} />
        </View>
    )
}

export default ListPage