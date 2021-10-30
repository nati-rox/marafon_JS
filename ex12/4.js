let message;
let login = prompt('Введите логин', 'Директор');

message = (login == 'Сотрудник') ? 'Привет': 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' : 
'';
alert(message);