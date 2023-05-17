const buttons = document.querySelectorAll('.btn');
const input_block = document.querySelectorAll('.two_inputs')
const title = document.querySelectorAll('.title')
const input = document.querySelectorAll('.input')



const headers = ['Расстояние', 'Масса', 'Температура', 'Валюта']
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        input_block.forEach((block) => {
            block.style.display = 'none'
        })
        input_block[index].style.display = 'flex';
        input_block[index].classList.add('two_inputs_clicked')
        title[index].innerHTML = headers[index]
    })
})
input_block.forEach((group) => {
    const first_input = group.querySelector('.first_input');
    const second_input = group.querySelector('.second_input');
    const choice = group.querySelectorAll('.choice');

  

    first_input.addEventListener('input', () => {
        const choiceNew1 = choice[0].value;
        const choiceNew2 = choice[1].value;
        const inputValue1 = parseFloat(first_input.value);
      
        if (choiceNew1 === 'Metr' && choiceNew2 === 'Mile') {
            second_input.value = inputValue1 / 1609
        } else if (choiceNew1 === 'Mile' && choiceNew2 === 'Metr') {
            second_input.value = inputValue1 * 1609;
        } else if (choiceNew1 === 'Kilo' && choiceNew2 === 'Funt'){
            second_input.value = inputValue1 * 2.2046
        } else if (choiceNew1 === 'Funt' && choiceNew2 === 'Kilo'){
            second_input.value = inputValue1 / 2.2046
        } else if (choiceNew1 === 'Celsiy' && choiceNew2 === 'Faregate'){
            second_input.value = inputValue1 * 1.8 + 32
        } else if (choiceNew1 === 'Faregate' && choiceNew2 === 'Celsiy'){
            second_input.value = (inputValue1 - 32) / 1.8
        } else if(choiceNew1 === 'USD' && choiceNew2 === 'RUB'){
            CallResultValue()
            .then(resultValue=>{
            second_input.value = inputValue1 * resultValue
            })
            .catch(error=> console.log('error',error))
        } else if(choiceNew1 === 'RUB' && choiceNew2 === 'USD'){
            CallResultValue()
            .then(resultValue=>{
            second_input.value = inputValue1 / resultValue
            })
            .catch(error=> console.log('error',error))
        }else {
            second_input.value = inputValue1;
        }
    });
    second_input.addEventListener('input', () => {
        const choiceNew1 = choice[0].value;
        const choiceNew2 = choice[1].value;
        const inputValue2 = parseFloat(second_input.value);
      
        if (choiceNew1 === 'Mile' && choiceNew2 === 'Metr') {
            first_input.value = inputValue2 / 1609
        } else if (choiceNew1 === 'Mert' && choiceNew2 === 'Mile') {
            first_input.value = inputValue2 * 1609;
        } else if (choiceNew1 === 'Funt' && choiceNew2 === 'Kilo'){
            first_input.value = inputValue2 * 2.2046
        } else if (choiceNew1 === 'Kilo' && choiceNew2 === 'Funt'){
            first_input.value = inputValue2 / 2.2046
        } else if (choiceNew1 === 'Faregate' && choiceNew2 === 'Celsiy'){
            first_input.value = inputValue2 * 1.8 + 32
        } else if (choiceNew1 === 'Celsiy' && choiceNew2 === 'Faregate'){
            first_input.value = (inputValue2 - 32) / 1.8
        } else if(choiceNew1 === 'USD' && choiceNew2 === 'RUB'){
            CallResultValue()
            .then(resultValue=>{
            first_input.value = inputValue2 / resultValue
            })
            .catch(error=> console.log('error',error))
        } else if(choiceNew1 === 'RUB' && choiceNew2 === 'USD'){
            CallResultValue()
            .then(resultValue=>{
            first_input.value = inputValue2 * resultValue
            })
            .catch(error=> console.log('error',error))
        }
        else {
            first_input.value = inputValue2;
        }
    })
});

const RUB = 'RUB';
const USD = 'USD';
var myHeaders = new Headers();
myHeaders.append("apikey", "OFrdUYMFmmAtOv3T6vCwT4ciWL77bqd8");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function CallResultValue(){
return new Promise((resolve, reject)=>{
fetch(`https://api.apilayer.com/fixer/convert?to=${RUB}&from=${USD}&amount=1`, requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result)
    resultValue = data.result
    resolve(resultValue)

  })
  .catch(error => console.log('error', error));
})
}

