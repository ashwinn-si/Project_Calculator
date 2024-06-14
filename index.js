let equation = "";
const displayer = document.querySelector('.display');

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', event=>{
        const buttonValue = event.target.textContent;
        equation+=buttonValue;
        value_displayer()
    });
    
});

document.querySelectorAll('.operations').forEach(button => {
    button.addEventListener('click', event=>{
        const operations = event.target.textContent;
        equation+=operations;
        value_displayer()
    });
    
});
function calculate(){
    equation=eval(equation).toFixed(2).toString();
    value_displayer()
}
function reset(){
    equation="";
    value_displayer()
}
function value_displayer(){
    displayer.innerHTML=equation;
}