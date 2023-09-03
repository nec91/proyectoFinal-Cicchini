const loginForm = document.getElementById("loginForm")

const handleLogin = e => {
    e.preventDefault()

    const username = document.getElementById("username").value.trim().toLowerCase()
    const password = document.getElementById("password").value
    const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
    const logResult = storedUserDB.find(i => i.user === username)

    const userError = logResult ? "" : Swal.fire({
        icon: 'error',
        title: 'Usuario incorrecto',
        footer: '<a href="./index.html">Intente nuevamente</a>'
    })
    const passError = logResult && logResult.password !== password ? Swal.fire({
        icon: 'error',
        title: 'Contraseña incorrecta',
        footer: '<a href="./index.html">Intente nuevamente</a>'
    }) : ""

    if (userError || passError) {
        userError || passError
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
        })
        let userLoggedId = logResult.id
        sessionStorage.setItem("userLoggedId", JSON.stringify(userLoggedId))
        
        setTimeout(() => {
            window.location.href = "./pages/calculator.html"
        }, 1500)

    }
}

loginForm.addEventListener("submit", handleLogin)
