import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ListPage from "../Pages/ListPage/ListPage"
import details from "../Pages/detailsPage/item.details"
import Home from "../Pages/homePage/HomePage"

const Stack = createStackNavigator()

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
            <Stack.Screen name={"List"} component={ListPage}></Stack.Screen>
            <Stack.Screen name={"Details"} component={details}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppRoutes