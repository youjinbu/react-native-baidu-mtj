import {NativeModules} from 'react-native'

type BaiduMtjType = {
  multiply(a: number, b: number): Promise<number>
}

const {BaiduMtj} = NativeModules
console.log(NativeModules, BaiduMtj)

export default BaiduMtj as BaiduMtjType
