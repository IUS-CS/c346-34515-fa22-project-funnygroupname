import {logOut} from "../../assets/LoginComponent";


test('Logs out user', ()=> {
    localStorage.setItem("username","uName")
    localStorage.setItem("loggedIn","true")
    localStorage.setItem("privilege","customer")
    localStorage.setItem("firstname","fName")
    localStorage.setItem("lastname","lName")

    logOut()



    expect(localStorage.getItem("username")).toBe("nil")
    expect(localStorage.getItem("loggedIn")).toBe("false")
    expect(localStorage.getItem("privilege")).toBe("nil")
    expect(localStorage.getItem("firstname")).toBe("nil")
    expect(localStorage.getItem("lastname")).toBe("nil")
})