import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import LoginChula from './pages/LoginChula'
import Home from './pages/Home'
import Account from './pages/Account'
import Feed from './pages/Feed'
import Register from './pages/Register'
import Others from './pages/Others'
import { allcourses } from './data/courses'
import Course from './pages/Course'

const Tabs = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarStyle: {
                    display:'none'
                }
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                headerShown: false,
                tabBarStyle: {
                    display:'none'
                }
            }} />
            <Tab.Screen name="Feed" component={Feed} options={{
                headerShown: false,
                tabBarStyle: {
                    display:'none'
                }
            }} />
            <Tab.Screen name="Register" component={Register} options={{
                headerShown: false,
                tabBarStyle: {
                    display:'none'
                }
            }} />
            <Tab.Screen name="Others" component={Others} options={{
                headerShown: false,
                tabBarStyle: {
                    display:'none'
                }
            }} />
            { allcourses.map((item:any)=>{
                return (
                    <Tab.Screen 
                        initialParams={item} 
                        name={item.course} 
                        key={item.id} 
                        component={Course}
                        options={{
                            headerShown: false,
                            tabBarStyle: {
                                display:'none'
                            }
                        }}
                     />
                )
            })}
        </Tab.Navigator>
    )
}
const Routes = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="LoginChula" component={LoginChula} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default Routes