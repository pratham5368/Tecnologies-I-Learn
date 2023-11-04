## Expo
Expo is a framework and a platform that allows you to develop, build, and deploy React Native applications easily and quickly. It simplifies the development process and provides a set of useful tools and services, including its own CLI (Command Line Interface), a managed workflow, and an SDK (Software Development Kit) with pre-built modules for common features.

[docs](https://docs.expo.dev/)

### Create Expo App
create-expo-app is a command line tool that generates a React Native project that works out of the box with Expo. It is the easiest way to get started building a new React Native application.

1. Initialize a new Expo app
We will use create-expo-app to initialize a new Expo app. It is a command line tool that allows to create a new React Native project with the expo package installed.

It will create a new project directory and install all the necessary dependencies to get the project up and running locally. Run the following command in your terminal:

```

npx create-expo-app StickerSmash
cd StickerSmash
```

2. Download assets

After downloading the archive, unzip it and replace the existing assets directory with it in the project directory. This will override the default assets created when the new project was initialized.

Now, let's open the project directory in our favorite code editor or IDE. Throughout this tutorial, we will use VS Code for our examples.

3. Install dependencies
To run the project on the web, we need to install the following dependencies that will help to run the project on the web:
```
npx expo install react-dom react-native-web @expo/webpack-config
```
4. Run the app on mobile and web
In the project directory, run the following command to start a development server from the terminal
```
npx expo start
```
### Expo Snack
Expo Snack is an online playground and development environment for creating and testing React Native projects. With Snack, you can easily edit and preview your code changes directly in your browser or on a mobile device using the Expo Go app. It offers a fast, easy, and convenient way to develop, test, and share your projects without needing to set up a local development environment.

[docs](https://snack.expo.dev/)

## Expo Tradeoffs
Expo is a powerful tool that simplifies the React Native development process, but it has some limitations. Here’s a summary of the tradeoffs you may face when using Expo.

### Limited native modules
Expo offers a set of pre-built native modules, which are really helpful but might not cover all the functionalities required for your specific app. If you need a custom native module or a third-party library that is not supported by Expo, you’ll have to eject from the Expo managed workflow and switch to the bare-workflow or create a custom native module (native code) yourself.

### Performance
Expo adds an extra layer to your React Native app, which can cause performance issues, especially for large or complex apps. The bare-workflow may provide better performance as you have more control over the native libraries and app optimization.

### App size
Expo apps tend to have a larger app size because they include the entire Expo SDK, regardless of which modules you use in your app. In contrast, non-Expo apps can optimize their size by including only the required native modules.

### Updates and upgrades
When you rely on Expo, you depend on their release cycle for updates and upgrades. If React Native adds a new feature or fixes a bug, you have to wait for an updated Expo version to implement it. This may cause delays or limitations in your app development process.

### Ejecting complications
If you start a project with Expo and later decide to eject and use regular React Native, you might face challenges migrating your code and adjusting to the new configuration. You may need to rewrite some parts of your code or manually migrate dependencies.

### Limited customizability
Expo abstracts various aspects of customization and configuration, which can be a double-edged sword. If you need additional customizations that are not supported by Expo, you’ll have to eject or switch to a bare-workflow project, which gives you more control over the native code.

