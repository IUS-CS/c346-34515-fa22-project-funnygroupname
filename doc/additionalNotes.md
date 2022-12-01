# Additional Notes

-----
# Manual Runs

### _Running Back End_
```
 cd dwfront/dwbackend
 npm start
```

------
### _Running Front End_
* To run unoptimized version
```
 cd dwfront
 npm run start
```

* To create and run production build
```
npm install -g serve
npm run build
serve -s build
```

## Running Tests:
```
cd dwfont
npm test
```


-----

## Dependencies
* Webstorm plugin: OpenAPI Specifications
* React
* Node.js
* MongoDB
* npm
* jsdoc
* npm libraries (frontend)
    * yarn
    * bootstrap
    * axios
    * React Route DOM
* npm libraries (backend)
    * express
    * nodemon
    * mongoose
    * dotenv
    * cors
    * bcrypt (unused, currently)


----
## Installation Notes
* To install package managers:
    * [Windows ](https://chocolatey.org/install)
    * [Mac](https://brew.sh/)

* With chocolatey, to install Node.js, make and git, use
    * ```choco install nodejs.install```
    * ```choco install make```
    * ```choco install git```
  
* With homebrew, to install Node.js, make and git, use
    * ```brew install node```
    * ```brew install make```
    * ```brew install git```


* Get Dependencies Without Make (Windows)
    * ```cd dwfront ; npm install bootstrap axios yarn jest ; cd ../```
    * ```cd dwfront\dwbackend ; npm install express nodemon mongoose dotenv cors ; npm i react-router-dom --save ; cd ../ ; cd ../```
    * ```cd dwfront\dwbackend ; 'DATABASE_ADMIN_ACCESS=""' | Out-File -FilePath .env```

* Get Dependencies Without Make (Mac/Unix)
    * ```cd dwfront && npm install bootstrap axios yarn jest && npm i react-router-dom --save && cd ../```
    * ```cd dwfront/dwbackend && npm install express nodemon mongoose dotenv cors && cd ../ && cd ../```
    * ```cd dwfront/dwbackend && echo 'DATABASE_ADMIN_ACCESS=""' > .env```

