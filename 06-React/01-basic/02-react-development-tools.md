## Vite
Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

[docs](https://vitejs.dev/guide/)

## Create React App
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

[docs](https://create-react-app.dev/)
```
npx create-react-app my-app
cd my-app
npm start
```
or 
```
npm init react-app my-app
```
It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```