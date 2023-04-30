import { FlatList, View, StyleSheet, RefreshControl } from "react-native"
import Item from "./Show"
import Spinner from "./Spinner";

const ShowList = ({ loading, shows, handleRefresh, isRefreshing, onEndReached }) => {

    const renderFooter = () => {
        return loading ? (
            <Spinner />
        ) : null;
    };

    return (
        <View style={styles.background}>
            <FlatList
                data={shows}
                // columnWrapperStyle={{ justifyContent: 'space-around' }}
                // numColumns={2}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id.toString()}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.2}
                contentContainerStyle={{ flexGrow: 1 }}
                ListFooterComponent={renderFooter}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            />
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