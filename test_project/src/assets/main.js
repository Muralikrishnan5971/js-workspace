let uname = "muralikrishnan";
console.log(uname);

// defining a fuction

function combine(a, b, c) {
  return (a * b) / c;
}

console.log(combine(43, 21, 5));

/* defining a function using arrow notations
    that is defining a anonymous function
    */

let a = (userName) => {
  console.log(userName);
};
console.log(a("tarantino"));

const squareIt = (x) => {
  return x * 2;
};
console.log(squareIt(5));

const user = {
  name: "emkay",
  id: 12,
  // we can even add a fuction inside the object
  greet() {
    console.log("hello, there!!");

    console.log(this.name);
  },
};

console.log(user);
console.log(user.id);
console.log(user.greet());

console.log("******************************************");

const films = ["got", "brba", "theboys", "cars"];
console.log(films[2]);
films.push("bvs");
console.log(films);

const filmIndex = films.findIndex((item) => {
  return item === "brba";
});
console.log(filmIndex);

const filmLang = films.map((item) => {
  return item + " - Eng";
});
console.log(filmLang);

function transformToObjects(numberArray) {
  numberArray.map((item) => ({ val: item }));
}
console.log(transformToObjects([1, 2, 3]));

console.log("******************************************");

// Destructuring arrays and objects

const userNameData = ["murali", "krishnan", "emkay"];
const firstName1 = userNameData[0];
const firstName2 = userNameData[1];

//now the above array can be destructed as

const [firstNameA, firstNameB, firstNameC] = ["murali", "krishnan", "emkay"];
console.log(firstNameA);
console.log(firstNameC);

// Object destructuring

const userObj = {
  name: "emkay",
  id: 12,
};

const objName = userObj.name;

// the above object is destructured as

const { name, id } = {
  name: "homelander",
  id: 47,
};
console.log(name);
console.log(id);

/* The Spread operator
The ... spread operator pulls out the values for an array and adds them
to a new array as comma seperated values. This applies for objects as
well.
*/

const sports = ["running", "weightlifting", "javlin throw"];
console.log(sports);

const newSports = ["cricket", "boxing"];
console.log([...sports, ...newSports]); // ... is the spread operator
console.log([sports, newSports]);

const extendedUser = {
  isAdmin: true,
  ...userObj,
};

console.log(extendedUser);

const passwd = prompt("Please enter your password....!");
