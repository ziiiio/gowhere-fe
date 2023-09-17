# Bluejay Project

### Guide to setup
https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph <br>
credits: Aleksei Berezkin

### Template used
https://mui.com/material-ui/getting-started/templates/

### Guide to project structure
https://www.taniarascia.com/react-architecture-directory-structure/

## eslint guide
https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

## How to run locally
1. make sure npm is installed
2. run `npm ci` to install packages
3. run `npm start`

## How to run production version
1. make sure npm is installed
2. run `npm ci` to install packages
3. run `npm run build` (a dist folder will appear)
4. run `npx serve dist`

## Docker
1. simply run `docker-compose -f docker-compose.local.yml up -d --build`
2. you will be able to access the website on localhost:3001

### Assumptions
- you have nvm installed and are currently using node18.4.0
- `serve` package installed globally
