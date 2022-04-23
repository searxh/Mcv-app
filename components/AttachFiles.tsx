import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import LoginButton from './LoginButton'

const AttachFiles = () => {
  const [files,setFiles] = React.useState([])
  return (
    <View style={tw`bg-sky-100 h-full`}>
      <View style={tw`flex-1 my-2 bg-white rounded-lg w-11/12 mx-auto p-2 shadow-md`}>
        <View style={tw`w-[95%] border-2 border-neutral-300 rounded-lg py-3 mx-auto shadow-sm`}>
            <Text
                style={tw.style('text-sm text-center text-neutral-700',{
                    fontFamily:'noto-sans-medium'
                })}>
                No file selected for attachment
            </Text>
        </View>
        <LoginButton 
            callback={()=>{}}
            style="w-[95%] bg-yellow-500 rounded-lg py-3 shadow-md"
        >
            <Text
                style={tw.style('text-base text-center text-neutral-700',{
                    fontFamily:'noto-sans-medium'
                })}>
                Select a file
            </Text>
            <Text
              style={tw.style('text-sm text-center text-white',{
                  fontFamily:'noto-sans-medium'
              })}>
              Maximum file size: 20 MB
            </Text>
        </LoginButton>
        <View style={tw`w-[95%] mx-auto bg-sky-600 py-1 rounded-lg shadow-md mt-2`}>
          <Text
              style={tw.style('text-base text-center text-white',{
                  fontFamily:'noto-sans-medium'
              })}
          >
              Attachment History
          </Text>
        </View>
        <View style={tw`flex-1 w-[95%] mx-auto bg-sky-200 rounded-lg p-2 mb-2`}>
          <FlatList
              data={files}
              keyExtractor={(item: any) => item.id}
              ListEmptyComponent={
                <View style={tw`w-[99%] border-2 border-sky-300 rounded-lg py-1 mx-auto shadow-sm`}>
                  <Text
                    style={tw.style('text-sm text-center text-neutral-700',{
                        fontFamily:'noto-sans-medium'
                    })}
                  >
                    No files have been attached
                  </Text>
                </View>
              }
              renderItem={() => {
                  return <></>
              }}
          />
        </View>
      </View>
      <LoginButton 
          callback={()=>{}}
          style="w-11/12 bg-sky-600 rounded-lg py-3 shadow-md"
      >
          <Text
              style={tw.style('text-base text-center text-white',{
                  fontFamily:'noto-sans-medium'
              })}>
              Submit
          </Text>
      </LoginButton>
    </View>
  )
}

export default AttachFiles