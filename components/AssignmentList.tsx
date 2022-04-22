import { View, TouchableOpacity, Text, Alert, Image, FlatList } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { hw } from '../data/homework'
import AssignmentItem from './AssignmentItem'

const AssignmentList = () => {
    const [homework,setHomework] = React.useState<any>(hw)
    const removeHomework = (id:number) => {
        setTimeout(()=>setHomework(()=>homework.filter((item:any)=>item.id!==id)),500)
    }
    return (
        <View style={tw`bg-neutral-200 p-2 h-full`}>
            <View style={tw`flex-row`}>
                {/*
                <LoginButton
                    style="bg-sky-600 p-3 w-[45%] shadow-md"
                    callback={()=>setHomework(hw)}
                >
                    <Text
                        style={tw.style('text-white text-base text-center',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            Show all
                    </Text>
                </LoginButton>
                <LoginButton
                    style="bg-sky-600 p-3 w-[45%] shadow-md"
                    callback={()=>setHomework(null)}
                >
                    <Text
                        style={tw.style('text-white text-base text-center',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            Hide all
                    </Text>
                </LoginButton>
                */}
            </View>
            <FlatList
                data={homework}
                keyExtractor={(item: any) => item.id}
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