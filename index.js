function run() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    document.getElementById("username").innerHTML = ""
    document.getElementById("email").innerHTML = ""
    document.getElementById("password").innerHTML = ""

    document.getElementById("username").style.border = ""
    document.getElementById("email").style.border = ""
    document.getElementById("password").style.border = ""

    let valid = true

    if (username === "") {
        document.getElementById("usermsg").innerHTML = "This field is required"
        document.getElementById("username").style.border = "1px solid red"
        valid = false
    }

    if (email === "") {
        document.getElementById("emailmsg").innerHTML = "This field is required"
        document.getElementById("email").style.border = "1px solid red"
        valid = false
    }

    if (password === "") {
        document.getElementById("passwordmsg").innerHTML = "This field is required"
        document.getElementById("password").style.border = "1px solid red"
        valid = false
    }

    if (valid) {
        alert("Youre Form is submitted successfully")
        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }


}