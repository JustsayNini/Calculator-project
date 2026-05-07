const displayScreen= document.getElementById("screen-box");

function display(input){
    displayScreen.value += input
}

function calculate(){

    try{
        
        displayScreen.value = eval(displayScreen.value)
    }

    catch(error){
        displayScreen.value ="Error, try again"
    }
    
}



function clearDisplay(){
    displayScreen.value = ""
}