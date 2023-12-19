import React from "react"

import { Box, Text, Button } from "@chakra-ui/react"

const a = (() => {
    console.log("a is working ")
})
const y = () => {

}
const x = function () {
    console.log("x is working ")
}

a();
x();

//  invoca mane call kora r call kora mane invoca kora 
// self invoca function / nijei nije ka call kore   

(function () {
    console.log(" i am function ")
})();

const m = (a, b=5) => {
    return a * b
}

console.log(m(5,8))

// (() => {
//     console.log("i am anomise function es7 ")
// })()

var createCounter = function (init) {
    let count = init
    return {
        increment: () => {
            count = count + 1;
            return count;
        },
        decrement: () => {
            count = count - 1;
            return count;
        },
        reset: () => {
            count = init;
            return createCounter(init);
        }
    }
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // Counter object with initial value 5
console.log(counter.decrement()); // 4


const Functions = () => {

    return (
        <>
        </>
    )

}

export default Functions