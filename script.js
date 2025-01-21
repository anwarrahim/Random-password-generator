
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","," +
    "","|",":",";","<",">",".","?","/"];

const charactersWithoutNum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "," +
    "", "|", ":", ";", "<", ">", ".", "?", "/"];
let passwordOneSuggestion = document.getElementById("password-one")
let passwordTwoSuggestion = document.getElementById("password-two")
const checkboxNum = document.getElementById('checkbox-num')

let passwordOne = ""
let passwordTwo = ""


function passwordWithNum(){
    // return console.log(checkboxNum.checked)
    if (checkboxNum.checked){
        generatePassword()
    }
    else{

    }
}
passwordWithNum()

function passwordWithoutNum(){
    
}

function generatePassword(){
   passwordOne = " "
    passwordTwo= " "
    if (checkboxNum.checked) {
        for (let i = 0; i < 15; i++) {
            let passwordOneRandom = Math.floor(Math.random() * characters.length)
            let passwordTwoRandom = Math.floor(Math.random() * characters.length)
            passwordOne += characters[passwordOneRandom]
            passwordTwo += characters[passwordTwoRandom]
        }
    }
    else{
        for (let i = 0; i < 15; i++) {

            let passwordOneRandom = Math.floor(Math.random() * charactersWithoutNum.length)
            let passwordTwoRandom = Math.floor(Math.random() * charactersWithoutNum.length)
            passwordOne += charactersWithoutNum[passwordOneRandom]
            passwordTwo += charactersWithoutNum[passwordTwoRandom]
        }
    }
  
    passwordOneSuggestion.textContent = passwordOne
    passwordTwoSuggestion.textContent = passwordTwo
   
}
