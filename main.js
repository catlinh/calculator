var num1 = "0"
var num2 = ""
var op = ""
var ans =""
var equation =num1+op+num2;
var display= document.querySelector(".answer");
var onTop= document.querySelector(".equation");
updateEquation();

function updateTop(){
    if(num1==="0"){
        ans="";
        onTop.textContent="";
    }
    else{
    onTop.textContent=num1+op+num2;}
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
        ;
    }
}

function add(num1,num2){
    return Number(num1)+Number(num2);}

function subtract(num1,num2){
    return num1-num2;}

function multiply(num1,num2){
    return num1*num2;}

function divide(num1,num2){
    if(num2==="0"){
        console.log("undefined")
        return "undefined";
    }
    else{
    return num1/num2;
    }
}

function operate(operator,num1,num2){
    if(operator==="+"){
        ans=add(num1,num2);
    }
    if(operator==="-"){
        ans=subtract(num1,num2);
    }
    if(operator==="*"){
        ans=multiply(num1,num2);
    }
    if(operator==="/"){
        ans=divide(num1,num2);
        console.log(ans)
    }
    console.log(ans)
    if(ans==="undefined"){
    ans=Number(ans.toFixed(12));
    ans=String(ans);}
    return ans;
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    let value=button.textContent;
    button.addEventListener("click",function(){
        if(button.className==="num" & num1==="0"){
            num1=value;
            updateEquation();
        }
        else if(value==="-" & num1==="0"){
            num1=value;
            updateEquation();
        }
        else if(button.className==="num" & op===""){
            if(ans!=""){
                ans="";
                num1="";
            }
            num1=num1+value;
            updateEquation();
        }
        else if(num2!="" & button.className==="op"){
            num1=operate(op,num1,num2);
            num2="";
            op=value;
            updateEquation();
        }
        else if(num1!="0" & button.className==="op"){
            ans="";
            op=value;
            updateEquation();
        }
        else if(op!="" & button.className==="num"){
            if(num2==="0"){
                num2=value;
            }
            else{
            num2=num2+value;
            }
            updateEquation();
        }
        else if(value==="clear"){
            num1="0";
            num2="";
            op="";
            ans="";
            updateEquation();
            updateTop();
        }
        else if(value==="=" & num2!=""){
            ans=operate(op,num1,num2);
            updateEquation();
            num1=ans;
            op="";
            num2="";
        }
        else if(value==="delete"){
            if(num2!=""){
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