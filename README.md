# react-native-learning
Creating small react native projects for learning purpose

- Remove the .git folder from inside the internal folder for it to be recognizable by hit 
  Powershell Command - "Remove-Item -Recurse -Force .git"

- To create a new app - "npx @react-native-community/cli init AppName" (I used this as the original command says init is deprecated) and then "npx react-native run-android" to run the andrioid app on the virtual device manager of Android SDK

- If there is no local.properties file inside the Android folder then create one, and also add that to .gitignore, contents of the local.properties are  
sdk.dir=C:\\Users\\USER_NAME\\AppData\\Local\\Android\\Sdk
