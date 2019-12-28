import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, Image, Dimensions, Animated } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { ScrollView } from 'react-native-gesture-handler';


import Categories from "./components/Categories";

var { width, height } = Dimensions.get('window')

export default function Explore() {
  startHeaderHeight = 80;
  const scrollAnimation =  new Animated.Value(0) ;
  const translateY = scrollAnimation.interpolate({
    inputRange: [12, 56, 57],
    outputRange: [55, 0, 0]
  });
   console.log(translateY[0])
   console.log(typeof(translateY))
  const onScroll = Animated.event(
    [{
      nativeEvent: {
        contentOffset: {
          y: scrollAnimation
        }
      }
    }],
    { useNativeDriver: true }
  );

  useEffect(() => {
    if (Platform.OS == 'android') {
      startHeaderHeight = 100 + StatusBar.currentHeight
      console.log("is android", startHeaderHeight)
    }
  });
  // con
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        
        <View style={[styles.container, { height: startHeaderHeight } ]}           {...{onScroll}}>
          <View>
            <Animated.Text style={{ transform: [{ translateY :  translateY }] }}>List Title</Animated.Text>
          </View>
          <View style={styles.viewInput} >
            <Icon name="ios-search" size={20} style={{ marginRight: 20 }}></Icon>
            <TextInput placeholder="Try New Dehli" placeholderTextColor="grey" underlineColorAndroid="transparent"
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', }}></TextInput>
          </View>
        </View>
        <ScrollView scrollEventThrottle={26}>
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 20 }}>
              What can we help you find , Nam Le ?
              </Text>
            <View style={{ height: 130, marginTop: 20, }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Categories image={require('../assets/home.jpg')} name="home"></Categories>
                <Categories image={require('../assets/experiences.jpg')} name="experiences"></Categories>
                <Categories image={require('../assets/marguerite-daisy-beautiful-beauty.jpg')} name="daisy"></Categories>
                <Categories image={require('../assets/restaurant.jpg')} name="restaurent"></Categories>
              </ScrollView>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Text style={{ fontSize: 23, fontWeight: '700' }}>
              Welcome Name le
              </Text>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
              A new selection of homes verified for quality & comfort
              </Text>
            <View style={{ width: width - 40, height: 160, marginTop: 20 }}>
              <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, }} source={require('../assets/home.jpg')}></Image>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <View style={{ fontSize: 22, fontWeight: '700' }}>
              <Text>Home around the world</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    // flex : 1,
    backgroundColor: "white",
    // justifyContent : 'center',
  },
  viewInput: {
    flexDirection: 'row',
    padding: 10,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 1,
  }
})
