const calculatorForm = document.getElementById("calculatorForm")

const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
const userLoggedId = JSON.parse(sessionStorage.getItem("userLoggedId"))
const userLogged = storedUserDB.find(i => i.id === userLoggedId)

const gender = userLogged.gender === "male" ? "Masculino" : userLogged.gender === "female" ? "Femenino" : ""

const hiUser = document.getElementById("hiUser")
hiUser.innerHTML = `<h4>Hola! ${userLogged.name} ${userLogged.lastName} </h4>`

const ageForm = document.getElementById("ageLoged")
ageForm.innerHTML = `<p>Su edad: ${userLogged.age} </p>`

const genderForm = document.getElementById("gendderLoged")
genderForm.innerHTML = `<p>Género: ${gender} </p>`
console.log(userLogged)



const handleCalculator = e => {
    e.preventDefault()


    const yearsWorked = parseInt(document.getElementById("worked").value)
    const workedError = isNaN(yearsWorked) || yearsWorked === "" //eventito

    const genderNeedAge = userLogged.gender === "male" ? 65 : userLogged.gender === "female" ? 60 : null

    const ageInsufficient = userLogged.age < genderNeedAge
    const yearsInsufficient = yearsWorked < 30


    const errorMessage =
        ageInsufficient ? `Requisitos de jubilación insuficientes. Su edad mínima necesaria es de ${genderNeedAge} años. Restan: ${genderNeedAge - userLogged.age} año/s.` :
            yearsInsufficient ? `Requisitos de jubilación insuficientes. Año/s restante/s de aportes: ${30 - yearsWorked}` :
                `Felicidades ${userLogged.name} ${userLogged.lastName}, cumple todos los requisitos para jubilarse.`

    console.log(errorMessage)


}

calculatorForm.addEventListener("submit", handleCalculator)




