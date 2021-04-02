#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(BaiduMtj, NSObject)

RCT_EXTERN_METHOD(start:(NSString *)appKey debug:(BOOL)debug)
RCT_EXTERN_METHOD(setUserId:(NSString *)userId)
RCT_EXTERN_METHOD(onPageStart:(NSString *)pageName)
RCT_EXTERN_METHOD(onPageEnd:(NSString *)pageName)
RCT_EXTERN_METHOD(onEvent:(NSString *)eventId label:(NSString *)label)
RCT_EXTERN_METHOD(onEventStart:(NSString *)eventId label:(NSString *)label)
RCT_EXTERN_METHOD(onEventEnd:(NSString *)eventId label:(NSString *)label)

@end
