import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HomeAnnouncementItem from '../../components/home/HomeAnnouncementItem'
import HomeMaterialItem from '../../components/home/HomeMaterialItem'

const SecHome = (props:any) => {
    const data = props.route.params
    return (
        <View style={tw`bg-neutral-200 h-full`}>
            <View style={tw`w-[95%] mx-auto my-2 h-4/12`}>
                <View style={tw`bg-sky-600 rounded-md px-5 py-1`}>
                    <Text style={tw.style('text-white text-base',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Announcements
                    </Text>
                </View>
                <FlatList
                    data={data.announcements}
                    keyExtractor={(item: any) => item.announcementID}
                    ListEmptyComponent={
                        <View style={tw`p-10`}>
                            <Text
                                style={tw.style('text-xl text-center text-sky-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                There are no announcements
                            </Text>
                        </View>
                    }
                    renderItem={({ item }) => {
                        return <HomeAnnouncementItem props={item} />
                    }}
                />
            </View>
            <View style={tw`w-[95%] mx-auto flex-1 h-8/12`}>
                <View style={tw`bg-sky-600 rounded-md px-5 py-1`}>
                    <Text style={tw.style('text-white text-base',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Course Materials
                    </Text>
                </View>
                <FlatList
                    data={data.materials}
                    keyExtractor={(item: any) => item.materialID}
                    ListEmptyComponent={
                        <View style={tw`p-10`}>
                            <Text
                                style={tw.style('text-xl text-center text-sky-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                There are no course materials
                            </Text>
                        </View>
                    }
                    renderItem={({ item }) => {
                        return <HomeMaterialItem props={item} />
                    }}
                />
            </View>
        </View>
    )
}

export default SecHome