import React from 'react'
import {Platform, Button, StyleSheet, View} from 'react-native'
import BaiduMtj from '@youjinbu/react-native-baidu-mtj'

BaiduMtj.start(
  Platform.select({
    android: '__YOUR_ANDROID_KEY__',
    ios: '__YOUR_IOS_KEY__',
    default: '',
  })
)

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Page Start' onPress={() => BaiduMtj.pageStart('home')} />
      <View style={styles.gap} />
      <Button title='Page end' onPress={() => BaiduMtj.pageEnd('home')} />
      <View style={styles.gap} />
      <Button
        title='Event Start'
        onPress={() => BaiduMtj.eventStart('event', 'label')}
      />
      <View style={styles.gap} />
      <Button
        title='Event end'
        onPress={() => BaiduMtj.eventEnd('event', 'label')}
      />
      <View style={styles.gap} />
      <Button title='Event' onPress={() => BaiduMtj.event('tap', 'button')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },

  gap: {
    height: 20,
  },
})
