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


### Assumptions on Requirements
1. The locations are tied to the camera coordinates
2. Human-readable locations are found using weather forecast reverse geocode api
3. The locations shown are closest to the camera coordinates, not exact

### Design decisions & constraints
1. The app uses only 2 apis, locations and geocode
2. Google geocode api is used to get the street name only when the location is selected because it is expensive
3. Obtaining all the street names for all the locations is expensive and slow which affects the user experience
