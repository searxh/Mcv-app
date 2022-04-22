import { View, Text, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../../components/NavBar'
import tw from 'twrnc'
import ReturnButton from '../../components/ReturnButton'
import { useNavigation } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faLink, faHome, faHouseLaptop, faRectangleList, faUserGroup, faW, faCalendar, faComments, faCircleInfo, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import SecAbout from './SecAbout'
import SecAssignments from './SecAssignments'
import SecDiscussions from './SecDiscussions'
import SecGroups from './SecGroups'
import SecPortfolio from './SecPortfolio'
import SecWebResources from './SecWebResources'
import SecHome from './SecHome'
import SecSchedule from './SecSchedule'
import LoginButton from '../../components/LoginButton'

const Course = (props:any) => {
    const data = props.route.params
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView
            style={tw`bg-white h-full`}
        >
            <View style={tw`flex-row my-1`}>
                <ReturnButton style="my-auto" callback={()=>navigation.goBack()} />
                <View style={tw``}>
                    <Image
                        style={tw.style('mx-2 my-auto w-13 h-13', {
                            resizeMode:'contain'
                        })}
                        source={data.png}
                    />
                </View>
                <View style={tw`flex-1 p-2 pb-3`}>
                    <Text
                        style={tw.style('text-base text-sky-600 text-left',{
                            fontFamily:'noto-sans-medium'
                        })}
                    >
                        {data.id}
                    </Text>
                    <Text
                        style={tw.style('text-neutral-700 text-base text-left',{
                            fontFamily:'noto-sans-medium'
                        })}
                    >
                        {data.course} {'('}{data.year}{')'}
                    </Text>

                </View>
                <LoginButton 
                    callback={()=>{}} 
                    style="bg-sky-600 w-2/12 px-1 py-3 my-auto mr-3 shadow-md">
                    <View
                        style={tw`flex-row`}
                    >
                        <FontAwesomeNative
                            icon={faArrowRightToBracket}
                            size={13}
                            style={tw`text-white m-1`}
                        />
                        <Text
                            style={tw.style('mr-1 text-white text-xs',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                On-Air
                        </Text>
                    </View>
                </LoginButton>

            </View>
            <Sections data={data} />
            <NavBar />
        </SafeAreaView>
    )
}

export default Course

const Sections = ({ data }:any) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            showPageIndicator={true}
            screenOptions={{
                tabBarLabelStyle: { 
                    fontFamily:'noto-sans-medium',
                    fontSize: 13,
                    textTransform:'none',
                    color:'#ffffff'
                },
                tabBarScrollEnabled:true,
                tabBarItemStyle: {
                    width:Dimensions.get('window').width/4,
                },
                tabBarShowIcon: true,
                tabBarIndicatorStyle:{
                    backgroundColor:'#0173b6',
                    height:'100%'
                },
                tabBarStyle:{
                    borderTopWidth: 0.5,
                    borderTopColor:'#d4d4d4',
                    backgroundColor:'#0284c7'
                }
            }}
        >
            <Tab.Screen 
                name={"Home"}
                component={SecHome}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faHome} />
                }} 
            />
            <Tab.Screen 
                name={"HW"}
                component={SecAssignments}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faHouseLaptop} />
                }}
            />
            <Tab.Screen 
                name={"Portfolio"} 
                component={SecPortfolio}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faRectangleList} />
                }}
            />
            <Tab.Screen 
                name={"Groups"}
                component={SecGroups}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faUserGroup} />
                }}
            />
            <Tab.Screen 
                name={"Resources"} 
                component={SecWebResources}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faLink} />
                }}
            />
            <Tab.Screen 
                name={"Schedule"}
                component={SecSchedule}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faCalendar} />
                }}
            />
            <Tab.Screen 
                name={"Discussion"}
                component={SecDiscussions}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faComments} />
                }}
            />
            <Tab.Screen 
                name={"About"}
                component={SecAbout}
                initialParams={data}
                options={{
                    tabBarIcon: ()=> <Icon icon={faCircleInfo} />
                }}
            />
        </Tab.Navigator>
      )
}

const Icon = (props:any) => {
    return (
        <FontAwesomeNative
            icon={props.icon}
            size={25}
            style={tw`text-white`}
        />
    )
}