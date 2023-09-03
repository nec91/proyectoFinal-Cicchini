const loginForm = document.getElementById("loginForm")

const handleLogin = e => {
    e.preventDefault()

    const username = document.getElementById("username").value.trim().toLowerCase()
    const password = document.getElementById("password").value
    const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
    const logResult = storedUserDB.find(i => i.user === username)

    const userError = logResult ? "" : "Usuario incorrecto"
    const passError = logResult && logResult.password !== password ? "Contraseña incorrecta." : ""
    if (userError || passError) {
        console.log(userError || passError)
    } else {
        console.log(`Bienvenid@ ${logResult.name} ${logResult.lastName}`)
        let userLoggedId = logResult.id

        sessionStorage.setItem("userLoggedId", JSON.stringify(userLoggedId))
        window.location.href = "./pages/calculator.html" 
    }
}

loginForm.addEventListener("submit", handleLogin)
