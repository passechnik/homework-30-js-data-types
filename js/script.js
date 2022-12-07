//0,1 + 0,2
function sum(a, b) {
    return a + b;
}
alert(`0.1 + 0.2 = ${sum(0.1, 0.2)..toFixed(1)}.`);

//"1" + 2
let a = "1";
let b = 2;
let c = Number(a) + b;
console.log(`${a} + ${b} = ${c}`);

// 820mb flash
let flashSize = prompt('Вкажіть обсяг флешки у Гб')
let numberOfFiles = Math.floor((flashSize * 1000) / 820)
alert(`Ви можете завантажити ${numberOfFiles} файлів розміром 820мб.`)

// решта від покупки шоколаду
let userMoney = prompt('Вкажіть вашу суму грошей у гривнях.')
let chocPrice = 55
let numberOfChoc = Math.floor(userMoney / chocPrice)
let change = (userMoney % chocPrice).toFixed(2)
if(change === 0) {
    alert(`Ви можете купити ${numberOfChoc} шоколадок.`)
} else {
    alert(`Ви можете купити ${numberOfChoc} шоколадок і у Вас залишиться ${change} грн.`)
}

//виведення тризначного числа задом наперед
let userNumber = prompt('Вкажіть тризначне число')
let reverseNumber = (""+userNumber).split("").reverse().join("");
alert(`Перевернуте число ${reverseNumber}.`)