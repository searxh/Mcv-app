import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faFile, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomeMaterialItem = ({ props }:any) => {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity 
            style={tw`w-[97%] flex-row bg-sky-100 rounded-md shadow-sm p-2 py-5 mx-auto mb-1`}
            onPress={()=>navigation.navigate(props.materialID.toString(),{
                previous:'home'
            })}
        >
            <FontAwesomeNative
                icon={faFile}
                size={25}
                style={tw`text-sky-600 mx-1`}
            />
            <Text style={tw.style('text-sky-700 text-sm mx-1',{
                fontFamily:'noto-sans-medium'
            })}>
                {props.date}
            </Text>
            <View style={tw`flex-1 mx-1`}>
                <Text style={tw.style('text-neutral-700 text-sm mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.material}
                </Text>
            </View>
            <TouchableOpacity
                onPress={()=>{}}
            >
                <FontAwesomeNative
                    icon={faShareFromSquare}
                    size={25}
                    style={tw`text-sky-600 mx-1`}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default HomeMaterialItem