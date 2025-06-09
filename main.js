var num1 = "0"
var num2 = ""
var op = ""
var ans =""
var equation =num1+op+num2;
var display= document.querySelector(".answer");
var onTop= document.querySelector(".equation");
updateEquation();

function updateTop(){
    if(num1==="0"&op===""){
        ans="";
        onTop.textContent="";
    }
    else{
    onTop.textContent=num1+op+num2;
    }
}

function updateBottom(){
    if(num1===""){
        display.textContent=0;
    }
    display.textContent=num1+op+num2;
}

function updateEquation(){
    if(num1===""){
        display.textContent=0;
    }
    else if(ans===""){
        display.textContent=num1+op+num2;
        }
    else{
        display.textContent=ans;
        updateTop();
    }
}

function add(num1,num2){
    return Number(num1)+Number(num2);
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if(num2==="0"){
        return "undefined";
    }
    else{
    return num1/num2;
    }
}

function operate(operator,num1,num2){
    if(num1==="undefined"){
        var answer="undefined";
    }
    else if(operator==="+"){
        var answer=add(num1,num2);
    }
    else if(operator==="-"){
        var answer=subtract(num1,num2);
    }
    else if(operator==="*"){
        var answer=multiply(num1,num2);
    }
    else if(operator==="/"){
        var answer=divide(num1,num2);
    }
    if(answer!="undefined"){
        answer=Number(answer.toFixed(12));
        answer=String(answer);
    }
    return answer;
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    let value=button.textContent;
    button.addEventListener("click",function(){
//first operand: replace with 0 
//or if first operand is undefined 
        if(button.className==="num" & (num1==="0"||num1==="undefined")){
            if(op!=""){
                if(num2!=""){
                    num2=num2+value;
                }
                else{
                num2=value;
                }
                updateEquation();
            }
            if(num1==="undefined"){
                num1="0";
                updateTop();
            }
            if(op===""){
            num1=value;
            ans="";
            updateEquation();
            }
        }
//first operand 
        else if(button.className==="num" & op===""){
            if(ans!=""){
                ans="";
                num1="";
            }
            num1=num1+value;
            updateEquation();
        }
//second operator 
        else if(num2!="" & button.className==="op"){
            updateTop();
            ans="";
            num1=operate(op,num1,num2);
            num2="";
            if(num1!="undefined"){
                op=value}
            else{
                op=""
            }
            updateEquation();
        }
//first operator 
        else if(num1!="0" & button.className==="op"){
            if(num1!="undefined"){
            ans="";
            op=value;
            updateEquation();}
        }
//second operand 
        else if(op!="" & button.className==="num"){
            if(num2==="0"){
                num2=value;
            }
            else{
            num2=num2+value;
            }
            updateEquation();
        }
//clear button
        else if(value==="clear"){
            num1="0";
            num2="";
            op="";
            ans="";
            updateEquation();
            updateTop();
        }
//equal button
        else if(value==="=" & num2!=""){
            ans=operate(op,num1,num2);
            updateEquation();
            num1=ans;
            op="";
            num2="";
        }
//delete button
        else if(value==="delete"){
            if(num1==="undefined"){
                num1="";
            }
            else if(num2!=""){
                num2=num2.slice(0,-1);
            }
            else if(op!=""){
                op="";
            }
            else{
                if(num1==="" || num1==="0"){
                    updateTop();
                }
                else{
                    num1=num1.slice(0,-1);}
            }
            if(num1===""){
                num1="0";
                updateTop();
            }
            updateBottom();
        }
})});