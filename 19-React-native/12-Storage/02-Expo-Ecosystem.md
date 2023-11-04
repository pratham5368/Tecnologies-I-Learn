## expo-secure-store
Expo Secure Store is a built-in package provided by the Expo SDK to store encrypted data securely on users’ devices. It is a key-value storage system, but it is not designed to store larger amounts of data such as app databases or complex data structures. It is most appropriate for storing secret keys, access tokens, and small user preferences.

First, you need to install the package by running:
```
expo install expo-secure-store
```
Then, import the module into your app:
```
import * as SecureStore from 'expo-secure-store';
```
### Saving Data
To save data to the secure store, use the setItemAsync method. It takes two arguments: a key and a value. Both should be strings.
```
async function saveData() {
  try {
    await SecureStore.setItemAsync('your_key', 'your_value');
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}
```
### Retrieving Data
To retrieve data from the secure store, use the getItemAsync method, which takes the key as a parameter and returns a Promise that resolves to the value.
```
async function getData() {
  try {
    const value = await SecureStore.getItemAsync('your_key');
    if (value !== null) {
      console.log('Data retrieved:', value);
    } else {
      console.log('No data found with that key.');
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}
```
### Deleting Data
To delete data from the secure store, use the deleteItemAsync method. It takes the key as a parameter.
```
async function deleteData() {
  try {
    await SecureStore.deleteItemAsync('your_key');
    console.log('Data deleted successfully!');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}
```

## Expo File System
Expo File System is a universal module that provides access to the file system on the device. Using this module, you can perform various file operations like reading, writing, copying, moving, and deleting files and folders. It also supports reading file metadata and querying file URI.

To use the Expo File System library, you need to install the expo-file-system package:
```
expo install expo-file-system
```
First, import the expo-file-system module:
```
import * as FileSystem from 'expo-file-system';
```
Here are some examples of how to use the Expo File System:

### Reading a file
```
async function readFileAsync() {
    const fileUri = FileSystem.documentDirectory + 'myFile.txt';

    try {
        const content = await FileSystem.readAsStringAsync(fileUri);
        console.log('File content:', content);
    } catch (error) {
        console.error('Error while reading file:', error);
    }
}
```
### Writing a file
```
async function writeFileAsync() {
    const fileUri = FileSystem.documentDirectory + 'myFile.txt';
    const content = 'Hello, World!';

    try {
        await FileSystem.writeAsStringAsync(fileUri, content);
        console.log('File written successfully');
    } catch (error) {
        console.error('Error while writing file:', error);
    }
}
```
### Copying & Moving a file
```
async function copyAndMoveFileAsync() {
    const srcUri = FileSystem.documentDirectory + 'myFile.txt';
    const destUri = FileSystem.documentDirectory + 'copiedFile.txt';

    try {
        await FileSystem.copyAsync({ from: srcUri, to: destUri });
        console.log('File copied successfully');

        const newDestUri = FileSystem.documentDirectory + 'movedFile.txt';
        await FileSystem.moveAsync({ from: destUri, to: newDestUri });
        console.log('File moved successfully');
    } catch (error) {
        console.error('Error while copying/moving file:', error);
    }
}
```
### Deleting a file
```
async function deleteFileAsync() {
    const fileUri = FileSystem.documentDirectory + 'myFile.txt';

    try {
        await FileSystem.deleteAsync(fileUri);
        console.log('File deleted successfully');
    } catch (error) {
        console.error('Error while deleting file:', error);
    }
}
```

## expo-sqlite
Expo SQLite is a powerful tool for handling local SQLite databases in your React Native application. By using this API, you can create, read, update, and delete data as needed, without writing native code. Expo SQLite is available as part of the expo-sqlite package, which provides an easy-to-use interface for SQLite functionalities.

With Expo SQLite, you can efficiently manage SQLite databases within your React Native applications. It enables you to perform various database operations without the need for writing native code.

[sqLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)