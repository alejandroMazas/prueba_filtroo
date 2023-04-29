import { View, StyleSheet, Image } from "react-native"
import apiServices from "../services/api.services"
import { useState, useEffect } from "react"
import TextStyles from "../Components/StyleText"
import Spinner from "../Components/Spinner"


const DetailPage = ({ route }) => {

    const [show, setShow] = useState({})
    const [isLoadingDetail, setLoadingDetail] = useState(false)

    const { id } = route.params;

    useEffect(() => {
        loadDetail()
    }, [])

    const loadDetail = async () => {
        try {
            setLoadingDetail(true)
            const { data } = await apiServices.getShow(id)
            setShow(data)
            setLoadingDetail(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        isLoadingDetail
            ?
            <Spinner />
            :
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        source={show?.image?.medium}
                        style={{ width: 400, height: 400 }}
                        resizeMode="contain"
                    />
                </View>
                {show && (
                    <>
                        <TextStyles fontSize="tittle">{show.name}</TextStyles>
                        <TextStyles fontSize="subtittle">{show.rating?.average}</TextStyles>
                        <TextStyles fontSize="description">{show.genres?.join(", ")}</TextStyles>
                        <TextStyles fontSize="description">Sinopsis</TextStyles>
                        <TextStyles fontSize="body">{show.summary?.replace(/(<([^>]+)>)/ig, '')}</TextStyles>
                        <TextStyles fontSize="description">Estreno {show.premiered}</TextStyles>
                        <TextStyles fontSize="description">Finalización {show.premiered}</TextStyles>
                        <TextStyles fontSize="body">Idioma: {show.language}</TextStyles>
                    </>
                )}
            </View>
    )
}

const styles = StyleSheet.create({
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

export default DetailPage