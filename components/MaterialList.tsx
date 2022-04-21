import { View, TouchableOpacity, Text, Alert, Image, FlatList } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { materials } from '../data/materials'
import LoginButton from './LoginButton'
import MaterialItem from './MaterialItem'

const MaterialList = () => {
    const navigation = useNavigation<any>()
    const [material,setMaterial] = React.useState<any>(materials)
    const removeMaterial = (id:number) => {
        setTimeout(()=>setMaterial(()=>material.filter((item:any)=>item.id!==id)),600)
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
                data={material}
                keyExtractor={(item: any) => item.id}
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
                renderItem={({item}) => {
                    return <MaterialItem props={item} removeMaterial={removeMaterial} />
                }}
            />
        </View>
    )
}

export default MaterialList