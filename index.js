function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers, includeSymbols)
{
    const result=document.getElementById("resultContainer");
    const lowercaseChars = "abcdefghijklmnoprstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const numberChars = "01234567890";
    const symbolChars="!@#$%^*()_+-=";

    let allowedChars = "";
    let password="";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength<=0){
        return `Password length must be at least 1`;
    }
    if(allowedChars.length === 0){
        return `At least 1 set of characters needs to be selected`;
    }
    for(let i=0;i<passwordLength;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    console.log(password);
    result.textContent=`Result: ${password}`;
}

const passwordLength = document.getElementById("passLength");
const includeLowerCase =document.getElementById("lcCheckbox");
const includeUpperCase = document.getElementById("ucCheckbox");
const includeNumbers = document.getElementById("numCheckbox");
const includeSymbols = document.getElementById("symCheckbox");
const subBtn = document.getElementById("myBtn");

subBtn.onclick = function(){
    generatePassword(passwordLength.value,
        includeLowerCase.checked,
        includeUpperCase.checked,
        includeNumbers.checked,
        includeSymbols.checked);
}
