class Counter {
    constructor(){
        this._count = 0;
    }

    increment(){
        this._count++;
    }

    decrement(){
        this._count--;
    }
}

const counter = new Counter;

module.exports = counter;
