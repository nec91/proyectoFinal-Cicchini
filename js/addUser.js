import { User } from "./constructor.js"

const addForm = document.getElementById("addForm")

const handleRegistration = e => {
    e.preventDefault()

    const user = document.getElementById('user').value.toLocaleLowerCase().trim()
    const password = document.getElementById('password1').value
    const password2 = document.getElementById('password2').value
    const name = document.getElementById('name').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const age = parseInt(document.getElementById('age').value)
    const genderSelect = document.getElementById('genderSelect')
    const selectedValue  = genderSelect.value
    const gender = selectedValue === 'm' ? 'male' : 'female'

    const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
    const userExists = storedUserDB.some(i => i.user === user)
    const userError = userExists ?
        Swal.fire({
            icon: 'warning',
            title: 'El nombre de usuario ya existe',
            footer: '<a href="./newUser.html">Intente nuevamente</a>'
        }) : ""

    const emptyFields = user === "" || password === "" || password2 === "" || name === "" || lastName === "" || isNaN(age)
    const emptyFieldsError = emptyFields ? Swal.fire({
        icon: 'warning',
        title: 'No puede haber campos vacíos',
        footer: '<a href="./newUser.html">Intente nuevamente</a>'
    }) : ""

    const passwordsMatch = password === password2
    const passwordMatchError = passwordsMatch ? "" : Swal.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        footer: '<a href="./newUser.html">Intente nuevamente</a>'
    })
    if (userError || emptyFieldsError || passwordMatchError) {
        userError || emptyFieldsError || passwordMatchError
        return
    }

    let id = storedUserDB.length + 1

    let newUser = new User(user, password, name, lastName, age, gender, id)

    storedUserDB.push(newUser)

    localStorage.setItem("userDB", JSON.stringify(storedUserDB))

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario creado correctamente',
        showConfirmButton: false,
        timer: 1500
    })

    setTimeout(() => {
        window.location.href = "../index.html"
    }, 1500)

}

addForm.addEventListener("submit", handleRegistration)

