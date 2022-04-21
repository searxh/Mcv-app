import { View, TouchableOpacity, Text, Dimensions, Image, FlatList } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CourseList = (props:any) => {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation<any>()
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
                            onPress={()=>navigation.navigate(course)}
                            style={tw.style('bg-white shadow-md px-4 py-5 mr-3 mb-3 rounded-lg',{
                                width:width/2.15
                            })}
                        >
                            <Text style={tw.style('text-lg text-sky-600 text-center',{
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
                            <Text style={tw.style('text-sm text-neutral-600 text-center',{
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