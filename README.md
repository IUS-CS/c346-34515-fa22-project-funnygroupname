# **Virtual Dental Service**
## A Web Solution For Dental Services
### _by FunnyGroupName_

--------------
## Description:
Virtual Dental Services is a web solution designed for Dental Services, Dental Offices, and any other 
sort of Dentistry related business. 
This web solution will operate to facilitate the numerous operations that a modern dentistry needs to run.


_**This web solution provides:**_
* Ease of access for customers scheduling and keeping track of appointments 
* Providing Statistics on the Dental Services' Operation (work in progress)
  * Current/Historical Earnings
  * Current/historical Customer Count
  * Busiest Times of Days 
* Maintained support and access to a (MongoDB) backend Database

## Prerequisites:
* #### [Node.js (v18.9.0)](https://nodejs.org/en/download/)
* #### [Git](https://git-scm.com/downloads)
* #### Make <sub>(See Additional Notes)</sub>

## To Build Project:
* Install project:
```
git clone https://github.com/IUS-CS/c346-34515-fa22-project-funnygroupname.git       
```

* Get Dependencies with Make <sub>(See Additional Notes If You Don't Have Make)</sub>
  * ```make```

  
* In the newly created .env file put. Go to mongoDB account and get credentials:
```
DATABASE_ADMIN_ACCESS="GET MONGODB CREDENTIALS"
```

#### _if you receive an error about MongooseError and not having a string, deleting the .env file and recreating it yourself in the same spot should fix it_


-----


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
    * React Route DOM
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
* With chocolatey, to install Node.js, make and git, use
  * ```choco install nodejs.install```
  * ```choco install make```
  * ```choco install git```
* With homebrew, to install Node.js, make and git, use
  * ```brew install node```
  * ```brew install make```
  * ```brew install git```


* Get Dependencies Without Make (Windows)
  * ```cd dwfront ; npm install bootstrap axios yarn ; cd ../```
  * ```cd dwfront\dwbackend ; npm install express nodemon mongoose dotenv cors ; cd ../ ; cd ../```
  * ```cd dwfront\dwbackend ; 'DATABASE_ADMIN_ACCESS=""' | Out-File -FilePath .env```

* Get Dependencies Without Make (Mac/Unix)
  * ```cd dwfront && npm install bootstrap axios yarn && cd ../```
  * ```cd dwfront/dwbackend && npm install express nodemon mongoose dotenv cors && cd ../ && cd ../```
  * ```cd dwfront/dwbackend && echo 'DATABASE_ADMIN_ACCESS=""' > .env```

