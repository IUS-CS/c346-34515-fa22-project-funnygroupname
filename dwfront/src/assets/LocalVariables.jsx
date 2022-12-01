
/**
 * If the local variables for a device are not setup, this method will ensure it is
 */
function setUpLocalVariables() {
    if (localStorage.length < 5) {
        localStorage.setItem("username","nil")
        localStorage.setItem("loggedIn","false")
        localStorage.setItem("privilege","nil")
        localStorage.setItem("firstname","nil")
        localStorage.setItem("lastname","nil")
    }
}







module.exports = {setUpLocalVariables}
