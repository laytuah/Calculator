let input1 = 0
let operation = ''
let input2 = 0

function numClick(num){
    console.log(`The number ${num} was clicked`)
    const displayElementQueryResult = document.getElementsByClassName('display')
    if(displayElementQueryResult.length > 0){
        const displayElement = displayElementQueryResult[0]
        if(displayElement.innerHTML == '0' || operation.length){
            displayElement.innerHTML = num
        }else{
            displayElement.innerHTML += num
        }
    }

    const btnResetQueryResult = document.getElementsByClassName('btn-reset')
    if(btnResetQueryResult.length > 0){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'C'
    }
    
}

function clearDisplay(){
    displayElementQueryResult = document.getElementsByClassName('display')
    if(displayElementQueryResult.length > 0){
        const displayElement = displayElementQueryResult[0]
        displayElement.innerHTML = 0
    }

    const btnResetQueryResult = document.getElementsByClassName('btn-reset')
    if(btnResetQueryResult.length > 0){
        const btnResetElement = btnResetQueryResult[0];
        btnResetElement.innerHTML = 'AC'
    }
}

function add(){
    const displayElementQueryResult = document.getElementsByClassName('display')
    if(displayElementQueryResult.length > 0){
        const displayElement = displayElementQueryResult[0]
        if(Number(displayElement.innerHTML)){
            input1 = Number(displayElement.innerHTML)
            operation = '+'
        }
    }
}

function subtract(){
    const displayElementQueryResult = document.getElementsByClassName('display')
    if(displayElementQueryResult.length > 0){
        const displayElement = displayElementQueryResult[0]
        if(Number(displayElement.innerHTML)){
            input1 = Number(displayElement.innerHTML)
            operation = '-'
        }
    }
}

function getResult(){
    const displayElementQueryResult = document.getElementsByClassName('display')
    let displayElement;
    if(displayElementQueryResult.length > 0){
        displayElement = displayElementQueryResult[0]
        if(Number(displayElement.innerHTML)){
            input2 = Number(displayElement.innerHTML)
        }
    }
    let result = 0
    if(operation == '+'){
        result = input1 + input2
        displayElement.innerHTML = result
    }else if(operation == '-'){
        result = input1 - input2
        displayElement.innerHTML = result
    }
}