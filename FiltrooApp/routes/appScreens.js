import { createStackNavigator } from "@react-navigation/stack"
import ListPage from "../Pages/ListPage"
import DetailsPage from "../Pages/Detail"
import Home from "../Pages/HomePage"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="List" component={ListPage}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsPage}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes