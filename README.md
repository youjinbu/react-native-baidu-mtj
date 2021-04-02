# react-native-baidu-mtj

react-native wrapper for [Baidu Mobile Analytics SDK](https://mtj.baidu.com/web/sdk/index)（百度移动统计）

## Installation

```sh
yarn add @youjinbu/react-native-baidu-mtj
```

## Usage

### Basic Usage
(see [example](/example))

```js
import BaiduMtj from "@youjinbu/react-native-baidu-mtj"

BaiduMtj.start('app key')

export function SomeScreen() {
  useEffect(() => {
    // listen to focus event
    navigation.onFocus(() => {
      BaiduMtj.pageStart('home')
    })
    return () => BaiduMtj.pageEnd('home')
  }, [])

  return <View />
}
```

### Supported Methods

```typescript
declare const Analytics: {
    start(appKey: string, debug?: boolean): void;
    setUserId(userId: string): void;
    pageStart(pageName: string): void;
    pageEnd(pageName: string): void;
    event(eventId: string, label: string): void;
    eventStart(eventId: string, label: string): void;
    eventEnd(eventId: string, label: string): void;
};
```

## License

MIT
