let country;
let price;

country = prompt('Введите пожалуйста страну от куда нужно доставить товар:');

country = country.toLowerCase();

switch(country){
    case 'китай':
        price = 100;
        break;

    case 'чили':
        price = 250;
        break;

    case 'австралия':
        price = 170;
        break;

    case 'индия':
        price = 80;
        break;

    case 'ямайка':
        price = 120;
        break;

    default:
        alert('В вашей стране доставка недоступна!');
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);


// const userName = prompt('Введите bvz');
// const userAge = prompt('Введите вjplhfcn');


// if( userAge === null || userName === null){
//     console.log('Отмененно');
// }else{
//     console.log('Вас зовут ${userName}');
// }

// if(userAge >= 18){
//     console.log('Ваш возраст ${userAge} и вы совершеннолетний')
// } else{
//     console.log('Ваш возраст ${userAge} и вы не совершеннолетний')
// }

// const value = '555.3jdhbfj67';

// const number = Number.parseFloat(value);

// console.log(number);
// console.log(5 + '5');// ''55
// console.log(5 + '5' + 5);// '55'+'5'='555'
// console.log(5 + 5 + '5');// 10 + '5' = '105'



// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';


// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// // const messege = 'Гость' + ' ' + firstName + ' ' + lastName + ' поселился в ' + room + ' ' + 'номер' + ' ' + type;

// const message = `Гость ${firstName} ${lastName} поселяется ${room} номер ${type}`;

// console.log('jkhcsa'.length);

// const superV = 'qwerty';

// const userIn = prompt('введи что нужно');
// console.log(userIn);

// const normIn = userIn.toLocaleLowerCase();
// console.log (normIn);

// console.log(superV === normIn);

// const number = 3;

// const IsInRange = number > 10 && number <30;
// console.log (`Число ${number} попадает в отрезок от 10 до 30`, IsInRange);
 
// const IsInRange = number < 10 || number >30;
// console.log (`Число ${number} попадает в отрезок до 10 или больше 30?`, IsInRange);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpen = isOnline && isFriend;
// console.log('canOpenChat: ', canOpen);

// const canOpen = isOnline && isFriend &&  !isDnd ;//
// console.log('canOpenChat: ', canOpen);


//Проверка подписки
// const subscription = 'pro';
// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log('canAccessContent: ', canAccessContent);

/////// if и else

// let balance = 1000;
// const payment = 4000;

// console.log(
//     `Общая стоимость ${payment} кредитов. Проверяем кол-во доступных 
//     средств на счету`
// );

// if(balance >= payment){
//     balance -= payment;
//     console.log('Спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// }else {
//     console.log('Недостаточно средств!');
// }
/////////////

// const totalExpenses = 100000;
// const payment = 500;
// let discount = 0;

// if(totalExpenses >= 100 && totalExpenses < 1000) {
//     discount = 0.02;
//     console.log('Бронзовый пратнер, скидка 2%');
// } else if(totalExpenses >= 1000 && totalExpenses < 5000) {
//     discount = 0.05;
//     console.log('Серебряный партнер, скидка 5%');
// }else if(totalExpenses >= 5000) {
//     discount = 0.1;
//     console.log('Золотой партнер, скидка 10%');
// } else{
//     console.log('нет скидки');
// }

// const finalAmount = payment - payment * discount;
// console.log(finalAmount);

///////
// let cost;
// const subscription = 'free';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500
 
//////////Область видимости
// const name = 'mango';

// console.log(name);

// if(true){
//     const name = 'poly';
//     console.log(name);
// }
// console.log(name);

