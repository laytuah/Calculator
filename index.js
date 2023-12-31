let input1 = 0
let operation = ''
let input2 = 0
let operationInProgress = false;


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
    if(btnResetQueryResult.length > 0){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'C'
    }
    
}

function clearDisplay(){
        const displayElement = getDisplay();
        displayElement.innerHTML = 0

    const btnResetQueryResult = document.getElementsByClassName('btn-reset')
    if(btnResetQueryResult.length > 0){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'AC'
    }
    input1 = 0
    operation = ''
    input2 = 0
    operationInProgress = false;
}

function arithmeticOperation(arithmetic_sign){
    const displayElement = getDisplay();
        if(operation.length){
            if(operationInProgress){
                return
            }
            getResult();
        }
        if(Number(displayElement.innerHTML)){
            input1 = Number(displayElement.innerHTML)
            operation = arithmetic_sign;
            operationInProgress = true;
        }
}

function getResult(){
    let displayElement = getDisplay();;
        if(Number(displayElement.innerHTML)){
            input2 = Number(displayElement.innerHTML)
        }
    let result = 0

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
}

