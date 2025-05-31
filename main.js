function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    if(operator==="+"){
        var ans=add(num1,num2);
    }
    if(operator==="-"){
        var ans=subtract(num1,num2);
    }
    if(operator==="*"){
        var ans=multiply(num1,num2);
    }
    if(operator==="/"){
        var ans=divide(num1,num2);
    }
    return ans;
}