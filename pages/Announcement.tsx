import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import NavBar from '../components/NavBar'
import ReturnButton from '../components/ReturnButton'
import { useNavigation } from '@react-navigation/native'

const Announcement = (props:any) => {
    const data = props.route.params
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <ReturnButton callback={()=>navigation.navigate(data.course)} />
            <Text>{data.announcement}</Text>
            <Text>{data.content}</Text>
            <View style={tw`flex-1`}></View>
            <NavBar />
        </SafeAreaView>
    )
}

export default Announcement