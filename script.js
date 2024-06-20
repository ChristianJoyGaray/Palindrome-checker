const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const palResult = document.getElementById('result');
checkButton.addEventListener("click", checkPalindrome);



function checkPalindrome(){
    const strInputs = userInput.value;
    const strInput = strInputs.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const origInput = strInput.split('');
    const reverseInput = [...origInput].reverse();

    if(!strInput){
        alert("Please input a value");
        return;
    }

    if(origInput.join('') === reverseInput.join('')){
        palResult.innerText = `${strInputs} is a palindrome.`;
        console.log("pal")
    }else{
        palResult.innerText = `${strInputs} is not a palindrome.`
        console.log("not pal")
    }

    
};