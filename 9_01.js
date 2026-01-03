let a = [];

for (let i = 0; i <= 99; i++){
    a[i] = i + 1;
}

let b3 = a.filter(function(e){
    return e % 3 == 0;
});
console.log(b3);

let b5 = a.filter(function(e){
    return e % 5 == 0;
});
console.log(b5);