import {NativeModules} from 'react-native'

const {BaiduMtj} = NativeModules

const Analytics = {
  start(appKey: string, debug = true) {
    BaiduMtj.start(appKey, __DEV__ ? debug : false)
  },

  setUserId(userId: string) {
    BaiduMtj.setUserId(userId)
  },

  pageStart(pageName: string) {
    BaiduMtj.onPageStart(pageName)
  },

  pageEnd(pageName: string) {
    BaiduMtj.onPageEnd(pageName)
  },

  event(eventId: string, label: string) {
    BaiduMtj.onEvent(eventId, label)
  },

  eventStart(eventId: string, label: string) {
    BaiduMtj.onEventStart(eventId, label)
  },

  eventEnd(eventId: string, label: string) {
    BaiduMtj.onEventEnd(eventId, label)
  },
}

export default Analytics
