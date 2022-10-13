# Design Patterns

----

## _Patterns in Use_


### Command Patterns
With this project build upon Node.js and React, nearly every package function
that we use is a Command Pattern. For example, axios package provides to us
many functions (commands) which we call to communicate with our backend.
The actual executions taking place is encapsulated within the package. 

---------

## _Patterns that will Fit in Design_

### Observer Pattern
Although currently unimplemented, thw way in which the website knows a certain user
is logged in will be a sort of observer pattern, as 
an object will store whether someone is logged in or not. 
There will be many other portions of the systems that will
only work depending on not only if someone is logged in, but
also depending on if the logged in individual has the correct
permissions to perform a given task or view certain information.
Some type of object will hold a boolean to say if someone is
logged in, and contain further credentials (some
type of hierarchy of authority
will be created to determine such things) 
as to determine if they are allowed to do certain things.


---------

## _Designing modules as we move on_

