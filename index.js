let input1 = 0
let operation = ''
let input2 = 0
let operationInProgress = false;
let getResultActive = false


function getDisplay(){
    const displayElementQueryResult = document.getElementsByClassName('display')
    if(displayElementQueryResult.length > 0){
    const displayElement = displayElementQueryResult[0]
    return displayElement;
    }
    return null;
}

function numClick(num){
    const displayElement = getDisplay();
        if(displayElement.innerHTML == '0' || operationInProgress){
            displayElement.innerHTML = num
            operationInProgress = false
        }else{
            displayElement.innerHTML += num
        }

    const btnResetQueryResult = document.getElementsByClassName('btn-reset')
    if(btnResetQueryResult.length){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'C'
    } 
}

function clearDisplay(){
        const displayElement = getDisplay();
        displayElement.innerHTML = 0
        const btnResetQueryResult = document.getElementsByClassName('btn-reset')
    if(btnResetQueryResult.length){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'AC'
    }
    input1 = 0
    operation = ''
    input2 = 0
    operationInProgress = false;
    getResultActive = false
}

function arithmeticOperation(arithmetic_sign){
    const displayElement = getDisplay();
        if(operationInProgress){
            operation = arithmetic_sign;
            operationInProgress = true;
            return;
        }else if(operation.length){
            getResult();
        }
        if(Number(displayElement.innerHTML)){
            input1 = Number(displayElement.innerHTML)
            operation = arithmetic_sign;
            operationInProgress = true;
        }
}

function getResult(){
    let displayElement = getDisplay();
    if(getResultActive){   
    }else if(Number(displayElement.innerHTML)){
        input2 = Number(displayElement.innerHTML)
    }
    let result = 0;
    switch(operation){
        case '+':
            result = input1 + input2
            displayElement.innerHTML = result
            break;
        case '-':
            result = input1 - input2
            displayElement.innerHTML = result
            break;
        case '*':
            result = input1 * input2
            displayElement.innerHTML = result
                break;
        case '/':
            result = input1 / input2
            displayElement.innerHTML = result
                break;
        default:
            break;
    }
    input1 = result;
    getResultActive = true
}




// 3         2        6
//input1 * input2 = result

// 6         2        12
//result * input2 = new result