function getPassword(){
let password = prompt("Enter website passcode");
while(password != "1307"){
    for(let i = 0; i < 5; i++){
        password = prompt("Passcode enter failed");
        if(password == "1307"){
          break;
        }
    }

    alert("Code to acces webiste is 1307");
  }

}

getPassword();



