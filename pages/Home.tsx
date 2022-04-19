import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView  } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import ReturnButton from '../components/ReturnButton'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Home = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`relative h-full`}>
            <ReturnButton callback={()=>navigation.goBack()}/>
            <Text>This is Home</Text>
            <NavBar />
        </SafeAreaView>
    )
}

export default Home