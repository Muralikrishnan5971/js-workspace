// import { apiKey } from "./util.js";

//another way to import as js objects

import { func } from "prop-types"
import * as utils from "./util.js"

import defaultexportvalue from "./util.js"

// console.log(apiKey);
console.log(defaultexportvalue + " default export value")
// console.log("this is muralikrishnan");

console.log(utils.name)

// defining a fuction

function combine(a, b, c){
    return a * b / combine;
}

console.log(combine(43, 21, 5))

// https://codesandbox.io/p/sandbox/first-react-app-start-forked-sk4h29?file=%2Fsrc%2FApp.js


