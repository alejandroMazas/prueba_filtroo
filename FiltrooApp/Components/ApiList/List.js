import { useState, useEffect } from "react"
import { FlatList, Text, View, Image, Button, StyleSheet } from "react-native"
import apiServices from "../../services/api.services"
import TextStyles from "../StyleText"
import Spinner from "../Spinner/Spinner"

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
            <TextStyles fontSize="tittle">{item.name}</TextStyles>
            <TextStyles fontSize={"subtittle"}>{item.rating.average}</TextStyles>
            <TextStyles fontSize={"description"}>{item.genres.toString()}</TextStyles>
            <View style={styles.image}>
                <Image
                    source={item.image.medium}
                    style={{ width: 400, height: 400 }}
                    resizeMode="contain"
                />
            </View>
            <Button style={styles.button}
                onPress={() => navigation.navigate('Details')}
                title="Ver Detalles"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )

    const styles = StyleSheet.create({
        background: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: 'black',
        },
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

    return (
        <View style={styles.background}>
            {
                loading ?
                    <Spinner />
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