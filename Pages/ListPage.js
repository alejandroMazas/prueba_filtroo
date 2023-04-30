import { View } from 'react-native'
import List from '../Components/ShowList'
import apiServices from "../services/api.services"
import { useEffect, useState } from 'react'

const ListPage = () => {

    const [shows, setShows] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        loadShows()
    }, [page])

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await loadShows()
        setIsRefreshing(false);
    };

    const loadShows = async () => {
        try {
            setLoading(true)
            const { data } = await apiServices.getShows(page)
            setShows([...shows, ...data])
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
                onEndReached={handleLoadMore}
                handleRefresh={handleRefresh}
                isRefreshing={isRefreshing}
            />
        </View>
    )
}

export default ListPage