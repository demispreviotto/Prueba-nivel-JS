let theBridge = "The Bridge 2023";
console.log(theBridge.length);
console.log(theBridge.slice(0, -5))
let culpable = true;
let isCulpable = () => {
    culpable ? console.log('Es Culpable') : console.log('No se culpable')
}
let saludar = (nombre) => {
    typeof nombre == 'string' ? console.log(`Hola soy ${nombre}`) : console.log('Debo ser ejecutada con un string');
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = () => {
    let arr2 = []
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}