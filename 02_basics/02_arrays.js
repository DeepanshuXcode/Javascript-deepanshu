const marvel_heros = ["Thor","Ironman","Spider-man"]
const dc_heros = ["Super-man","Batman","Aquaman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);



//console.log(marvel_heros.concat(dc_heros));
// combines two or more array and return new array.




const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);




const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);
//Compilicated array ko simple kr deta hai 






// console.log(Array.isArray("Deepanshu"))  // check if it is array or not
// console.log(Array.from("Deepanshu"));  // converts into array

// console.log(Array.from({name: "Deepanshu"})) // interesting




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// set of elements ko new array me convert kr deta hai 







