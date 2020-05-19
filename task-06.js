let input;
let total = 0;

while(true){
    let input = prompt('Введите пожалуйста чило');

    if(!input){
        console.log('Пользователь закончил вводить данные');
        break;
    }

    input = Number(input);

    if( Number.isNaN(input)){
        alert('Вы ввели не число. Попробуйте ещё раз');
        continue;
    }

    total +=input;
}

console.log(`Общая сумма чисел равна ${total}`);