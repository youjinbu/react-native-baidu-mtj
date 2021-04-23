## Start Packager

- pnpm i
- yarn --cwd example install
- pnpm --dir example start

## iOS

- pnpm --dir example xcodegen
- pnpm --dir ios -- --simulator 'iPhone 12'

## Android

- cd example
- npx app-icon init
- npx app-icon generate -p android
- yarn android
