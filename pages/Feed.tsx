import { View, Text, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import AssignmentList from '../components/AssignmentList'
import AnnouncementList from '../components/AnnoucementList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialList from '../components/MaterialList'

const Feed = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`my-4 ml-5`}>
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