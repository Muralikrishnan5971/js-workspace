// control structures

const passwd = prompt("your password");
if (passwd === "emkay") {
  console.log("hi there!!!");
} else if (passwd === "EMKAY") {
  console.log("hi there!!!");
} else {
  console.log("Access not granted");
}

// for loop
const sports = ["running", "weightlifting", "javlin throw"];

for (const sport of sports) {
  console.log(sport.concat(" is an awesome sport!!"));
}

// passing functions as values

function handleTimeoutFirst() {
  console.log("timed-out...");
}

const handleTimeoutSecond = () => {
  console.log("timed-out-again...");
};

setTimeout(handleTimeoutFirst, 2000);
setTimeout(handleTimeoutSecond, 3000);
setTimeout(() => {
  console.log("time-out from anonymous func call");
}, 4000);

// in this above set timeout example, the function handle time out is
// executed after the time out is completed.
// now setTimeout is a built in function, but we can also pass function
// as values to our own custom functions as well

function greeter(greet) {
  greet();
}

greeter(() => console.log("this is the greet function"));

// Defining functions inside of function
function init() {
  function inside() {
    console.log("I am inside a function");
  }
  inside();
}

init();
