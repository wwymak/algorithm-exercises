function cellState(prev, curr, next) {
    if(!prev) prev=-1;
    if(!next) next=-1;
    let returnval;
    if(prev===1 && next ===1) {
        returnval =  - 1 * curr
    } else if (prev === -1 && next === 1) {
        returnval = 1
    }
    else {
        returnval = curr
    }
    return returnval
}


function stateAtDeltaT(initalState, deltaT) {
    for (i = 0; i< deltaT; i++){
        let nextState = initalState.map((d,i) => cellState(initalState[i - 1], d, initalState[i + 1]) );
        initalState = nextState
    }
    return initalState
}


let initial = new Array(12).fill(-1);
initial[9] = 1;
let result= stateAtDeltaT(initial, 8)
console.log('done', result)
