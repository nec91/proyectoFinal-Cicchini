const calculatorForm = document.getElementById("calculatorForm")

const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
const userLoggedId = JSON.parse(sessionStorage.getItem("userLoggedId"))
const userLogged = storedUserDB.find(i => i.id === userLoggedId)

const gender = userLogged.gender === "male" ? "Masculino" : userLogged.gender === "female" ? "Femenino" : ""

const hiUser = document.getElementById("hiUser")
hiUser.innerHTML = `<h4>Hola! ${userLogged.name} ${userLogged.lastName} </h4>`

const ageForm = document.getElementById("ageLoged")
ageForm.innerHTML = `<p>Su edad: ${userLogged.age} </p>`

const genderForm = document.getElementById("genderLoged")
genderForm.innerHTML = `<p>Género: ${gender} </p>`


const handleCalculator = e => {
    e.preventDefault()


    const yearsWorkedInput = document.getElementById("worked")
    const yearsWorked = parseInt(yearsWorkedInput.value)

    if (isNaN(yearsWorked) || yearsWorkedInput.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese un valor correcto',
            footer: '<a href="./calculator.html">Intente nuevamente</a>'
        })
    }

    const genderNeedAge = userLogged.gender === "male" ? 65 : userLogged.gender === "female" ? 60 : null

    const ageInsufficient = userLogged.age < genderNeedAge
    const yearsInsufficient = yearsWorked < 30


    const messageId =
        ageInsufficient ? "ageInsufficient" :
            yearsInsufficient ? "yearsInsufficient" : "congratulations"

    finalresult(messageId, genderNeedAge, yearsWorked, userLogged)
}





const apiFetch = "../ressolves.JSON"
function finalresult(messageId, genderNeedAge, yearsWorked, userLogged) {
    fetch(apiFetch)
        .then(res => res.json())
        .then(data => {
            const messageData = data.find(element => element.id === messageId)

            if (messageData) {
                const message = messageData.message
                    .replace("${genderNeedAge}", genderNeedAge)
                    .replace("${remainingAge}", genderNeedAge - userLogged.age)
                    .replace("${remainingYears}", 30 - yearsWorked)
                    .replace("${userLogged.name}", userLogged.name)
                    .replace("${userLogged.lastName}", userLogged.lastName)

                Swal.fire({
                    title: messageData.name,
                    text: message,
                    imageUrl: messageData.img,
                    imageWidth: 400,
                    imageHeight: 200,
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Mensaje no encontrado',
                })
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON', error)
        })
}


calculatorForm.addEventListener("submit", handleCalculator)