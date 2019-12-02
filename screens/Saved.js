import React from 'react'

import {View, Text, StyleSheet} from 'react-native'
export default function Saved() {
    return (
        <View style={styles.container}>
          <Text>Saved pages</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container  : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})
