import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'

export default function Categories(props){

  console.log(props)
        return (
            <View style={{width : 130, height: 130, marginLeft: 20, borderWidth: 0.5, borderColor : '#e7e7e7' , shadowColor : 'red', shadowOpacity: 0.5}}>
            <View style={{flex : 2}}>
             <Image source={props.image} style={{flex : 1, height: null ,width: null, resizeMode: 'cover'}}></Image>
            </View>
            <View style={{flex: 1 , paddingLeft: 10, paddingTop: 10}}>
              <Text>Home</Text>
              {/* <Categories></Categories> */}
            </View>
          </View>
        )
}
