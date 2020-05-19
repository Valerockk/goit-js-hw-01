let country;
let price = 0;

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

if (price <= 0){
    console.log('В вашей стране доставка недоступна!');
}else{
    console.log('Доставка в ${country} будет стоить ${price} кредитов');

}