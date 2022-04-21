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
import Course from './pages/CourseSections/Course'
import Assignment from './pages/Assignment'
import Announcement from './pages/Announcement'
import Material from './pages/Material'
import { hw } from './data/homework'
import { announcements } from './data/announcements'
import { materials } from './data/materials'

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
            { hw.map((item:any)=>{
                return (
                    <Tab.Screen 
                        initialParams={item} 
                        name={item.assignment} 
                        key={item.id} 
                        component={Assignment}
                        options={{
                            headerShown: false,
                            tabBarStyle: {
                                display:'none'
                            }
                        }}
                     />
                )
            })}
            { announcements.map((item:any)=>{
                return (
                    <Tab.Screen 
                        initialParams={item} 
                        name={item.announcement} 
                        key={item.id} 
                        component={Announcement}
                        options={{
                            headerShown: false,
                            tabBarStyle: {
                                display:'none'
                            }
                        }}
                    />
                )
            })}
            { materials.map((item:any)=>{
                return (
                    <Tab.Screen 
                        initialParams={item} 
                        name={item.material} 
                        key={item.id} 
                        component={Material}
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