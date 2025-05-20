// Singleton

// Object constructor
Object.create //Singleton banta hai


//object literals
   //Sigleton nhi banta hai
   const sym = Symbol("DEEP1")
   const JsUser = {
    name : "Deepanshu",  //yha key ko apne aap string form me leti hai
    "full_name" : "Deepanshu Singh",
    age : 18,
    location : "Kanpur",
    isLoggedIn : false,
    [sym] : "DEEP1"
    
    }

   /*

    Object me output lene ke liye

    //console.log(JsUser.age); // We can also use this method to get output means joh bhi humko value chahiye just like indexing joh hum array me krte hai.
    //console.log(JsUser.full_name); // isme humko string deke hi output milta hai("").

    console.log(JsUser["age"]); // isme humko string deke hi output milta hai("").
    //Generally hum yhi use krte hai kyuki isme error ke chance kamm hai

*/

//console.log(JsUser[sym]);
//console.log(typeof JsUser[sym]); //???? // hum jb bhi symbol ko object me declare krte hai toh [] use krte hai without "" e.g. [sym] wrna woh string ki tarah leta hai




// JsUser.age = "20" // Value update krne ke liye
// console.log(JsUser["age"]);        


// JsUser.age = 21
// Object.freeze(JsUser)  // value freeze kr deta baad me taaki baad me update nhi ho ske
// JsUser.age = 22
// console.log(JsUser);


//console.log(JsUser); //????




JsUser.greeting = function(){          //Function declare kiya
    console.log("Hello Deep");
}
console.log(JsUser.greeting());        //Function ka output mila



JsUser.greetingtwo = function(){          //Dusra function hai ye
    console.log(`HELLO USERS THIS IS ${this.full_name}`); // yha pe humne function bnaya bhi orr usko reference diya.
}
console.log(JsUser.greetingtwo());






    
