// // import {add} from "./lib/utilities.js"
// import myExport, {add} from "./lib/utilities.js"
// import _ from 'lodash'


// console.log("Hello, World!");
// const a = 23;
// const b = 42;

// console.log(add(a,b));

// // console.log(myExport());

// var objectOne = {name: "Ali", age: 24};
// var objectTwo = {name: "Ali", age: 24};

// console.log(_.isEqual(objectOne, objectTwo));

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirctory = fs.readdirSync(__dirname);
const filePath = __dirname + "/test.txt";

const testFile = fs.readFileSync(filePath, {encoding: "utf-8"});
fs.writeFileSync(filePath, "Hello!")

console.log(dirctory);
console.log(testFile);
