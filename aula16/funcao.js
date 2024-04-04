function fatorial(x){
    var fat = 1
    for(let c = x; c > 1; c--){
        fat *= c
    }
    return fat
}

var res = fatorial(5)
console.log(res)