const users = []
document.getElementById("btn-add").addEventListener("click", addUser)


/**
 * CLASS CONSTRUCTOR FOR THE SINGLE USER OBJECT
 */
class User {
    constructor(userName, userAge) {
        this.name = userName // this.name is the object's key "name", userName will be the value
        this.age = userAge // this.age is the object's key "age", userAge will be the value
    }
}

/**
 * FUNCTION: CREATE NEW OBJECT, ADD IT TO THE ARRAY "users" AND RENDER THE ARRAY'S CONTENT
 */
function addUser() {
    const nameField = document.getElementById("input-name")
    const name = nameField.value
    const ageField = document.getElementById("input-age")
    const age = ageField.value

    if (name !== "" && age !== "") { // Condition: Input fields must not be empty
        const newUser = new User(name, age) // New object with the user's data is created
        users.push(newUser) // New object is added to the end of the 'users' array
        console.log(users) // Output of the array in the console
        renderUsers() // Render function to display the array's contents in the DOM is triggered
    } else {
        alert("Bitte fülle beide Felder aus")
    }

    // Empty the input fields
    nameField.value = ""
    ageField.value = ""
}

/**
 * FUNCTION: DISPLAY THE ARRAY'S CONTENTS IN THE DOM
 */
function renderUsers() {
    const list = document.getElementById("list") // the DOM's <ul> element
    list.innerHTML = "" // Empty the list's content to avoid the same array being rendered multiple times
    users.forEach(user => { // Itterate through the array
        const li = document.createElement("li") // create a <li> element for each entry in the array
        li.innerText = `${user.name}, ${user.age}` // Add the values of the object's keys 'name' and 'age' to the inner Text of the created <li>
        list.append(li) // Add the created <li> and it's text to the <ul>
    })
}