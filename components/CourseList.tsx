import { View, FlatList, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const CourseList = (props:any) => {
    const { width } = Dimensions.get('window')
    const converter = (object:any) => {
        const len = Object.keys(object).length
        const arr = []
        for (let i = 0; i < len; i++) {
            arr.push(object[i])
        }
        return arr
    }
    const data = converter(props.route.params)
    return (
        <View style={tw`bg-neutral-200 p-2 h-full`}>
            <FlatList
                data={data}
                keyExtractor={(item: any) => item.id}
                numColumns={2}
                renderItem={({ item: { id, course, png } }) => {
                    return (
                        <TouchableOpacity
                            style={tw.style('bg-neutral-100 shadow-md px-4 py-5 mr-2 rounded-lg',{
                                width:width/2.12
                            })}
                        >
                            <Text style={tw.style('text-xl text-sky-600 mb-2 text-center',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {id}
                            </Text>
                            <Image
                                style={tw.style('mx-auto my-5', {
                                resizeMode:'contain'
                                })}
                                source={png}
                            />
                            <Text style={tw.style('text-base text-neutral-600 text-center',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {course}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default CourseList