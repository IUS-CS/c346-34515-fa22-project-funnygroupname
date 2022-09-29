@startuml


frame "Virtual Dental Services" {

database MongoDB as db #Green


rectangle "Backend" #Pink{

component express
component nodemon
component mongoose
component dotenv
component cors
file ".env" as en

}
rectangle "FrontEnd" #LightGreen{
component Webpage #DarkTurquoise {

}

component React #SeaGreen {
component bootstrap 
component axios
collections yarn 


}


}

dotenv -> mongoose
en -> dotenv
React -> Webpage
bootstrap -> Webpage
axios --> express
mongoose --> db
actor client as dude
Webpage -> axios
cors -> mongoose
express -> cors
dude -> Webpage


@enduml
