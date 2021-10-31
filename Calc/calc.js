let first_operand;
let second_operand;
let operator;
let result;

operator = prompt('Какое действие хотите выполнить? Выберете только один оператор из перечисленных:  +,  -,  *,  /,  %,  **');
first_operand = +prompt('Укажите первый операнд (можно выбрать только цифру)');
second_operand = +prompt('Укажите второй операнд (можно выбрать только цифру)');

if(operator == "" || !Number.isInteger(first_operand) || !Number.isInteger(second_operand))
{
    alert('Error! Есть незаполненные графы.');
}
else if (Number.isNaN(first_operand) || Number.isNaN(second_operand))
{
    alert('Error! Операнд содержит символ.');
}
else
{
    if (operator == '+')
    {
        result = first_operand + second_operand;
    }
    else if(operator == '-')
    {
        result == first_operand - second_operand;
    }
    else if(operator == '*')
    {
        result = first_operand * second_operand;
    }
    else if(operator == '/')
    {
        if (second_operand == 0)
        {
            alert('Ошибка! На ноль делить нельзя!');
        }
        result = first_operand / second_operand;
    }
    else if(operator == '%')
    {
        result = first_operand % second_operand;
    }
    else if(operator == '**')
    {
        result = first_operand ** second_operand;
    }
    else
    {
        alert('Unknown operation! Выберете оператор из перечисленных в списке.');
    }
    alert(result);
}
