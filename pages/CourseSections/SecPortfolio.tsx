import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { grades } from '../../data/grades'
import HomePortfolioItem from '../../components/portfolio/HomePortfolioItem'

const SecPortfolio = () => {
  return (
    <View style={tw`bg-sky-100 h-full`}>
      <View 
            style={tw`w-[97%] justify-between mx-1 flex-row bg-sky-600 rounded-md shadow-md p-1 py-2 mx-auto my-2`}
        >
          <View style={tw`flex-1 m-auto`}>
              <Text style={tw.style('text-center text-white text-sm mx-1',{
                  fontFamily:'noto-sans-medium'
              })}>
                  Item
              </Text>
          </View>
          <View style={tw`flex-1 m-auto`}>
              <Text style={tw.style('text-center text-white text-sm mx-1',{
                  fontFamily:'noto-sans-medium'
              })}>
                  Points obtained
              </Text>
          </View>
          <View style={tw`flex-1 m-auto`}>
              <Text style={tw.style('text-center text-white text-sm mx-1',{
                  fontFamily:'noto-sans-medium'
              })}>
                  from total points
              </Text>
          </View>
          <View style={tw`flex-1 m-auto`}>
            <Text style={tw.style('text-center text-white text-xs mx-1',{
                fontFamily:'noto-sans-medium'
            })}>
                % counted within group
            </Text>
          </View>
          <View style={tw`flex-1 m-auto`}>
          </View>
        </View>
      <FlatList
          data={grades}
          keyExtractor={(item: any) => item.id}
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
              return <HomePortfolioItem props={item} />
          }}
      />
    </View>
  )
}

export default SecPortfolio