import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomeAnnouncementItem = ({ props }:any) => {
    const navigation = useNavigation<any>()
    const isFocused = useIsFocused()
    return (
        <TouchableOpacity 
            style={tw`relative flex-row ${props.viewed?'bg-white':'bg-yellow-50'} rounded-md shadow-md mx-auto mb-1`}
            onPress={()=>navigation.navigate(props.announcementID.toString(),{
                previous:'home'
            })}
        >
            <View style={tw`flex-row flex-1 p-2`}>
                <Text style={tw.style('text-sky-600 text-sm mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.date}
                </Text>
                <View style={tw`flex-1`}>
                    <Text style={tw.style('text-sm text-neutral-700 mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {props.announcement}
                    </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{}}>
                <FontAwesomeNative
                    icon={faShareFromSquare}
                    size={25}
                    style={tw`text-sky-600 mx-1 my-auto`}
                />
            </TouchableOpacity>
            {/*!props.viewed?<View style={tw`absolute left-0 h-full mx-auto w-[1%] bg-red-500 rounded`}></View>:null*/}
        </TouchableOpacity>
    )
}

export default HomeAnnouncementItem