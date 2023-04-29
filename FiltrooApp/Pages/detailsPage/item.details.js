import { FlatList, Text, View, Image, Button } from "react-native"
import apiServices from "../../services/api.services"

const DetailsPage = () => {

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

    // const renderItem = ({ item }) => (

    //     <View style={styles.container}>
    //         <TextStyles fontSize="tittle">{item.name}</TextStyles>
    //         <TextStyles fontSize={"subtittle"}>{item.rating.average}</TextStyles>
    //         <TextStyles fontSize={"description"}>{item.genres.toString()}</TextStyles>
    //         <Image
    //             source={item.image.medium}
    //             style={{ width: 200, height: 200 }}
    //             resizeMode="contain"
    //         />
    //         <Button
    //             onPress={() => navigation.navigate('Details')}
    //             title="Ver Detalles"
    //             color="#841584"
    //             accessibilityLabel="Learn more about this purple button"
    //         />
    //     </View>
    // )

    return (
        <View>
            <Text>pagina de detalles</Text>
        </View>
    )
}

export default DetailsPage