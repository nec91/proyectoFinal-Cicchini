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
    const genderSelect = document.getElementById('gender')
    const gender = genderSelect.value === "m" ? "male" : "female"
    
    const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
    const userExists = storedUserDB.some(i => i.user === user)
    const userError = userExists ? "El nombre de usuario ya existe, por favor intente nuevamente." : ""

    const emptyFields = user === "" || password === "" || password2 === "" || name === "" || lastName === "" || isNaN(age)
    const emptyFieldsError = emptyFields ? "Ingrese un valor correcto en todos los campos." : ""

    const passwordsMatch = password === password2
    const passwordMatchError = passwordsMatch ? "" : "Las contraseñas no coinciden. Por favor, intente nuevamente."
    if (userError || emptyFieldsError || passwordMatchError) {
        console.log(userError || emptyFieldsError || passwordMatchError)
        return
    }

    let id = storedUserDB.length + 1

    let newUser = new User(user, password, name, lastName, age, gender, id)
    
    storedUserDB.push(newUser)

    localStorage.setItem("userDB", JSON.stringify(storedUserDB))

    console.log("Usuario creado correctamente.")

    window.location.href = "../index.html"

}

addForm.addEventListener("submit", handleRegistration)

