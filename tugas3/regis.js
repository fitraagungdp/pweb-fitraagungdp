function registration(){

    var studentName = document.getElementById("name").value;
    var studentNRP = document.getElementById("NRP").value;
    var studentPass = document.getElementById("pass").value;
    var studentConfPass = document.getElementById("confPass").value;

    var letters = /^[A-Za-z]+$/;

    if (studentName == "" || studentNRP == "" || studentPass == "" || studentConfPass == "") {
        alert("Enter each details correctly");
    } else if (!letters.test(studentName)) {
    alert("only can use alphabet in this column");
    } // else if (pass != confPass) {
    // alert("Passwords not matching");
    // }
     else if (document.getElementById("pass").value.length <= 8) {
    alert("Password minimum length is 8");
    }else {
    alert(
        "Your account has been created succesfully"
    );
    }
    
}