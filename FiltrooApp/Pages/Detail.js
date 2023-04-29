import { Text, View } from "react-native"
import apiServices from "../services/api.services"
import { useState, useEffect } from "react"

const DetailPage = ({ route }) => {

    const [itemDetail, setItemDetail] = useState({})
    const [isLoadingDetail, setLoadingDetail] = useState(false)

    const { id } = route.params;



    useEffect(() => {
        loadDetail()
    }, [])

    const loadDetail = () => {
        setLoadingDetail(true)
        apiServices
            .getOneItem(id)
            .then(({ data }) => {
                setItemDetail(data)
                setLoadingDetail(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>{itemDetail.name}</Text>
        </View>
    )
}

export default DetailPage