// const inputSlider=document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");
// const passwordDisplay = document.querySelector("[ data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const  copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generation = document.querySelector(".generateBtn");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = '~`!@#$%^&*()_-+={}[]|\"<.>,/?:;';

// let password="";
// let passwordLength=10;
// let checkCount = 0;
// handleSlider();
// //set strength circle to gray

// //set passwordlengt
// function handleSlider(){
//    inputSlider.value=passwordLength;
//    lengthDisplay.innerText=passwordLength;
// }

// function setIndicator(color)
// {
//     indicator.style.backgroundColor=color;
// }

// function getRandInteger(min,max)
// {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// function generateRandomNumber()
// {
//       return getRandInteger(0,9);
// }

// function generateLowerCase(){
//     return String.fromCharCode(getRandInteger(97,123));
// }

// function generateUpperCase(){
//     return String.fromCharCode(getRandInteger(65,91))
// }

// function generatesymbol()
// {
//    const randNum=getRandInteger(0,symbols.length);
//    return symbols.charAt(randNum);
// }

// function calcStrength(){
//     let hasUpper=false;
//     let haslower=false;
//     let hasNum=false;
//     let hasSym=false;
//     if(uppercaseCheck.checked)hasUpper=true;
//     if(lowercaseCheck.checked)haslower=true;
//     if(numbersCheck.checked)hasNum=true;
//     if(symbolsCheck.checked)hasSym=true;

//     if(hasUpper && haslower && (hasNum||hasSym) && passwordLength>=8)
//     {
//         setIndicator("#0f0");
//     }
//     else if(
//         (haslower||hasUpper) && (hasNum||hasSym) && passwordLength>=6
//     ){
//         setIndicator("ff0");
//     }
//     else {
//         setIndicator("f00");
//     }
// }

// async function copyContent()
// {
//     try{
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     copyMsg.innerText="copied";
//       }
//       catch(e)
//       {
//         copyMsg.innerText="failed";
//       }

//       copyMsg.classList.add("active");

//       setTimeout(()=>{
//         copyMsg.classList.remove("active");
//       },2000);
// }

// inputSlider.addEventListener('input',(e) =>{
//     passwordLength=e.target.value;
//     handleSlider();
// })

// function shufflePassword(array){
//     //fisher yate algo

//     for(let i=array.length-1;i>0;i--)
//     {
//         const j=Math.floor(Math.random()+(i+1));
//         const temp=array[i];
//         array[i]=array[j];
//         array[j]=temp;
//     }
//     let str="";
//     array.forEach((el)=>(str+=el));
//     return str;
// }

// function handleCheckBoxChange(){
//     checkCount=0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//             checkCount++;
//     });
    
//     if(passwordLength<checkCount)
//     {
//        passwordLength=checkCount;
//        handleSlider();
//     }

// }
// allCheckBox.forEach((checkbox) => {
//     checkbox.addEventListener('change', handleCheckBoxChange);
// });

// copyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.value)
//     {
//         copyContent();
//     }        
// })


// // generation.addEventListener('click',()=>{
// //    if(checkCount==0)
// //      return;


// //    if(passwordLength<checkCount)
// //     {
// //        passwordLength=checkCount;
// //        handleSlider();
// //     }

// //     //to find the new password
// //     //remove old passwrd;
// //   console.log("starting journey")
// //     password="";

// //     //lets put the ticks cocntent

// //     // if(uppercaseCheck.checked)
// //     // {
// //     //     password+=generateUpperCase();
// //     // }

// //     // if(lowercaseCheck.checked)
// //     // {
// //     //     password+=generateLowerCase();
// //     // }

// //     // if(numbersCheck.checked)
// //     //     {
// //     //         password+=generateRandomNumber();
// //     //     }

// //     // if(symbolsCheck.checked)
// //     //         {
// //     //             password+=generatesymbol();
// //     //         }

// //     let funcarr=[];

