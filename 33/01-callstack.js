function three() {
    console.log('awesome');
}

function two() {
    three();
}

function one() {
    two();
}

function zero() {
    one();
}

zero();