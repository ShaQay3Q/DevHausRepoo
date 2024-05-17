export function add(a,b){
    return a + b
}

export function mult(a, b){
    return a * b
}

export function div(a, b){
    if (b != 0){
        return a / b
    } else {
        return "undefined"
    }
}

export function sub(a , b){
    return a - b
}

export default function(){
    console.log("Yellow!");
}
