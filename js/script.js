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