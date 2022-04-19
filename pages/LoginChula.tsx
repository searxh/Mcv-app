import { Text, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ReturnButton from '../components/ReturnButton'
import InputField from '../components/InputField'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const LoginChula = () => {
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView>
            <ReturnButton callback={()=>navigation.goBack()}/>
            <Text style={tw.style('p-10 pb-0 text-xl',{
                fontFamily: 'noto-sans-thai-medium'
            })}>ล็อกอินด้วยบัญชี</Text>
            <Image
                style={tw.style('w-8/12 mx-auto -my-10', {
                resizeMode:'contain'
                })}
                source={require('../assets/logo-itchula.png')}
            />
            <InputField placeholder={'Username'} style={'mb-4'} secure={false} />
            <InputField placeholder={'Password'} secure={true} />
            <View style={tw`flex-row`}>
                <BouncyCheckbox 
                    onPress={() => {}}
                />
                <Text style={tw.style({ fontFamily: 'noto-sans-thai-medium' })}>จดจำการล็อกอินนี้ไว้</Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginChula