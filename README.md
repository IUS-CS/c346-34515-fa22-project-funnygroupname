# **Fun Dental Group Website**
### _by FunnyGroupName_

--------------
## Description:
The Fun Dental Group is in need of website to base their operations out of. This is their solution, a website!
The website will operate to facilitate the numerous operations that the dentistry needs to run.
The website is connected to a MongoDB database in the backend to give easy access
to the company's records.

_**At the moment, the website can:**_
* Take Appointment from customers

## Prerequisites:
* #### [Node.js (v18.9.0)](https://nodejs.org/en/download/)
* #### [Git](https://git-scm.com/downloads)
* #### Make <sub>(See Additional Notes)</sub>

## To Build Project:
* Install project:
```
git clone https://github.com/IUS-CS/c346-34515-fa22-project-funnygroupname.git       
```

* Get Dependencies (Windows)
  * ```cd dwfront ; npm install bootstrap axios yarn ; cd ../```
  * ```cd dwfront\dwbackend ; npm init ; npm install express nodemon mongoose dotenv cors ; cd ../ ; cd ../```
  * Everything should be good in the init process except license; change to: MIT
  * ```cd dwfront\dwbackend ; 'DATABASE_ADMIN_ACCESS=""' | Out-File .env```

* Get Dependencies (Mac/Unix)
  * ```cd dwfront && npm install bootstrap axios yarn && cd ../```
  * ```cd dwfront/dwbackend && npm init && npm install express nodemon mongoose dotenv cors ** cd ../ && cd ../```
  * Everything should be good in the init process except license; change to: MIT
  * ```cd dwfront/dwbackend && echo 'DATABASE_ADMIN_ACCESS="' > .env```

  
* In the newly created .env file put. Go to mongoDB account and get credentials:
```
DATABASE_ADMIN_ACCESS="GET MONGODB CREDENTIALS"
```
-----
*
*
*
*


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


## Dependencies
* Webstorm plugin: OpenAPI Specifications
* React
* Node.js
* MongoDB
* npm
* npm libraries (frontend)
    * yarn
    * bootstrap
    * axios
* npm libraries (backend)
    * express
    * nodemon
    * mongoose
    * dotenv
    * cors
    * bcrypt (unused, currently)


----
##### Additional Notes
* To install package managers: 
  * [Windows ](https://chocolatey.org/install)
  * [Mac](https://brew.sh/)
* With homebrew, to install Node.js, make and git, use (for chocolatey, use choco) 
  * ```brew install node```
  * ```brew install make```
  * ```brew install git```


