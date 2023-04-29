import { createStackNavigator } from "@react-navigation/stack"
import ListPage from "../Pages/ListPage/ListPage"
import DetailsPage from "../Pages/detailsPage/item.details"
import Home from "../Pages/homePage/HomePage"

const Stack = createStackNavigator()

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
            <Stack.Screen name={"List"} component={ListPage}></Stack.Screen>
            <Stack.Screen name={"Details"} component={DetailsPage}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppRoutes