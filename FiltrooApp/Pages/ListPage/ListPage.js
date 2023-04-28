import { StyleSheet, Text, View, Button } from 'react-native'
import List from '../../Components/ApiList/List'

const ListPage = ({ navigation }) => {
    return (
        <View>
            <Text>Pagina de la lista</Text>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Ver Detalles"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default ListPage