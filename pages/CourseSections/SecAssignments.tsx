import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HomeworkAssignmentItem from '../../components/homework/HomeworkAssignmentItem'

const SecAssignments = (props:any) => {
  const data = props.route.params
  return (
    <View style={tw`bg-sky-100 h-full`}>
      <FlatList
          data={data.assignments}
          keyExtractor={(item: any) => item.assignmentID}
          ListEmptyComponent={
              <View style={tw`p-10`}>
                  <Text
                      style={tw.style('text-xl text-center text-sky-600',{
                          fontFamily:'noto-sans-medium'
                      })}
                  >
                      There are no assignments
                  </Text>
              </View>
          }
          renderItem={({ item }) => {
              return <HomeworkAssignmentItem props={item} />
          }}
      />
    </View>
  )
}

export default SecAssignments