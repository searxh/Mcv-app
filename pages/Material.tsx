import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import NavBar from '../components/NavBar'
import ReturnButton from '../components/ReturnButton'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

const Material = (props:any) => {
    const navigation = useNavigation<any>()
    const data = props.route.params
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`flex-row`}>
                {data.previous==='home'
                    ?<ReturnButton style="my-auto" callback={()=>navigation.navigate(data.course)} />
                    :<ReturnButton style="my-auto" callback={()=>navigation.navigate('Feed')} />
                }
                <View style={tw`flex-1 my-3 ml-2 px-5`}>
                    <View style={tw`flex-row`}>
                        <FontAwesomeNative
                            size={30}
                            icon={faFile}
                            style={tw`text-sky-600 mr-4 my-auto`}
                        />
                        <View style={tw`flex-1`}>
                            <Text style={tw.style('text-sky-600 text-xl',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {data.material}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate(data.course)}
                    >
                        <Text style={tw.style('text-neutral-500 text-sm',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            Go to {data.course} {'('}{data.year}{')'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`w-11/12 mx-auto rounded-lg bg-sky-600 my-auto p-2 shadow-md`}>
                <Text style={tw.style('ml-3 text-white text-base',{
                        fontFamily:'noto-sans-medium'
                    })}>
                    Last modified:  <Text style={tw`text-yellow-300`}>{data.date}</Text>
                </Text>
            </View>
            <View style={tw`flex-1`}>
                <ScrollView style={tw`flex-1 mx-auto mb-2 bg-sky-100 rounded-lg`}>
                    <View style={tw`p-10`}>
                        <Text style={tw.style('text-center text-neutral-500 text-base',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            The description of this material is not available.
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={()=>{}}
                style={tw`w-11/12 bg-sky-600 shadow-md m-auto rounded-lg p-3 my-2`}
            >
                <Text style={tw.style('text-center text-white text-lg',{
                    fontFamily:'noto-sans-medium'
                })}>
                    Download File
                </Text>
            </TouchableOpacity>
            <NavBar identify="Home" />
        </SafeAreaView>
    )
}

export default Material