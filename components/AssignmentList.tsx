import { View, TouchableOpacity, Text, Alert, Image, FlatList } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import AssignmentItem from './AssignmentItem'
import { AnnouncementsContext } from '../data/context'

const AssignmentList = () => {
    const { homework, setHomework }:any = React.useContext(AnnouncementsContext)
    const removeHomework = (assignmentID:number) => {
        setTimeout(()=>setHomework(()=>homework.filter((item:any)=>item.assignmentID!==assignmentID)),500)
    }
    return (
        <View style={tw`bg-sky-100 p-2 h-full`}>
            <View style={tw`flex-row`}>
                <View style={tw`bg-green-600 p-1 w-full shadow-md rounded-lg`}>
                    <Text
                        style={tw.style('text-white text-base text-center',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            {homework.length} items due in 14 days
                    </Text>
                </View>
            </View>
            <FlatList
                data={homework}
                keyExtractor={(item: any) => item.assignmentID}
                ListEmptyComponent={
                    <View style={tw`p-20`}>
                        <Text
                            style={tw.style('text-xl text-center text-sky-600',{
                                fontFamily:'noto-sans-medium'
                            })}
                        >
                            You have no assignments at this time
                        </Text>
                    </View>
                }
                renderItem={({item}) => {
                    return <AssignmentItem props={item} removeHw={removeHomework} />
                }}
            />
        </View>
    )
}

export default AssignmentList