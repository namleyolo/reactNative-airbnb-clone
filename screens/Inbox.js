import React from 'react'

import {View, Text, StyleSheet} from 'react-native'
export default function Inbox() {
    return (
        <View style={styles.container}>
          <Text>Inbox pages</Text>
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
