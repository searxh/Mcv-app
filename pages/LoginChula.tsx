import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import ReturnButton from '../components/ReturnButton'
import TextField from '../components/TextField'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const LoginChula = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView>
            <ReturnButton callback={()=>navigation.goBack()}/>
            <Text style={tw`p-10 text-xl`}>ล็อกอินด้วยบัญชี</Text>
            <TextField />
        </SafeAreaView>
    )
}

export default LoginChula