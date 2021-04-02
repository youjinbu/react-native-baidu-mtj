@objc(BaiduMtj)
class BaiduMtj: NSObject {

  @objc(start:debug:)
  func start(appKey: String, debug: Int) -> Void {
    BaiduMobStat.default().enableDebugOn = RCTConvert.bool(debug)
    BaiduMobStat.default().start(withAppId: appKey)
  }

  @objc(setUserId:)
  func setUserId(userId: String) -> Void {
    BaiduMobStat.default().userId = userId
  }

  @objc(onPageStart:)
  func onPageStart(pageName: String) -> Void {
    BaiduMobStat.default().pageviewStart(withName: pageName)
  }

  @objc(onPageEnd:)
  func onPageEnd(pageName: String) -> Void {
    BaiduMobStat.default().pageviewEnd(withName: pageName)
  }

  @objc(onEvent:label:)
  func onEvent(eventId: String, label: String) -> Void {
    BaiduMobStat.default().logEvent(eventId, eventLabel: label)
  }

  @objc(onEventStart:label:)
  func onEventStart(eventId: String, label: String) -> Void {
    BaiduMobStat.default().eventStart(eventId, eventLabel: label)
  }

  @objc(onEventEnd:label:)
  func onEventEnd(eventId: String, label: String) -> Void {
    BaiduMobStat.default().eventEnd(eventId, eventLabel: label)
  }
}
