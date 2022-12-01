
function setUpLocalVariables() {
    if (localStorage.length < 5) {
        localStorage.setItem("username","nil")
        localStorage.setItem("loggedIn","false")
        localStorage.setItem("privilege","nil")
    }
}







module.exports = {setUpLocalVariables}
