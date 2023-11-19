Get Version
```
npm -v

npm --version
```
Get Help
```
npm

npm help
```
Create package.json
```
npm init

# Below commands will create package.json file with default values
npm init -y

npm init --yes
```
Set Defaults
```
npm config set init-author-name 'YOUR NAME'

npm config set init-license 'MIT'
```
Get Defaults
```
npm config get init-author-name

npm config get init-license
```
Remove Defaults
```
npm config delete init-author-name

npm config delete init-license
```
Install Packages
Globally
```
npm install -g package-name
```
Production dependency
```
npm install --save package-name
```
Development dependency
```
npm install --save-dev package-name
```
Install Certain Version
Globally
```
npm install -g package-name@package-version
```
Production dependency
```
npm install --save package-name@package-version
```
Development dependency
```
npm install --save-dev package-name@package-version
```
Update Packages
Globally
```
npm update -g package-name
```
Production dependency
```
npm update --save package-name
```
Development dependency
```
npm update --save-dev package-name
```
Remove Packages
Globally
```
npm uninstall -g package-name
```
Production dependency
```
npm uninstall --save package-name
```
Development dependency
```
npm uninstall --save-dev package-name
```
## Move to Another Folder
NPM stores installed packages inside node_modules folder.
Most people usually doesn't share node_modules folder along with their code, because you can easily install all the NPM packages they have used using below commands.

Install production pakage.json and development dependencies.
```
npm install
npm i <package>
```
unistall
```
npm un <package>
```
Install production dependencies only.
```
npm install --production
```
Find Root Folder
Globally
```
npm root -g
```
Locally
```
npm root
```
### List Packages
Globally
```
#list globally installed pakages
npm list -g

npm list -g --depth 0

npm list -g --depth 1
```
Locally
```
npm list

npm list --depth 0

npm list --depth 1
```


## NPM Scripts
Define scripts in package.json file.
```
"scripts": {
  "start": "node index.js",
  "script-name":"command-to-run"
}
```
## Run scripts
```
# Only "start" script will execute without run command
npm start

npm run script-name
```
Upgrade npm on Windows
```
npm-windows-upgrade
```