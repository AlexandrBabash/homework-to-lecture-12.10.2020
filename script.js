
// ----------- Задача №1 -------------

function sum(a, b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}
   
console.log(sum(15, 20));


// ----------- Задача №2 -------------

function convert(a, b) {

    return a * 3600 + b * 60;
}

console.log(convert(2, 20));



// ----------- Задача №3 -------------

function total(a, b, c) {
    return a * 3 + b * 1 + c * 0;
}

console.log(total(3, 4, 4));



// ----------- Задача №4 -------------

function makePair(a, b) {
    array = [a, b];
    return array;
}

console.log(makePair(5, 10));