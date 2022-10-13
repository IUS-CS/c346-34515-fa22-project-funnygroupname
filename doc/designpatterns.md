# Design Patterns

----

## _Patterns in Use_

### Command Patterns
With this project build upon Node.js and React, nearly every package function
that we use is a Command Pattern. For example, axios package provides to us
many functions (commands) which we call to communicate with our backend.
The actual executions taking place is encapsulated within the package. 

### Chain of Responsibility Pattern
The use of a front end and back end of our website is a chain of responsibility.
The front end requests are (oftentimes) transferred to the backend to actually be handled.

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

### Factory Method Pattern
As of right now, our web pages are all "hand-crafted". This may be fine
for static web pages, but by providing a web solution, we want to give the
dental offices the ability to customize their own web page. Thus, a type
of Factory Method Pattern will give us the ability to let the business owner
(or ourselves) generate web page components, cause the main set-up of the components
are pretty universal across the board. It will help reduce wasteful-doubling up of
code as well.

### Adapter Pattern
Our application should be able to take into customer requests and provide them with the information
they need. At this moment, the appointments tab on the website does give a
type of adapter pattern, by giving the "customers" 
a type of interface to work with that hooks up to the interface of the JSON model it represents.
Although, this needs to be expanded upon much more and not be as
specific as it currently stands.

### Interpreter Pattern
A type of interpreter will need to be used to give the "business owner" utilizing
our web service to create react pages from the website. 

### Singleton Pattern
When first running the web service, a type of singleton pattern would be helpful as 
it would require the objects to be created "in house", since the main "set-up" 
of the web service should remain relativity unchanged while
the "business owner" builds their website off of it.


---------

## _Designing modules as we move on_

Moving on, with the idea of modules in the back of our mind, we will
try to see if a problem we are trying to solve has already been solved
in the computer science community with a model. Also, by utilizing models,
are code will be more uniform and easier to sift through.
