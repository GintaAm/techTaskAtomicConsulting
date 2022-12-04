# Client App

## Setup Android Development Environment

https://reactnative.dev/docs/environment-setup

## To run app

- Add to `~/.gradle/gradle.properties`:
  You can add any value, if you are not building app

```
UPLOAD_STORE_PASSWORD=*****
UPLOAD_KEY_PASSWORD=*****
```

- `npm start`
- On a separate terminal: `npm run android`
- On a separate terminal: `npm run ios`

## How this app works

App is based on mock apis, for this reason, some elements will not luck like as they should. Here is the list of quirks:

- Product item in products screen takes up full with, it's because it only returns 1 item. In list parameter is specifically passed to show 2 columns per row, if we would have more products, we would see product list as in pdf screenshots
- Cart item count does not increase when you press Buy or Other buttons that manipulates cart. It happens because get Cart endpoint always returns same list of items, even though new ones were added. I didn't want to force to change cart count manually, I wanted to have that computed from endpoint
