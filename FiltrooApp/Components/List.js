import { useState, useEffect } from "react"
import { FlatList, View, StyleSheet, RefreshControl } from "react-native"
import apiServices from "../services/api.services"
import Spinner from "./Spinner"
import Item from "./Item"

const List = ({ navigation }) => {

    const [apiItems, setApiItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

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

    const handleRefresh = () => {
        setIsRefreshing(true);
        loadApiList();
        setIsRefreshing(false);
    };

    return (
        <View style={styles.background}>
            {

                loading ?
                    <Spinner />
                    :
                    <FlatList
                        data={apiItems}
                        renderItem={({ item }) => <Item navigation={navigation} item={item} />}
                        keyExtractor={item => item.id.toString()}
                        refreshControl={
                            <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                        }
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: 'black',
    }
})

export default List