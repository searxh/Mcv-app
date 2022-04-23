import { Dimensions, Text } from 'react-native'
import React from 'react'
import { SafeAreaView  } from 'react-native-safe-area-context'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import CourseList from '../components/CourseList'
import { semesters } from '../data/courses'
import {
    createMaterialTopTabNavigator,
  } from "@react-navigation/material-top-tabs";

const Home = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw.style('text-sky-600 text-xl my-5 ml-5',{
                fontFamily:'noto-sans-medium'
            })}>
                My Courses
            </Text>
            <Semester />
            <NavBar />
        </SafeAreaView>
    )
}

export default Home

const Semester = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { 
                    fontFamily:'noto-sans-medium',
                    color:'#ffffff',
                    fontSize: 16,
                },
                tabBarScrollEnabled:true,
                tabBarItemStyle: {
                    width: Dimensions.get('window').width/3,
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
            {semesters.map(({ id, name, courses })=> {
               return <Tab.Screen key={id} initialParams={courses} name={name} component={CourseList} />
            })}
        </Tab.Navigator>
      )
}