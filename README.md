## telegram web client

for contest https://t.me/contest/118

https://github.com/pioh/webogram

### Runtime dependencies:

- imask - mask for input, was no time to do manually
- jsbn / leemon - bigintegers
- pako - ungzip
- runes - split utf8 symbols and emojis like golang runes
- code.google.com/p/crypto-js - for aes

### Demo

https://pioh.github.io/webogram/

### start locally:

- yarn install
- yarn start

# build for prod into dist folder

- yarn prod

### build for gh-pages

- yarn gh-pages

### MTproto Schema

api layer 105

Builders generator in src/api/generator/generator.ts into src/api/generator/\*.gen.ts

Run builder: cd src/api/generator && yarn start

### index:

- src/api/Connection - communication with the server
- src/crypto.worker / src/lib/WokrkerClient - background operations for crypto/gzip/...
- src/lib/html - html helpers
- src/components/\* - ui components
- src/const/config - application config, smth like app_id

### Credits

- https://github.com/tdlib/td/
- https://github.com/danog/MadelineProto/
- https://github.com/zhukov/webogram
