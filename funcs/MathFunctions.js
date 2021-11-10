function Division(a,b) {
    let c = a/b;
    return Math.round(c);
}
console.log(Division(10,3));

function divisionCheck (c,d) {
    let rest = c % d;
    if (rest !== 0){
        return 'ділиться з залишком ' + rest;
    }else {
        return 'ділиться ' + (c/d);
    }
}
console.log(divisionCheck(12,5));
console.log(divisionCheck(10,5));