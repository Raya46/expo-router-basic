npx create-expo-app
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler

package.json
{
  "main": "expo-router/entry"
}
{
  "resolutions": {
    "react-refresh": "~0.14.0"
  }
}


app.json
{
  "scheme": "your-app-scheme"
}

babel.config.js
    plugins: ['expo-router/babel'],
