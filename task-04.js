const credits = 23500;
const pricePerDroid = 3000;
let totalPrice;
let amount;
amount = prompt('Сколько дроидов вы бы хотели приобрести?');

if(!amount){
    console.log('Отменено пользователем!');
} else{
    const totalPrice = pricePerDroid * amount;
    
    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    }else{
        console.log(`Вы купили ${amount} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
    }
}