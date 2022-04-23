import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import AssignmentList from '../components/AssignmentList'
import AnnouncementList from '../components/AnnoucementList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialList from '../components/MaterialList'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'

const Feed = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`my-5 ml-5`}>
          <Text style={tw.style('text-sky-600 text-xl',{
              fontFamily:'noto-sans-medium'
          })}>
            Activity Feed
          </Text>
          <Text>  </Text>
          <Text style={tw.style('text-neutral-500 text-sm',{
              fontFamily:'noto-sans-medium'
          })}>
            ( last 14 days )
          </Text>
        </Text>
        <TouchableOpacity 
          onPress={()=>{}}
          style={tw`my-auto mx-3`}
        >
          <FontAwesomeNative
              icon={faCalendarDays}
              size={30}
              style={tw`text-sky-600 mx-auto`}
          />
          <Text style={tw.style('text-center text-sky-600 text-xs p-1',{
              fontFamily:'noto-sans-medium'
          })}>
            Link Calendar
          </Text>
        </TouchableOpacity>
      </View>
      <Tabs />
      <NavBar />
    </SafeAreaView>
  )
}

export default Feed

const Tabs = () => {
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
              tabBarBadge:()=>{
                return (
                  <View style={tw`rounded-full h-3 w-3 bg-red-500`}>
                  </View>
                )
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
        <Tab.Screen name="Assignments" component={AssignmentList} />
        <Tab.Screen name="Announcements" component={AnnouncementList} />
        <Tab.Screen name="Course Materials" component={MaterialList} />
      </Tab.Navigator>
    )
}