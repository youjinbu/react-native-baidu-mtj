package com.youjinbu.baidumtj

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

import com.baidu.mobstat.StatService

class BaiduMtjModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  override fun getName() = "BaiduMtj"

  @ReactMethod
  fun start(appKey: String, debug: Boolean) {
    StatService.setAppKey(appKey)
    StatService.setDebugOn(debug)
    StatService.start(reactContext)
  }

  @ReactMethod
  fun setUserId(userId: String) {
    StatService.setUserId(reactContext, userId)
  }

  @ReactMethod
  fun onPageStart(pageName: String) {
    StatService.onPageStart(reactContext, pageName)
  }

  @ReactMethod
  fun onPageEnd(pageName: String) {
    StatService.onPageEnd(reactContext, pageName)
  }

  @ReactMethod
  fun onEvent(eventId: String, label: String, acc: Int) {
    StatService.onEvent(reactContext, eventId, label, acc)
  }

  @ReactMethod
  fun onEventStart(eventId: String, label: String) {
    StatService.onEventStart(reactContext, eventId, label)
  }

  @ReactMethod
  fun onEventEnd(eventId: String, label: String) {
    StatService.onEventEnd(reactContext, eventId, label)
  }
}
