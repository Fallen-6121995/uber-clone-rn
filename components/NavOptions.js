import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';



const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"
    }
]

const NavOptions = () => {
  return (
    <View>
      <FlatList data={data} horizontal renderItem={({item}) => (
        <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image style={{width:120,height:120, resizeMode:"contain"}} source={{uri:item.image}} />
                <Text style={tw `mt-2 text-lg font-semibold text-black`}>{item?.title}</Text>
                <Icon style={tw `bg-black pt-3 rounded-full h-12 w-12 mt-4 items-center`} name="arrowright" color="white" type='antdesign' />
            </View>
        </TouchableOpacity>
      )}  />
    </View>
  )
}

export default NavOptions