function validate(){
    var username=document.getElementById("usernameLogin").value;
    var password=document.getElementById("passwordLogin").value;

    if(username=="5025201072" && password=="fitra123"){
        alert("LOGIN SUCCESS");
        return false
    }

    else{
        alert("Username / password wrong")
    }
}