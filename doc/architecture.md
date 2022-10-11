# Architecture
### The structure of Virtual Dental Services

----
#### ***Fig 1. Front End To BackEnd Server***
![](images/01frontToBack.png)
Figure 1 explains the process of how the client gets their requests sent
to the backend MongoDB database. This is meant to show the general use of 
the packages at play and how they are utilized to take in data. The client
begins by giving a webpage (provided to them by the React program)
their information. This can be an appointment scheduled at a given dentistry,
for example. The process is dealt to some capacity in the front end (getting the input), but
the data is swiftly sent to the backend using Axios for actual processing. 
In the backend, express is the general framework used to actually perform its precesses.
Express utilizes CORS to process the request made by Axios. With the data received,
it connects it to a given route (database model). The MongoDB is connected to the backend through Mongoose.
The data is sent to the MongoDB once it is formatted and once the proper credentials are provided to
it. The credentials are provided by a .env file which is utilized by the dotenv
package. This places data into a database.

