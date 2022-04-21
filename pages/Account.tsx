import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import LoginButton from '../components/LoginButton'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const navigate = useNavigation<any>()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <LoginButton 
        callback={()=>navigate.navigate('Login')}
        style='bg-sky-600 w-10/12 mt-12'
      >
        <Text
          style={tw.style('text-lg text-white text-center',{
              fontFamily:'noto-sans-medium'
          })}
        >
          Logout
        </Text>
      </LoginButton>
      <View style={tw`flex-1`}>

      </View>
      <NavBar />
    </SafeAreaView>
  )
}

export default Account