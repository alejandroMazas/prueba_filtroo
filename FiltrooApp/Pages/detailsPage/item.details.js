import { FlatList, Text, View, Image, Button } from "react-native"
import apiServices from "../../services/api.services"

const details = () => {

    const [itemDetails, setItemDetails] = useState({})
    const [isLoadingDetails, setLoadingDetails] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        loadDetails()
    }, [])

    const loadDetails = () => {
        setLoadingDetails(true)
        apiServices
            .getOneItem(id)
            .then(({ data }) => {
                setItemDetails(data)
                setLoadingDetails(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Text>pagina de detalles</Text>
    )
}

export default details