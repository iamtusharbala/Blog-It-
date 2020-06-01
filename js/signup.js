function onSubmit(e) {
    e.preventDefault()
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('email').value
    var password1 = document.getElementById('password1').value
    var password2 = document.getElementById('password2').value

    var msg = document.getElementById('msg')

    if (fname == "" || lname == "" || email == "" || password1 == "" || password2 == "") {
        msg.innerHTML = "Please fill out all fields"
    } else {
        if (password1.length < 8) {
            //passwords char length
            msg.className = "alert alert-danger"
            msg.innerHTML = "Enter password with atleast 8 characters"
        } else {
            if (password1 !== password2) {
                //passwords do not match
                msg.className = "alert alert-danger"
                msg.innerHTML = "Passwords do not match"
            } else {
                //success
                msg.className = "alert alert-success"
                msg.innerHTML = `User: ${fname} ${lname} is registered with email: ${email}`
            }
        }
    }

}

document.getElementById('regForm').addEventListener('submit', onSubmit, false)