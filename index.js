const displayScreen= document.getElementById("screen-box");

function display(input){
    displayScreen.value += input
}

function calculate(){
    const inputParts=displayScreen.value.split(/(\^2|[+\-*/√^]+)/);
    let total = parseFloat(inputParts[0]);

    for (i=1; i<inputParts.length; i+=2){

        const operator = inputParts[i]
        const equationNumber = parseFloat(inputParts[i+1])

        if (operator === '+') {

            total += equationNumber
            
        }else if (operator === '-') {

            total -= equationNumber
            
        } else if (operator === '*') {

            total *= equationNumber
            
        } else if (operator === '/') {

            if(equationNumber === 0){

                return displayScreen.value="Error!";
                
            } else {

                total /= equationNumber

            }
        } else if(operator === '^2') {

            total = Math.pow(total, 2);
            i -= 1;

        } else if(operator === '^'){

            total = Math.pow(total, equationNumber)

        } else if (operator === '√'){

            if(isNaN(total)){
                total = Math.sqrt(equationNumber);
            } else {
                total *= Math.sqrt(equationNumber);
            }

        } else {

            "Please enter valid input."

        }
    }

    displayScreen.value = total

}



function clearDisplay(){
    displayScreen.value = ""
}