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
    //let inputValue1;
  

    first_input.addEventListener('input', () => {
        const choiceNew1 = choice[0].value;
        const choiceNew2 = choice[1].value;
        const inputValue1 = parseFloat(first_input.value);
        const inputValue2 = parseFloat(second_input.value);
      
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
        }
        else {
            second_input.value = inputValue1;
        }
    });
});






// input2.forEach((oneInput,index)=>{
//     oneInput.addEventListener('input',()=>{
//         input1[index].value = input2[index].value
//     })
// })

