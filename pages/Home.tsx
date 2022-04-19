import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView  } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import ReturnButton from '../components/ReturnButton'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import CourseList from '../components/CourseList'
import {
    createMaterialTopTabNavigator,
  } from "@react-navigation/material-top-tabs";

const Home = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`relative bg-white h-full`}>
            <Text style={tw.style('text-neutral-600 text-xl my-5 ml-5',{
                fontFamily:'noto-sans-medium'
            })} >
                Courses I have joined
            </Text>
            <Semester />
            <NavBar />
        </SafeAreaView>
    )
}

export default Home

const courses = [
    {
        id:2182203.01,
        course:'Probability and Statistics for Engineers Section 1 (For ICE)',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        course:'Signal and Linear Systems',
        png: require('../assets/2143221.png')
    }
]
const courses1 = [
    {
        id:2182203.01,
        course:'Probability and Statistics for Engineers Section 2 (For ICE)',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        course:'Signal and Linear Systems lol',
        png: require('../assets/2143221.png')
    }
]

const data = [
    {id:1,name:'2021/2',courses:courses},
    {id:2,name:'2021/1',courses:courses1},
    {id:3,name:'2020/2',courses:courses1},
    {id:4,name:'2020/1',courses:courses},
]

const Semester = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator>
            {data.map(({ id, name, courses })=> {
               return <Tab.Screen key={id} initialParams={courses} name={name} component={CourseList} />
            })}
        </Tab.Navigator>
      )
}