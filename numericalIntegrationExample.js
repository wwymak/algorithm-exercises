function implicit(s0, deltaT, tCoefficient, iters) {
    let s1;
    while (iters > 0){
        s1 = s0 / (1 + tCoefficient * deltaT);
        s0 = s1
        iters --;
        console.log(s1);
    }
    console.log('done');
    return s1
}

function explict(s0, deltaT, tCoefficient, iters) {
    let s1;
    while (iters > 0){
        s1 = s0 * (1 - tCoefficient * deltaT);
        s0 = s1
        iters --;
        console.log(s1);
    }
    console.log('done');
    return s1
}

let implicitRes = implicit(1, 0.25, 10, 4);
let explicitRes = explict(1, 0.25, 10, 4);

console.log(`implict: ${implicitRes}`);
console.log(`explict: ${explicitRes}`);
