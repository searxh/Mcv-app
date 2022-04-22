import { View, TouchableOpacity, Text, Alert, Image, FlatList } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { getRecentAnnouncements } from '../data/courses'
import AnnouncementItem from './AnnouncementItem'
import { useIsFocused } from '@react-navigation/native'

const AnnouncementList = () => {
    const temp = getRecentAnnouncements()
    const [announcement,setAnnouncement] = React.useState<any>(temp)
    const removeAnnouncement = (announcementID:number) => {
        setTimeout(()=>setAnnouncement(()=>announcement.filter((item:any)=>item.announcementID!==announcementID)),500)
    }
    const isFocused = useIsFocused()
    let i = 0
    React.useEffect(()=>{
        //clear the list when it is cleared
        if(i===announcement.length) {
            setAnnouncement(()=>[])
        }
    },[isFocused])
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
                data={announcement}
                keyExtractor={(item: any) => item.announcementID}
                ListEmptyComponent={
                    <View style={tw`p-20`}>
                        <Text
                            style={tw.style('text-xl text-center text-sky-600',{
                                fontFamily:'noto-sans-medium'
                            })}
                        >
                            You have no announcements at this time
                        </Text>
                    </View>
                }
                renderItem={({item }) => {
                    if (!item.viewed) {
                        return <AnnouncementItem props={item} removeAnnouncement={removeAnnouncement} />
                    }
                    i++
                    return null
                    //fake clear
                }}
            />
        </View>
    )
}

export default AnnouncementList