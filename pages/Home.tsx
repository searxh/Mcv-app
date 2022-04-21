import { Dimensions, Text } from 'react-native'
import React from 'react'
import { SafeAreaView  } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import CourseList from '../components/CourseList'
import { semesters } from '../data/courses'
import {
    createMaterialTopTabNavigator,
  } from "@react-navigation/material-top-tabs";

const Home = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw.style('text-sky-600 text-xl my-4 ml-5',{
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
                    fontSize: 16,
                },
                tabBarScrollEnabled:true,
                tabBarItemStyle: {
                    width: Dimensions.get('window').width/3,
                    borderTopWidth: 0.5,
                    borderTopColor:'#d5d5d5'
                },
            }}
        >
            {semesters.map(({ id, name, courses })=> {
               return <Tab.Screen key={id} initialParams={courses} name={name} component={CourseList} />
            })}
        </Tab.Navigator>
      )
}