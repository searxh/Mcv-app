import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const AnnouncementItem = ({ props,removeAnnouncement }:any) => {
    const [checkboxState, setCheckboxState] = React.useState<any>(false)
    const navigation = useNavigation<any>()
    const createTwoButtonAlert = (id:number, setCheckboxState:Function) => {
        Alert.alert(
        "Confirmation",
        "Acknowledge this announcement?",
        [
            {
            text: "Cancel",
            onPress: () => setCheckboxState(()=>false),
            style: "cancel"
            },
            { text: "Confirm", onPress: () => {
                setCheckboxState(()=>true)
                removeAnnouncement(id)
            }}
        ]
        )
    }
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate(props.announcement)}
            style={tw.style('bg-white shadow-md px-4 py-5 mr-3 mb-3 rounded-lg w-full')}
        >
            <View style={tw`flex-row justify-between`}>
                <Image
                    style={tw.style('m-2 h-15 w-15', {
                        resizeMode:'contain',
                    })}
                    source={props.png}
                />
                <View style={tw`mx-5 flex-1`}>
                    <Text style={tw.style('text-base text-sky-600 text-left',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {props.announcement}
                    </Text>
                    <Text style={tw.style('text-sm text-neutral-500 text-left',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {props.course}
                    </Text>
                    <View style={tw`mb-1`}></View>
                    <Text style={tw.style('text-sm text-yellow-600 text-left',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        {props.daysago}
                    </Text>
                </View>
                <BouncyCheckbox
                    isChecked={checkboxState}
                    disableBuiltInState={true}
                    onPress={()=>{
                        createTwoButtonAlert(props.id,setCheckboxState)
                    }}
                    iconStyle={{
                        borderRadius: 5,
                    }}
                    fillColor="#a3a3a3"
                    textStyle={{
                        textDecorationLine: "none",
                        fontFamily: "noto-sans-medium"
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default AnnouncementItem