# react-native-learning

Creating small react native projects for learning purpose

- Remove the .git folder from inside the internal folder for it to be recognizable by hit
  Powershell Command - "Remove-Item -Recurse -Force .git"

- To create a new app - "npx @react-native-community/cli init AppName" (I used this as the original command says init is deprecated) and then "npx react-native run-android" to run the andrioid app on the virtual device manager of Android SDK
- - If there is any issue in running the application then update the ndk version inside android/build.gradle to the latest one (currently - 29.0.13113456) and then cd into android folder and run "./gradlew clean", and then again try running the app

- If there is no local.properties file inside the Android folder then create one, and also add that to .gitignore, contents of the local.properties are  
  sdk.dir=C:\\Users\\USER_NAME\\AppData\\Local\\Android\\Sdk

# Quick Learning Notes

- rnfs shortcut for boiler plate of react code

- In React Native, components like <Image />, <Text />, and <View /> are all independent elements with their own layout rules.
- ScrollView renders all its react child components at once, but this has a performance downside, whereas <FlatList> lazy loads the components, the one which are not in the view are not loaded.
