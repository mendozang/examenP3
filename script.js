// ejercicio 1 - filtro de arreglos
//arreglo de objetos con nombre y edad, devuelve solo mayores de 18
function filtrarMayoresDeEdad () {
    let personas = [
        { nombre: "Juan", edad: 15}, 
        { nombre: "Maria", edad: 22},
        { nombre: "Pedro", edad: 31},
        { nombre: "Ana", edad: 17},
        { nombre: "Luis", edad: 18},
        { nombre: "Carlos", edad: 24},
        { nombre: "Sofia", edad: 20},
        { nombre: "Lucia", edad: 13}
    ]
    let mayores = personas.filter(persona => persona.edad >= 18)
    return mayores;
}

//ejercicio 2 -transformar y filtrar
//arreglo de numeros devuelve los cuadrados de los numeros cuyo cuadrados sean mayores a 20
function transformarYFiltrar () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let cuadrados = numeros.map(numero => numero * numero)
    let mayores = cuadrados.filter(cuadrado => cuadrado > 20)

    return mayores;
}


// ejercicio 3 - promesas y asincronias
//simula una llamada api con datos de usuario, obtiene datos e imprime en consola

function obtenerUsuarios () {
    fetch('usuarios.json')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => console.log(error))
    
}

// ejercicio 4 -manipulacion compleja del dom
//js agregue un nuevo elemento li cada vez que se haga click en el boton con un boton que lo elimine de la lista
function agregarElemento () {
    
    let lista = document.getElementById('lista');
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo item";
    let boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.onclick = () => lista.removeChild(nuevoElemento);

    lista.appendChild(nuevoElemento);
    nuevoElemento.appendChild(boton);

}

// ejercicio 5 - algoritmos y estructurado de datos
//toma un arreglo de objetos y una propiedad por la que ordenar, devuelve el arreglo ordenado segun la propiedad
function ordenarPorPropiedad () {
    arreglo = [ { nombre: "Juan", edad: 15}, 
        { nombre: "Maria", edad: 22},
        { nombre: "Pedro", edad: 31},
        { nombre: "Ana", edad: 17},
        { nombre: "Luis", edad: 18},
        { nombre: "Carlos", edad: 24},
        { nombre: "Sofia", edad: 20},
        { nombre: "Lucia", edad: 13}];
    propiedad = "edad";
    arreglo.sort((a, b) => a[propiedad] > b[propiedad] ? 1 : -1)
    return arreglo;
}

console.log("Filtrado mayores de edad:", filtrarMayoresDeEdad());
console.log("transformar y filtrar", transformarYFiltrar());
console.log("ordenar por propiedad", ordenarPorPropiedad());
console.log("obtener usuarios", obtenerUsuarios());