//MAP
const newarr = ["hola", "mundo", "javascript"];
const arr = newarr.map(newarr => newarr.toUpperCase());
console.log(arr);

//FILTER
const arr_num = [32, 20, 15, 45];
const nums = arr_num.filter(h => h > 30)
console.log(nums)

//REDUCE
const prices = [5.99, 12.50, 3.25, 10.00];
const total = prices.reduce((suma, precio) => suma + precio, 0);
console.log(total);

//MAP + FILTER

const people = [{name: "Jon", age: 25 },
                {name: "aitor", age:21},
                {name:"carlota", age: 23}];
const  adults = people.map(person => person.age > 22 ? person : null).filter(person => person !== null);
console.log(adults);

//REDUCE COUNT
const animales = ["perro", "gato", "perro", "pez", "gato", "perro"];
const count = animales.reduce((conteo, animal) => {
    conteo[animal] = (conteo[animal] || 0) + 1;
    return conteo;
}, {});
console.log(count);

//ALL
const personas = [
    { nombre: "Ana", edad: 17, ciudad: "Madrid" },
    { nombre: "Luis", edad: 20, ciudad: "Barcelona" },
    { nombre: "Marta", edad: 25, ciudad: "Madrid" },
    { nombre: "Pedro", edad: 30, ciudad: "Sevilla" },
    { nombre: "Lucía", edad: 15, ciudad: "Barcelona" }];
    
 const bruh = personas.filter(p => p.edad > 18).map(p => ({ nombre: p.nombre, ciudad: p.ciudad})).reduce((count, p) =>{
    count[p.ciudad] = (count[p.ciudad] || 0) + 1;
    return count;
  }, {});
  console.log(bruh);