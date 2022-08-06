document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const emailFiled =document.getElementById('user-email');
    const userEmail = emailFiled.value;
   //get user password
    const passwordFiled =document.getElementById('user-password');
    const userPassword = passwordFiled.value;
   if(userEmail == "hello@gmail.com" && userPassword == "hello"); {
   window.location.href = 'banking.html';
   } 
  
})