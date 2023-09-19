# Food_App_React-native

# Demonstration Video
https://www.youtube.com/embed/79G3GIm39-E

# Start the mobile app application 
(The ruby version we use is 2.7.5)
1. Make sure the XCode simulator is available
2. Start the application
```
cd ../Food_App_Reactive/Food_App
```
```
npx react-native start
```
3. Run the application on the simulator

Open a new terminal

```
cd ../Food_App_Reactive/Food_App
```
```
npx react-native run-ios
```

If starting the app for the first time or added new packages
```
npm install
```
```
cd ios/Pods
```
```
pod install
```

# Change the API key to our own
Add API key in Callout.jsx and Map.jsx 

# Connect to the MongoDB dataset
1. open ../Food-API in Visual Studio Code
2. open the terminal on the VS Code, on the terminal:
```
cd express
node index.js
```
