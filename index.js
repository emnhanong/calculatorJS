
const input = document.querySelector(".input");
const question = document.querySelector(".question");
const items = Array.from(document.querySelectorAll(".number"));

items.forEach(function(item) {
    item.addEventListener('click', function() {
        if(input.innerHTML === "0") input.innerHTML = "";    
        input.innerHTML += item.innerHTML;
    })
})


function handleReset() {
    input.innerHTML = "0"
}


function handleOperator(param) {
    const lastCharacter = input.innerHTML.slice(-1);
    const secondCharacter = input.innerHTML.slice(-2);
    const newHTML = input.innerHTML.slice(0, -1) + param;


    if(lastCharacter === "/" || lastCharacter === "+" || lastCharacter === "*" ){
        if(param === "-"){
            input.innerHTML += param; 
        }
        else {
            input.innerHTML = newHTML;
        }
    }
    else {
        if(secondCharacter === "*-" || secondCharacter === "/-" || secondCharacter === "+-" ){
            return
        }
        else if(lastCharacter === "-"){
            input.innerHTML = newHTML;
        }
        else{
            input.innerHTML += param;
        }
    }   
}


function handleEqual() {
    const lastCharacter = input.innerHTML.slice(-1);
    if(lastCharacter === "/" || lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*"){
        return
    }
    input.innerHTML = eval(input.innerHTML)
}