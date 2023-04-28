import { useState, useEffect } from "react"
import { FlatList, Text, View } from "react-native"
import axios from "axios"

const List = () => {

    const [apiItems, setApiItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadApiList()
    }, [])

    const loadApiList = () => {
        setLoading(true)
        const loadApiItems = async () => {
            const response = await axios.get('https://api.tvmaze.com/shows?page=2&max=1');
            setApiItems(response.data);
        }
        loadApiItems()
        setLoading(false)
    }


    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
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