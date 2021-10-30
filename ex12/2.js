let simvol = prompt('Назовите число?');
alert(typeof +simvol);
if (+simvol > 0)
{
    alert('1');
}
else if (+simvol < 0)
{
    alert('-1');
}
else
{
    alert('0');
}