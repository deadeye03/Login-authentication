


const userValidation = (key) => {
    return localStorage.getItem(key) !== null;

}

function isValidPassword(password) {
    // Define a regular expression for password validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,16}$/;

    // Test the password against the regular expression
    return passwordRegex.test(password);
}

function passwordCheck() {
    var password = document.getElementById('epass').value;
    var enteredPassword = password;

    if (isValidPassword(enteredPassword)) {
        return enteredPassword;
    } else {
        alert("Please Enter a valid password")
    }
}
function userCheck() {
    var userId = document.getElementById('uname').value;
    if (userValidation(userId)) {
        alert("This user id already exist");
    }
    else {
        return userId;
    }
}


function submit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var userId = document.getElementById('uname').value;
    var password = document.getElementById('epass').value;

    let pass = passwordCheck();
    let user = userCheck();
    if (pass!=undefined && user !=undefined) {
        localStorage.setItem(user, pass);
        userId.value="" ;
        password.value='';
        fname.value='';
        lname.value='';
    }


}
document.addEventListener('DOMContentLoaded',function(){
    let btn=document.getElementById('CreateAccountBtn');
    if (btn) {
        btn.addEventListener('click', (e) => {
            submit();
        })
    }
})

function login(){
    let username=document.getElementById('loginId').value;
    let userPass=document.getElementById('password').value;
    console.log(username)
    console.log(userPass)
    if ( userValidation(username)) {
      var userid=  localStorage.getItem(username);
      console.log(userid);
      if (userid===userPass) {
       username.value='';
       userPass.value='';
       let linkOpen='https://deadeye03.github.io/portfolio/';
       window.open(linkOpen, '_blank');
       

      }
      else {
        alert("please Enter valid username or password");
        username.value='';
       userPass.value='';
      }
    }
    else{
        alert("Please Enter valid username or passwordh")
        username.value='';
       userPass.value='';
    }
   

}
document.addEventListener('DOMContentLoaded',function(){
    let logiuser=document.getElementById("loginUser");
    if (logiuser) {
        logiuser.addEventListener('click',(e)=>{
            login();
        })
        
    }
})