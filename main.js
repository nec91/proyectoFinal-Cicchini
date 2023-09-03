





















//funcion calculo para genero masculino
function male() {
    let user = userDB[userLoggedId - 1]
    let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
    if (isNaN(aportes)) {
        console.log("Ingrese un dato válido")
    } else if (user.age < 65) {
        let restaEdad = 65 - user.age
        console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 65 años. Restan: ${restaEdad} año/s.`)
    } else if (aportes < 30) {
        let restaAportes = 30 - aportes
        console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
    } else {
        return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
    }
}


//funcion calculo para genero femenino
function female() {
    let user = userDB[userLoggedId - 1]
    let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
    if (isNaN(aportes)) {
        console.log("Ingrese un dato válido")
    } else if (user.age < 60) {
        let restaEdad = 60 - user.age
        console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 60 años. Restan: ${restaEdad} año/s.`)
    } else if (aportes < 30) {
        let restaAportes = 30 - aportes
        console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
    } else {
        return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
    }
}

//funcion que combina calculo de ambos generos y ejecuta dependiendo del mismo
function calculator() {
    let user = userDB[userLoggedId - 1]
    if (user.gender == "male") {
        male()
    } else {
        female()
    }
}

//funcion para iniciar el programa
function start() {
    let welcome = confirm(`¡Bienvenido! ¿Usted se encuentra registrado? Responda "Aceptar" por si, o "Cancelar" por no. `)
    console.log(welcome)
    switch (welcome) {
        case false:
            alert("Regístrese a continuación")
            addUser()
            break
        case true:
            logIn()
        case true:
            calculator()
            break
    }
}
