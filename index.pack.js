let password = ""
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
let passwordBoxes = document.getElementsByClassName("password-box")
let lengthInput = document.getElementById("password-length")
 

function generate() { 
    
    for (let i = 0; i < passwordBoxes.length; i++) {
        password=""
    let passwordLength = Number(lengthInput.value)
        for (let i=0; i<passwordLength; i++) {
                
                let randomIndex=Math.floor(Math.random()*characters.length)
                password += characters[randomIndex]
            
                }
                
  passwordBoxes[i].value = password     
                } 
            
                } 