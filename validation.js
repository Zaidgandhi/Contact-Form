function Validate() {
    var First_Name = document.form.Firstname.value;
    var Last_Name = document.form.Lastname.value;

    var Text_Box = document.form.message.value;

    if ((First_Name.length < 3) || (!First_Name)) {
        alert("Enter Correct First Name.");
        return false;
    } else if ((lLast_Name.length < 3) || (!Last_Name)) {
        alert("Enter Correct First Name.");
        return false;
    } else if ((Text_Box.length < 300) || (!Text_Box)) {
        alert("Please Enter correct Address\nNotes : Addresss length should be more then 300 characters.But we got " + Text_Box.length + " character only");
        return false;
    } else {
        return true;
    }
}

function ValidateEmail() {
    var Email = document.form.email.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (Email.match(validRegex)) {
        return true;
    } else {
        alert("Invalid email address!");
        return false;
    }
}

function Reset() {
    document.getElementById('myform').reset();
}