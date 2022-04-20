import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import ReturnButton from '../components/ReturnButton'
import { useNavigation } from '@react-navigation/native'

const Course = (props:any) => {
    const data = props.route.params
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView
            style={tw`bg-white h-full`}
        >
            <ReturnButton callback={()=>navigation.goBack()} />
            <Text>{data.course}</Text>
            <NavBar />
        </SafeAreaView>
    )
}

export default Course