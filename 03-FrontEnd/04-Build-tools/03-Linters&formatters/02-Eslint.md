- To install the tool globally, run the following command:
```
npm install eslint --global
```
However, this isn’t the approach recommended in their documentation. Instead, you should probably install ESLint on a per-project basis. So, start by creating a directory for your project:
```
mkdir eslint-sample-app
```
Then, cd into the directory and run the command below to create a package.json file (it will be needed down the road.)
```
npm init
```
Npm will ask you several questions. Just press enter to use the default answer for all of them. After that, you’ll be ready to add ESLint to your project by running this:
```
npm install eslint --save-dev
```
- Initializing and Setting up ESLint
After that you’ll be ready to initialized ESLint, by running:
```
npx eslint --init
```
