import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import NavBar from '../components/NavBar'
import ReturnButton from '../components/ReturnButton'
import { useNavigation } from '@react-navigation/native'
import { AnnouncementsContext } from '../data/context'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

const Announcement = (props:any) => {
    const data = props.route.params
    const navigation = useNavigation<any>()
    const announcementC:any = React.useContext(AnnouncementsContext)
    React.useEffect(()=>{
        announcementC.setAnnouncements(()=>{
            announcementC.announcements.forEach((item:any)=>{
                if (item.announcementID===data.announcementID) {
                    item.viewed = true
                }
            })
            return announcementC.announcements
        })
    },[])
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`flex-row`}>
                {data.previous==='home'
                    ?<ReturnButton style="my-auto" callback={()=>navigation.navigate(data.course)} />
                    :<ReturnButton style="my-auto" callback={()=>navigation.navigate('Feed')} />
                }
                <View style={tw`flex-1 my-4 ml-2 px-5`}>
                    <View style={tw`flex-row`}>
                        <FontAwesomeNative
                            size={30}
                            icon={faBullhorn}
                            style={tw`text-sky-600 mr-4 my-auto`}
                        />
                        <View style={tw`flex-1`}>
                            <Text style={tw.style('text-sky-600 text-xl',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {data.announcement}
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
                    {data.date}
                </Text>
            </View>
            <ScrollView
                style={tw`flex-1 bg-sky-100 shadow-md w-11/12 mx-auto rounded-lg`}
            >
                <View style={tw`p-6`}>
                    <Text style={tw.style('text-neutral-700',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {data.content}
                    </Text>
                    <TouchableOpacity>
                        <Text style={tw.style('text-sky-600',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            {data.link}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <NavBar />
        </SafeAreaView>
    )
}

export default Announcement