import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import ReturnButton from '../components/ReturnButton'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const navigate = useNavigation<any>()
  return (
    <SafeAreaView style={tw`relative h-full`}>
      <Text>Account</Text>
      <ReturnButton callback={()=>navigate.navigate('Login')}/>
      <NavBar />
    </SafeAreaView>
  )
}

export default Account