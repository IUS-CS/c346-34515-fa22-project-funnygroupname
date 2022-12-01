# **Virtual Dental Services**
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

* Get Dependencies with Make <sub>(See the Installation Notes in doc/additionalNotes.mdIf You Do Not Have Make)</sub>
  * ```make```

  
* In the newly created .env file put. Go to mongoDB account and get credentials:
```
DATABASE_ADMIN_ACCESS="GET MONGODB CREDENTIALS"
```

#### _if you receive an error about MongooseError and not having a string, deleting the .env file and recreating it yourself in the same spot should fix it_


-----


### _Running Back End_
```
  make Back
```


### _Running Front End_
* To run unoptimized version
```
  make Front
```

* To create and run production build
```
  make FrontProduct
```

### Running Tests:
```
  make Test
```
