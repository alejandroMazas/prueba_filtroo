import { useState } from "react"
import { FlatList, View, StyleSheet, RefreshControl } from "react-native"
import Spinner from "./Spinner"
import Item from "./Show"

const ShowList = ({ navigation, loading, shows, handleRefresh, isRefreshing }) => {

    return (
        <View style={styles.background}>
            {
                loading ?
                    <Spinner />
                    :
                    <FlatList
                        data={shows}
                        // columnWrapperStyle={{ justifyContent: 'space-around' }}
                        // numColumns={2}
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

export default ShowList