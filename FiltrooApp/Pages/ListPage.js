import { View } from 'react-native'
import List from '../Components/ShowList'
import apiServices from "../services/api.services"
import { useEffect, useState } from 'react'

const ListPage = () => {

    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        loadShows()
    }, [])

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await loadShows()
        setIsRefreshing(false);
    };

    const loadShows = async () => {
        try {
            setLoading(true)
            const { data } = await apiServices.getShows()
            setShows(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View>
            <List
                shows={shows}
                loading={loading}
                handleRefresh={handleRefresh}
                isRefreshing={isRefreshing} />
        </View>
    )
}

export default ListPage