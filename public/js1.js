function validateForm() {
  var x=document.myForm.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n eg: abc@gmail.com");  
    return false;
    }  
  var pass = document.myForm.pass.value;
  let confirm_pass = document.myForm.cpass.value;
  if (pass != confirm_pass) {
      alert("Passwords don't match. Use the same password.");
          return false;} 
  else {
      return true;
  }
  }