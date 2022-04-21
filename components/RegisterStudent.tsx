import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import tw from 'twrnc'
import DropdownField from '../components/DropdownField'
import LoginButton from './LoginButton'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { searchcourses } from '../data/courses'

const RegisterStudent = () => {
    const [selectedItem, setSelectedItem] = React.useState<any>(null)
    const [searchVisible,setSearchVisible] = React.useState(false)
    const [registerVisible,setRegisterVisible] = React.useState(false)
    const [selectedYear, setSelectedYear] = React.useState(null)
    const { width } = Dimensions.get('window')
    const onSelectItem = (item:any) => {
        setSelectedItem(item)
    }
    return (
        <View style={tw`bg-neutral-200 pt-2 h-full`}>
            {!registerVisible?
            <View style={tw`m-2 bg-white w-11/12 mx-auto rounded-lg shadow-md p-5`}>
                <View style={tw`w-11/12 mx-auto mb-2`}>
                    <Text
                        style={tw.style('text-base',{
                            fontFamily:'noto-sans-medium'
                        })}
                    >
                            Year / Semester
                    </Text>
                </View>
                <DropdownField callback={setSearchVisible} getData={setSelectedYear} />
                {searchVisible?
                <>
                    <View style={tw`w-11/12 mx-auto mt-5 mb-2`}>
                        <Text
                            style={tw.style('text-base',{
                                fontFamily:'noto-sans-medium'
                            })}
                        >
                                Search course
                        </Text>
                    </View>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue={{ id: '2' }}
                        onSelectItem={onSelectItem}
                        suggestionsListMaxHeight={150}
                        textInputProps={{
                            style:{
                                backgroundColor:'#ffffff',
                                fontFamily:'noto-sans-medium',
                            }
                        }}
                        inputContainerStyle={{
                            borderColor:"#d4d4d4",
                            borderWidth:2,
                            width:'91.6667%',
                            marginLeft:'auto',
                            marginRight:'auto',
                            backgroundColor:'#ffffff',
                            borderRadius:8,
                            shadowRadius: 3,
                            shadowOffset: {
                            width: 1,
                            height: 1,
                            },
                            shadowOpacity: 0.125,
                            shadowColor: '#000000',
                            elevation: 5,
                        }}
                        suggestionsListContainerStyle={{
                            width:width*(9/12),
                            marginLeft:width/24,
                            marginRight:width/24,
                        }}
                        rightButtonsContainerStyle={{
                            backgroundColor:'#ffffff',
                        }}
                        containerStyle={{
                            backgroundColor:'#ffffff',
                        }}
                        dataSet={searchcourses}
                    />
                    <LoginButton
                        style="bg-sky-600 w-11/12 mt-10"
                        callback={()=>setRegisterVisible(true)}
                    >
                        <Text style={tw.style('text-neutral-100 text-center text-lg',{
                            fontFamily:'noto-sans-medium'
                        })}>
                            Select Course
                        </Text>
                    </LoginButton>
                </>:null}
            </View>:null}

            {registerVisible?
            <View style={tw`m-2 bg-white w-11/12 mx-auto rounded-lg shadow-md p-5`}>
                <View style={tw`flex-row w-11/12 mx-auto mb-5`}>
                    <Image
                        style={tw.style('m-2', {
                        resizeMode:'contain'
                        })}
                        source={selectedItem?.png}
                    />
                    <View style={tw`flex-1`}>
                        <Text
                            style={tw.style('text-sky-600 text-lg p-2',{
                                fontFamily:'noto-sans-medium',
                            })}
                        >
                            {selectedItem?.title} {'('}{selectedYear}{')'}
                        </Text>
                    </View>
                </View>
                <View style={tw`w-11/12 mx-auto mb-2`}>
                    <Text
                        style={tw.style('text-base',{
                            fontFamily:'noto-sans-medium'
                        })}
                    >
                            Course Password
                    </Text>
                </View>
                <InputField 
                    placeholder="Provided by Instructor"
                    secure={false}
                    style="w-11/12"
                />
                <LoginButton
                    style="bg-sky-600 w-11/12 mt-5"
                    callback={()=>{}}
                >
                    <Text style={tw.style('text-neutral-100 text-center text-lg',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Request to register
                    </Text>
                </LoginButton>
                <LoginButton
                    style="border-2 border-neutral-300 w-11/12 py-4 mt-0"
                    callback={()=>setRegisterVisible(false)}
                >
                    <Text style={tw.style('text-neutral-400 text-center text-lg',{
                        fontFamily:'noto-sans-medium'
                    })}>
                        Cancel
                    </Text>
                </LoginButton>
            </View>
            :null}
        </View>
    )
}

export default RegisterStudent