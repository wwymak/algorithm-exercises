/*
Let say that the Kinetic / Dynamic Monte-Carlo model parameters are k1=k2=0.2 and Δt=2. At time t=0, there are 4 type-A particles and 3 type-B particles. The algorithm of the Kinetic / Dynamic Monte-Carlo model is given at the slide #119 of the “Introduction and general concepts” section.

How many type-B particles there are after one time step at t=2?

Note that in this algorithm, N is the total number of particles. It is very important to note that step (4) required N iterations of steps (2) and (3) before incrementing the time by Δt. Also, both step (2) and step (3) require one random number. To solve this problem, every time you need a random number pick the number in the following list. Start by taking the first number and then take the second, etc. Never reuse twice a random number. You should have enough random number to answer the question.

•	randomNumberList = [0.800, 0.801, 0.752, 0.661, 0.169, 0.956, 0.949, 0.003, 0.201, 0.291, 0.615, 0.131, 0.241, 0.685, 0.116, 0.241, 0.849];
*/
let A = 4;
let B = 3
const randList =  [0.800, 0.801, 0.752, 0.661, 0.169, 0.956, 0.949, 0.003, 0.201, 0.291, 0.615, 0.131, 0.241, 0.685, 0.116, 0.241, 0.849];
let randIndex = 0;
const k1 = 0.2;
const k2 = 0.2;
let deltaT = 2;
let time = 0;
let timemax = 1000000;

function randomNumber() {
    let number = randList[randIndex % randList.length];
    console.log('random num', number)
    randIndex +=1;
    return number
}

function transition(A, B, N) {
    N = N -1;
    console.log(A, B, N, deltaT, 'deltaT')
    console.log('A')
    if (randomNumber() < A / (A + B)) {
        if(randomNumber() < k1 * deltaT) {
            A = A - 1
            B = B + 1
        }
    } else { //choose B
        console.log('B')
        if(randomNumber() < k2 * deltaT) {
            B = B - 1
            A = A + 1
        }
    }
    console.log('here', A, B)

    if (N > 0) {
        console.log('N', N)
        transition(A, B, N);
    } else {
        console.log(A, B, 'done')
        return {A:A, B:B}
    }
    console.log(A, B, 'here3')
    return {A:A, B:B}
}

function steps(a, b, numberOfIters) {
    let done = 0;
    for (i = 0; i < numberOfIters; i++) {
        if(time === timemax){
            return
        } else {
            console.log('iters', i)
            output = transition(a, b, (a + b))
            console.log(output, 'out')
            time = time + deltaT;
        }
    }

    return {A, B}
}

steps(A, B, 3)
// Note that in this algorithm,
// N is the total number of particles.
// It is very important to note that step (4)
// required N iterations of steps (2) and (3)
// before incrementing the time by Δt.
// Also, both step (2) and step (3) require one random number.
