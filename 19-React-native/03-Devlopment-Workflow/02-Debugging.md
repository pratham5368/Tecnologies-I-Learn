## Debugging
Debugging is an essential aspect of the development workflow in React Native. Learn all about debugging in React Native in the [Debugging section of the React Native documentation.](https://reactnative.dev/docs/debugging)

### Accessing the Dev Menu
React Native provides an in-app developer menu which offers several debugging options. You can access the Dev Menu by shaking your device or via keyboard shortcuts:

- iOS Simulator: Cmd ⌘ + D (or Device > Shake)
- Android emulators: Cmd ⌘ + M (macOS) or Ctrl + M (Windows and Linux)
- Android: Cmd + M or Ctrl + M
- iOS: Cmd + D or Ctrl + D
### Chrome Developer Tools
To debug JavaScript code in Chrome, select "Open Debugger" from the Dev Menu. This will open a new tab at http://localhost:8081/debugger-ui.

From here, select More Tools → Developer Tools from the Chrome menu to open Chrome DevTools. Alternatively, you can use the shortcut ⌥ Option + Cmd ⌘ + I (macOS) / Ctrl + Shift + I (Windows and Linux).

- If you're new to Chrome DevTools, we recommend learning about the Console and Sources tabs in the docs.
- You may want to enable Pause on Caught Exceptions for a better debugging experience.
### Debugging on a physical device

If you're using Expo CLI, this is configured for you already.

On Android 5.0+ devices connected via USB, you can use the adb command line tool to set up port forwarding from the device to your computer:
```
adb reverse tcp:8081 tcp:8081
```
Alternatively, select "Settings" from the Dev Menu, then update the "Debug server host for device" setting to match the IP address of your computer.

### Enabling Fast Refresh
Fast Refresh is a React Native feature that allows you to get near-instant feedback while making changes in your code. It achieves this by reloading only the portion of the app that was changed, without losing the current state. This makes the development process a lot smoother as you don’t have to wait for the entire app to rebuild after making a change.

[docs](https://reactnative.dev/docs/fast-refresh)

### LogBox
LogBox is a new feature added to React Native to improve how logs are displayed and managed in your development environment. It provides better visualization and organization of logs, warnings, and errors, making it easier for developers to address issues in their code.

- Better Error Formatting: Errors are displayed in a more understandable format with clear syntax highlighting and relevant information regarding the error and the specific code that caused it.

- Improved Warnings: Warnings now come with filtering and sorting options, allowing you to control which warnings you want to prioritize or ignore during development.

- Component Stacks: Instead of displaying the raw call stack, LogBox provides a component stack that shows component hierarchy, allowing you to pinpoint the exact component causing the issue.

- Customizable: You can disable LogBox, customize its behavior, or even extend it with your own code to tailor your debugging experience.

[docs](https://reactnative.dev/docs/debugging#logbox)

## Sourcemaps
Sourcemaps are files that map the original source code of a project to its minified or transpiled version. This is especially useful in environments, like React Native, where the code may be transformed before being executed in the device/emulator. Sourcemaps help developers to debug their code more easily by mapping errors in the transformed code back to their original location in the source code.

There are various types of sourcemaps which give different levels of detail to the debugging process:

- eval: Uses eval function to generate the sourcemaps. This is faster but provides less detailed information than other options.
- cheap-source-map: Simple line-to-line mapping without column information. Faster than source-map but less accurate.
- cheap-module-source-map: Similar to cheap-source-map but with support for modules.
- source-map: Full source mapping with both line and column information. It is accurate, though slower compared to other options.

After generating sourcemaps, you can use them to debug errors more efficiently, as they will reference the original locations in the source code. The browser’s developer tools, like Google Chrome, have built-in support for sourcemaps, providing the ability to navigate and debug errors with ease.

## dev tools 
[docs](https://github.com/facebook/react/tree/main/packages/react-devtools)
```
npm install -g react-devtools
```
Now run react-devtools from the terminal to launch the standalone DevTools app. It should connect to your simulator within a few seconds.
```
react-devtools
```
