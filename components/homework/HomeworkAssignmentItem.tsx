import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { 
    faUser,
    faSquare,
    faSquareCheck,
 } from '@fortawesome/free-solid-svg-icons'

const HomeworkAssignmentItem = ({ props }:any) => {
    const navigation = useNavigation<any>()
    let color = 'text-neutral-100'
    let status = faSquare
    switch (props.status) {
        case 'submitted':
            status = faSquareCheck
            color = 'text-green-300'
            break
        case 'submitted late':
            status = faSquareCheck
            color = 'text-yellow-300'
            break
        case 'not submitted':
            status = faSquare
            color = 'text-neutral-300'
            break
        case 'not submitted late':
            status = faSquare
            color = 'text-yellow-300'
            break
        default:
            break
    }
    return (
        <TouchableOpacity 
            style={tw`flex justify-between bg-white w-[95%] rounded-lg shadow-lg mx-auto my-2`}
            onPress={()=>navigation.navigate(props.assignmentID.toString(),{
                previous:'home'
            })}
        >
            <View style={tw`flex rounded-lg bg-sky-600 p-1 py-2 w-full`}>
                <Text style={tw.style('text-white text-sm mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.assignment}
                </Text>
            </View>
            <View style={tw`flex-row justify-between p-2 py-4`}>
                <FontAwesomeNative
                    icon={faUser}
                    size={30}
                    style={tw`text-sky-600 mx-2 my-auto`}
                />
                <View style={tw`mx-1 my-auto`}>
                    <Text style={tw.style('text-neutral-700 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Out: {props.out}
                    </Text>
                    <Text style={tw.style('text-yellow-600 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Due: {props.due}
                    </Text>
                </View>
                <View style={tw`flex-1 mx-1 my-auto bg-sky-100 rounded-lg shadow-sm h-full p-1`}>
                    <Text style={tw.style('text-center text-neutral-700 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Feedbacks
                    </Text>
                    <Text style={tw.style('text-neutral-700 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {props.date}
                    </Text>
                </View>
                <View style={tw`bg-sky-600 rounded-lg p-2 ml-1 shadow-md`}>
                    <Text style={tw.style('text-white text-xs',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Status:
                    </Text>
                    <FontAwesomeNative
                        icon={status}
                        size={25}
                        style={tw`${color} m-auto`}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeworkAssignmentItem