import { useState, useEffect } from "react"
import { FlatList, Text, View, Image, Button } from "react-native"
import apiServices from "../../services/api.services"

const List = () => {

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
        <View>
            <Text>{item.name}</Text>
            <Image
                source={item.image.medium}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <Button
                onPress={() => console.log("clik!")}
                title="Ver Detalles"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )

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