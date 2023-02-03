const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var passOne = document.getElementById("pass1");
var passTwo = document.getElementById("pass2");
var count = 0;
var pass;

function genPass() {
    count++;
    pass = "";
    for(var i = 0 ; i < 15 ; i++) {
        var choice = Math.floor(Math.random() * characters.length);
        pass = pass + characters[choice];
    }
    passTwo.textContent = pass;
    pass = "";
    for(var i = 0 ; i < 15 ; i++) {
        var choice = Math.floor(Math.random() * characters.length);
        pass = pass + characters[choice];
    }
        passOne.textContent = pass;   
}

