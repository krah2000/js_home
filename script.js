let car = [38000, 45000, 34000, 25000, 20000]

let nam = car.filter(car => car < 35000)

console.log(car);
console.log(nam);


let index = +prompt("Введите индекс: ");

let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

if (index >= 0 && index < arr.length) {
  arr.splice(index, 1);
  console.log(arr);
} else {
  console.log("Такого элемента у нас нет");
}



