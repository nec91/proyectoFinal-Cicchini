export class User {
    constructor(user, password, name, lastName, age, gender, id) {
        this.user = user
        this.password = password
        this.name = name
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.id = id
    }
}

//usuarios predefinidos
const user1 = new User("omar42", "qwerty25", "Omar", "Perez", 85, "male", 1)
const user2 = new User("marta55", "qwerty26", "Marta", "Lopez", 70, "female", 2)
const user3 = new User("pedro44", "qwerty27", "Pedro", "Martinez", 55, "male", 3)
const user4 = new User("alma14", "qwerty25", "Alma", "Iglesias", 60, "female", 4)
const user5 = new User("belen43", "qwerty28", "Belen", "Coleccia", 59, "female", 5)
const user6 = new User("Julio85", "qwerty29", "Julio", "Rodriguez", 57, "male", 6)
const user7 = new User("sandra77", "qwerty26", "Sandra", "Krivich", 52, "female", 7)



//funcion para que solo se carguen los usuarios preseteados una vez, ya que a falta de una DB robusta, voy a usar al LocalStorage

function configLocalStorage() {

    if (!localStorage.getItem("userStarted")) {
        const userDB = [user1, user2, user3, user4, user5, user6, user7]
        localStorage.setItem("userDB", JSON.stringify(userDB))
        localStorage.setItem("userStarted", "true")
    }
}

configLocalStorage()