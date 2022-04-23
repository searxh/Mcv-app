import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import NavBar from '../components/NavBar'
import { useNavigation } from '@react-navigation/native'
import ReturnButton from '../components/ReturnButton'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Textbox from '../components/Textbox'
import AttachFiles from '../components/AttachFiles'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faLaptopHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import Instruction from '../components/Instruction'

const Assignment = (props:any) => {
    const data = props.route.params
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`flex-row`}>
                {data.previous==='home'
                    ?<ReturnButton style="my-auto" callback={()=>navigation.navigate(data.course)} />
                    :<ReturnButton style="my-auto" callback={()=>navigation.navigate('Feed')} />
                }
                <View style={tw`flex-1 my-2 ml-2 px-5`}>
                    <View style={tw`flex-row`}>
                        <FontAwesomeNative
                            size={30}
                            icon={faLaptopHouse}
                            style={tw`text-sky-600 mr-4 my-auto`}
                        />
                        <View style={tw`flex-1`}>
                            <Text style={tw.style('text-sky-600 text-lg',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {data.assignment}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate(data.course)}
                    >
                        <Text style={tw.style('text-neutral-500 text-sm',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            Go to {data.course} {'('}{data.year}{')'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`flex-row justify-between p-2 pt-1`}>
                <View style={tw`flex-2 bg-sky-600 shadow-md rounded-lg p-2`}>
                    <Text style={tw.style('text-center text-white text-sm',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Out: {data.out}
                    </Text>
                    <Text style={tw.style('text-center text-yellow-300 text-sm',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Due: {data.due}
                    </Text>
                </View>
                <View style={tw`flex-1 rounded-lg bg-sky-600 p-2 shadow-md mx-2`}>
                    <Text style={tw.style('my-auto text-center text-white text-sm',{
                            fontFamily:'noto-sans-medium'
                        })}>
                        Due before
                    </Text>
                    <Text style={tw.style('mx-auto text-yellow-300',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {data.time}
                    </Text>
                </View>
                <View style={tw`flex-1 rounded-lg bg-sky-600 p-2 shadow-md`}>
                    <FontAwesomeNative
                        size={20}
                        icon={faUser}
                        style={tw`text-white mx-auto`}
                    />
                    <Text style={tw.style('text-center my-1 text-white text-xs',{
                            fontFamily:'noto-sans-medium'
                        })}>
                        {data.type}
                    </Text>
                </View>
            </View>
            <Tabs data={data} />
            <NavBar identify="Home" />
        </SafeAreaView>
    )
}

export default Assignment

const Tabs = ({ data }:any) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { 
                    fontFamily:'noto-sans-medium',
                    fontSize: 14,
                    color:'#ffffff',
                    textTransform:'none',
                },
                tabBarItemStyle: {
                    width: Dimensions.get('window').width/3,
                    paddingHorizontal:5,
                },
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
            <Tab.Screen initialParams={data} name="Instruction" component={Instruction} />
            <Tab.Screen name="Attach file(s)" component={AttachFiles} />
            <Tab.Screen name="Textbox" component={Textbox} />
        </Tab.Navigator>
      )
  }