function showMessage(){
    let userName = document.getElementById('name').value.trim();

    let errorName = document.getElementById('errorName');

    let userEmail = document.getElementById('email').value.trim();

    let errorEmail= document.getElementById('errorEmail');
    
    let userPassword = document.getElementById('password').value;
   
    let errorPassword = document.getElementById('errorPassword');

    let checked = document.getElementById('terms').checked;
    let errorCheck = document.getElementById('errorCheck');

    let msgBox = document.getElementById('alertBox');
    let displayMsg = document.getElementById("showMsg");

    

   errorName.innerText = "";
   errorEmail.innerText = "";
   errorPassword.innerText = "";
   errorCheck.innerText = "";
   displayMsg.innerHTML = "";
   msgBox.style.display = 'none';  
   
   
   if (userName === "" ){
    errorName.innerText = "Please enter your full name name."
    return;
   }else if (userEmail === ""){
    errorEmail.innerText = "Please enter your email address.";
    return;
   }else if (userPassword === ""){
    errorPassword.innerText = "Please enter your password.";
    return;
   }else if (!checked){
    errorCheck.innerText = "Please confirm our Terms and Condition.";
    return;
   }else if (userName === !"" || userEmail === !"" || userPassword === !"" || checked === true){
    msgBox.style.display = 'block'; 
    msgBox.classList.add('show'); 
    displayMsg.innerHTML = "Congratulation!" + " <b>" + userName+"</b>," + " you have successfully signed up. See you at the top!!" ;
    return;
   }

}

function closeAlert(){
    let closeAlert = document.getElementById("closeAlert");
    let msgBox = document.getElementById('alertBox');  
    msgBox.style.display = 'none';  
    msgBox.classList.remove('show');
    if (closeAlert){
        document.getElementById("signupForm").reset();
    }
}


