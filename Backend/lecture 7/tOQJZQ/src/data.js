import { builtinModules } from "module";

export function add() {

    console.log("adding some fucntion");

}

function private() {
    console.log("exporting function");
}


export function subtract() {

    console.log("subtracting some fucntion");

}

let num = 10;

export default{
    num
};