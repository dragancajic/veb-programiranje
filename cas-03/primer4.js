/*
 * Funkcije se zadaju kljucnom recju function. Funkcije mogu da budu 
 * sa i bez povratnih vrednosti, kao i sa i bez naziva.
 * Nekoliko primera funkcija
 */

function maksimum(x, y){
    return x>y ? x : y;
}

function maksimum1(x, y = 10){
    return x>y ? x : y;
}

function g(x){
    return x+2;
}

function f(g, x){
    let y = 10;
    if(g === 'function')// operator ===  poredi jednakost tipova i jednakost vrednosti
        y = g(x);
    
    return y+1;
}

console.log("Maksimum dva broja ", maksimum(10, 11));
console.log("Maksimum izmedju broja x i 10 ", maksimum1(8));
console.log("Kompozicija funkcija ", f(g, 5));
console.log("Funkcija sa 2 argumenta a nijedan nije funkcija ", f(2, 5));

/*
 * Anonimne funkcije, funkcije bez imena.
 * 
 */

const a = function (x) {
    return x+1;
}

const b = (x, y) => {
    return x+y;
}

console.log(a(6));
console.log(b("a", "b"));

/*Postoji mogucnost i unutrasnjih fja koje su nedefinisane van bloka*/

function spoljasnja (x, y){
    
    function unutrasnja (x){
        return x+1;
    }
    
    return unutrasnja(y) + x;
}

console.log(spoljasnja(5, 6));
console.log(unutrasnja(5));
