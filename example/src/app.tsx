import React from 'react'
import {TextInput, Button, StyleSheet, View} from 'react-native'
import BaiduMtj from '@youjinbu/react-native-baidu-mtj'

export default function App() {
  const ref = React.useRef<TextInput | null>(null)
  const [key, setKey] = React.useState('' /* your key */)

  function onStart() {
    if (key) {
      BaiduMtj.start(key)
    }

    ref.current?.blur()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            ref={ref}
            defaultValue={key}
            onChangeText={setKey}
            placeholder='your key'
          />
        </View>
        <Button title='Start' onPress={onStart} />
      </View>

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

  inputContainer: {
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },

  input: {
    padding: 12,
    flexGrow: 1,
    borderColor: 'green',
    borderWidth: 1,
    marginRight: 20,
  },

  gap: {
    height: 20,
  },
})
