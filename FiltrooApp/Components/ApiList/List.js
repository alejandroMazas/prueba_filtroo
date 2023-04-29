import { useState, useEffect } from "react"
import { FlatList, Text, View, Image, Button, StyleSheet } from "react-native"
import apiServices from "../../services/api.services"

const List = ({ navigation }) => {

    const [apiItems, setApiItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadApiList()
    }, [])

    const loadApiList = () => {
        setLoading(true)
        apiServices
            .getAllItems()
            .then(({ data }) => {
                setLoading(false)
                setApiItems(data)
            })
    }




    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.strong}>{item.name}</Text>
            <Image
                source={item.image.medium}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <Button
                onPress={() => navigation.navigate('Details')}
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
        },
        strong: {
            color: '39FF33',
            fontWeight: 'bold',
            marginBottom: 10
        }
    })

    return (
        <View>
            {
                loading ?
                    <Text>...Loading</Text>
                    :

                    <FlatList
                        data={apiItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
            }
        </View>
    )
}

export default List