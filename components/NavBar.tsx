import { View, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { 
    faBell,
    faBook,
    faPlus,
    faUser,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import tw from 'twrnc'
import { useNavigation, useRoute } from '@react-navigation/native'

const NavBar = ({ identify }:any) => {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation<any>()
    const route = useRoute()
    const list = [
        {
            id:1,
            name:'Courses',
            icon:faBook,
            nav:'Home'
        },
        {
            id:2,
            name:'Feed',
            icon:faBell,
            nav:'Feed'
        },
        {
            id:3,
            name:'Register',
            icon:faPlus,
            nav:'Register'
        },
        {
            id:4,
            name:'Account',
            icon:faUser,
            nav:'Account'
        },
        {
            id:5,
            name:'Others',
            icon:faEllipsis,
            nav:'Others'
        }
    ]
    return (
    <View style={tw`bg-neutral-100`}>
        <FlatList
            data={list}
            keyExtractor={(item: any) => item.id}
            horizontal={true}
            scrollEnabled={false}
            renderItem={({ item: { name, icon, nav } }) => {
                if (nav===route.name||nav===identify) {
                    return (
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(nav)}
                            style={tw.style('relative bg-white py-4',{
                                width: width/5
                            })}
                        >
                            {icon===faBell?<View style={tw`absolute right-7 top-4 w-3 h-3 bg-red-500 shadow-md rounded-full z-1`}></View>:null}
                            <FontAwesomeNative
                                icon={icon}
                                size={30}
                                style={tw`text-yellow-600 mx-auto my-auto mb-1`}
                            />
                            <Text 
                                style={tw.style('text-center text-xs text-yellow-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )
                } else {
                    return (
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate(nav)
                            }}
                            style={tw.style('relative bg-white py-4',{
                                width: width/5
                            })}
                        >
                            {icon===faBell?<View style={tw`absolute right-7 top-4 w-3 h-3 bg-red-500 shadow-md rounded-full z-1`}></View>:null}
                            <FontAwesomeNative
                                icon={icon}
                                size={30}
                                style={tw`text-sky-600 mx-auto my-auto mb-1`}
                            />
                            <Text 
                                style={tw.style('text-center text-xs text-sky-600',{
                                    fontFamily:'noto-sans-medium'
                                })}
                            >
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            }}
        >
        </FlatList>
    </View>
    )
}

export default NavBar