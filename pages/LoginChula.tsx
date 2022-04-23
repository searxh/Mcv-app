import { Text, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ReturnButton from '../components/ReturnButton'
import InputField from '../components/InputField'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import LoginButton from '../components/LoginButton'

const LoginChula = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView style={tw`bg-white dark:bg-slate-800 h-full`}>
            <ReturnButton 
                style="mx-3 mt-2"
                callback={()=>{
                    navigation.goBack()
                }}
            />
            <Text style={tw.style('p-10 pb-0 text-xl', {
                fontFamily: 'noto-sans-medium'
            })}>
                Log in with CU account
            </Text>
            <Image
                style={tw.style('w-8/12 mx-auto -my-10', {
                resizeMode:'contain'
                })}
                source={require('../assets/logo-itchula.png')}
            />
            <InputField placeholder={'Username'} style='w-10/12 mb-4' secure={false} />
            <InputField placeholder={'Password'} style='w-10/12' secure={true} />
            <View style={tw`flex-row w-8/12 mx-auto mt-4`}>
                <BouncyCheckbox 
                    onPress={() => {}}
                    iconStyle={{
                        borderRadius: 5,
                    }}
                    fillColor="#a3a3a3"
                    text='Remember me'
                    textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "noto-sans-medium"
                    }}
                />
            </View>
            <LoginButton
                style='bg-pink-500 w-10/12 mt-12'
                callback={()=>{
                    navigation.navigate('Tabs')
                }}
            >
                <Text
                    style={tw.style('text-lg text-white text-center',{
                        fontFamily:'noto-sans-medium'
                    })}>
                    Login
                </Text>
            </LoginButton>
        </SafeAreaView>
    )
}

export default LoginChula