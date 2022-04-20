import tw from 'twrnc' 
import React from 'react'

import { Image, Text, View } from 'react-native'
import LoginButton from '../components/LoginButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import CU from '../assets/account-link-logo-cu.svg'
import Google from '../assets/g_logo.svg'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={tw`h-full dark:bg-slate-800 bg-white`}>
      <Image
        style={tw.style('w-8/12 mx-auto my-20', {
          resizeMode:'contain'
        })}
        source={require('../assets/cv-logo.png')}
      />
      <LoginButton callback={()=>null} style='bg-sky-600'>
        <Text style={tw`text-center text-lg text-white`}>
          Log in with Facebook
        </Text>
      </LoginButton>
      <LoginButton callback={()=>navigation.navigate('LoginChula')} style='bg-white border-2 border-neutral-200'>
        <View style={tw`flex-row mx-auto`}>
          <Text style={tw`text-center text-lg text-slate-400`}>
            Log in with
          </Text>
          <CU style={tw`mx-2`} />
          <Text style={tw`text-center text-lg text-slate-400`}>
            account
          </Text>
        </View>
      </LoginButton>
      <LoginButton callback={()=>null} style='bg-white border-2 border-neutral-200'>
        <View style={tw`flex-row mx-auto`}>
          <Text style={tw`text-center text-lg text-slate-400`}>
            Log in with
          </Text>
          <Image
            style={tw.style('w-34 h-full mx-2', {
              resizeMode:'contain'
            })}
            source={require('../assets/cv-logo.png')}
          />
          <Text style={tw`text-center text-lg text-slate-400`}>
            platform
          </Text>
        </View>
      </LoginButton>
      <LoginButton callback={()=>null} style='bg-white border-2 border-neutral-200'>
        <View style={tw`flex-row mx-auto`}>
          <Google style={tw`-mx-28`} />
          <Text style={tw`text-center text-lg text-slate-400`}>
            Sign in with Google
          </Text>
        </View>
      </LoginButton>
    </SafeAreaView>
  )
}

export default Login