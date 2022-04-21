import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const DropdownField = ({ callback, getData }:any) => {
    const { width } = Dimensions.get('window')
    const [ open, setOpen ] = React.useState(false)
    const [ value, setValue ] = React.useState(null)
    const [ items, setItems ] = React.useState([
        {
            label: '2023/3',
            value: '2023/3'
        },
        {
            label: '2023/2',
            value: '2023/2'
        },
        {
            label: '2023/1',
            value: '2023/1'
        },
        {
            label: '2022/3',
            value: '2022/3'
        },
        {
            label: '2022/2',
            value: '2022/2'
        },
        {
            label: '2022/1',
            value: '2022/1'
        },
    ])
    React.useEffect(()=>{
        if (value!=null) {
            callback(()=>true)
            getData(()=>value)
        } else {
            callback(()=>false)
        }
    },[value])
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={183}
            style={{
                borderColor:"#d4d4d4",
                borderWidth:2,
                width:'91.6667%',
                marginLeft:'auto',
                marginRight:'auto',
            }}
            containerStyle={{
                shadowRadius: 3,
                shadowOffset: {
                width: 1,
                height: 1,
                },
                shadowOpacity: 0.125,
                shadowColor: '#000000',
                elevation: 5,
            }}
            textStyle={{
                fontFamily:'noto-sans-medium',
                fontSize:17,
                color:'#222222',
                paddingVertical:5,
                paddingHorizontal:8,
            }}
            dropDownContainerStyle={{
                borderWidth:0,
                backgroundColor:'#ffffff',
                width:'91.6667%',
                marginLeft:'4%',
                paddingBottom:8,
            }}
            listItemContainerStyle={{
                backgroundColor:'#ffffff',
                borderBottomWidth:1,
                borderBottomColor:'#d4d4d4',
                height:60,
            }}
            listItemLabelStyle={{
                padding:16,
                color:'#444444'
            }}
            placeholder="Select Year/Semester"
        />
    )
}

export default DropdownField