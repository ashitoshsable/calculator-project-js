document.addEventListener("keydown",function(event){
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "/", "*"];
    const equal = ["="];
    const clean = ["c","C"];
    if (digits.includes(event.key)) {
        append(event.key);
    }else if(equal.includes(event.key) || event.key==="Enter"){
        calculate();
    }else if(clean.includes(event.key) || event.key==="Backspace"){
        cleardisplay();
    }
})

const display = document.getElementById("display");

function append(input){
    display.value+=input;
}
function cleardisplay(){
    display.value="";
}
function calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value=("error");
    }
}