// //     if (uppercaseCheck.checked) funcarr.push(generateUpperCase);
// //     if (lowercaseCheck.checked) funcarr.push(generateLowerCase);
// //     if (numbersCheck.checked) funcarr.push(generateRandomNumber);
// //     if (symbolsCheck.checked) funcarr.push(generatesymbol);
    
// //     for(let i=0;i<funcarr.length;i++)
// //     {
// //         password+=funcarr[i]();
// //     }
// // console.log("compulsory addition");
// //     //remaining additon


// //     for(let i=0;i<passwordLength-funcarr.length;i++)
// //     {
// //         let randomindex = getRandInteger(0,funcarr.length);
// //         password+=funcarr[randomindex]();
// //     }

// // console.log("emaiming done");
// //     password=shufflePassword(Array.from(password));
// // console.log("suffle");
// //     passwordDisplay.value=password;
// // console.log("finally done");
// //     calcStrength();



        
    

// // })


// generation.addEventListener('click', () => {
//     if (checkCount == 0) return;

//     if (passwordLength < checkCount) {
//         passwordLength = checkCount;
//         handleSlider();
//     }

//     // Clear the old password
//     password = "";

//     // Create an array of functions to generate characters
//     let funcarr = [];

//     if (uppercaseCheck.checked) funcarr.push(generateUpperCase);
//     if (lowercaseCheck.checked) funcarr.push(generateLowerCase);
//     if (numbersCheck.checked) funcarr.push(generateRandomNumber);
//     if (symbolsCheck.checked) funcarr.push(generatesymbol);

//     // Add one character from each selected type
//     for (let i = 0; i < funcarr.length; i++) {
//         password += funcarr[i](); // Call the function here to generate a character
//     }

//     // Fill the rest of the password
//     for (let i = 0; i < passwordLength - funcarr.length; i++) {
//         let randomIndex = getRandInteger(0, funcarr.length);
//         password += funcarr[randomIndex](); // Call the function here to generate a character
//     }

//     // Shuffle the final password
//     password = shufflePassword(Array.from(password));

//     // Display the password
//     passwordDisplay.value = password;

//     // Calculate the password strength
//     calcStrength();
// });



const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generation = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={}[]|\"<.>,/?:;';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider(); // Initialize the slider

// Set password length display
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// Set strength indicator color
function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

// Random integer generator between min and max
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Generate random lowercase character
function generateLowerCase() {
    return String.fromCharCode(getRandInteger(97, 123));
}

// Generate random uppercase character
function generateUpperCase() {
    return String.fromCharCode(getRandInteger(65, 91));
}

// Generate random number
function generateRandomNumber() {
    return getRandInteger(0, 10); // Modified to include 9
}

// Generate random symbol
function generatesymbol() {
    const randNum = getRandInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

// Calculate password strength
function calcStrength() {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasNum = numbersCheck.checked;
    let hasSym = symbolsCheck.checked;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#1B4D3E"); // Strong: Green
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#1DB954"); // Medium: Yellow
    } else {
        setIndicator("#f00"); // Weak: Red
    }
}

// Copy password to clipboard
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

// Update password length when slider changes
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

// Shuffle password using Fisher-Yates algorithm
function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

// Handle checkbox change and ensure password length is valid
function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

// Copy password to clipboard when copy button is clicked
copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
});

// Generate password when the generate button is clicked
generation.addEventListener('click', () => {
    if (checkCount == 0) return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // Clear the old password
    password = "";

    // Create an array of functions to generate characters
    let funcArr = [];

    if (uppercaseCheck.checked) funcArr.push(generateUpperCase);
    if (lowercaseCheck.checked) funcArr.push(generateLowerCase);
    if (numbersCheck.checked) funcArr.push(generateRandomNumber);
    if (symbolsCheck.checked) funcArr.push(generatesymbol);

    // Add one character from each selected type
    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }

    // Fill the rest of the password
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randomIndex = getRandInteger(0, funcArr.length);
        password += funcArr[randomIndex]();
    }

    // Shuffle the final password
    password = shufflePassword(Array.from(password));

    // Display the password
    passwordDisplay.value = password;

    // Calculate the password strength
    calcStrength();
});

