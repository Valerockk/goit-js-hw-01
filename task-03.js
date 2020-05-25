const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пожалуйста пароль');

if (!message){
    console.log('Отменено пользователем');
}else if(message === ADMIN_PASSWORD){
    console.log('Добро пожаловать!');
}else{
    console.log('Доступ запрещен, неверный пароль!');
    alert(message);
}

