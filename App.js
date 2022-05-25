import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { useState } from 'react'

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor='lightgrey'
        barStyle={'dark-content'}
      />
      <View style={styles.top}>
        <Image
          style={{
            resizeMode: 'contain',
            height: 25,
            width: 25,
            alignContent: 'flex-start',
            marginLeft: 5,
            marginTop: 3
          }}
          source={require('./assets/favicon.png')}
        />
        <Text
          style={{
            fontFamily: 'GrapeNuts-Regular',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            alignContent: 'center',
            marginLeft: 85,
            marginTop: 3
          }}
        >
          Pasha's First Native App!
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'space-between'
  },
  top: {
    flex: 0.05,
    flexDirection: 'row',
    backgroundColor: '#4c1114',
    paddingTop: 10,
    height: 50
  },
  middle: {
    backgroundColor: 'beige',
    borderWidth: 5
  },
  bottom: {
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})
