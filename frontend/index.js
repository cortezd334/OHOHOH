let addPet = false
const collection = document.querySelector('#pet-collection')
const header = document.getElementById('pet-header')
const signup = document.getElementById('signup')
signup.addEventListener('click', newAccount)
const login = document.getElementById('login')
login.addEventListener('click', userLogin)
const alogin = document.getElementById('agencylogin')
alogin.addEventListener('click', agencyLogin)
const petFormContainer = document.querySelector(".container")


function fetchAgency() {
    fetch('http://localhost:3000/agencies/1')
    .then(res => res.json())
    .then(json => agencyInfo(json))
}

function fetchGetPets() {
    fetch('http://localhost:3000/pets')
    .then(resp => resp.json())
    .then(pets => pets.forEach(pet => appendPet(pet)))
    // .then(pets => appendPet(pets), agencyLogin(pets))
}

function fetchUser(e){
    e.preventDefault()
    console.log(e)
    debugger
    if (e.target.username.value === User.username) {
        let id = User.id
    }
    //how can we access user's id?
    //preferably is there a way to access sessions
    fetch('http://localhost:3000/users/id')
    .then(res => res.json())
    .then(json => renderUserProfile(json))
    // .then(json => json.forEach(user => renderUserProfile(user)))
}
//will need to interpolate so that we can get current user

const agencyInfo = (agency) => {

    let {name, established, description} = agency

    let title = document.createElement('h1')
    title.textContent = `${name}`
    header.appendChild(title)

    // let div = document.createElement('div')
    collection.innerHTML = `
    <h2>${name}</h2>
    <h4><i>Open Hands Open Hearts Open Home</i></h4>
    <h5>Established ${established}</h5>
    <p>${description}</p>
    `
    // collection.appendChild(div)
}


const appendPet = (pet) => {

    let {name, species, breed, age, bio, image_url, available} = pet
    
    let avail = available ? "" : "Pending Adoption"

    let btn = document.createElement('button')
    btn.className = 'adopt-btn'
    if(available === true){
        btn.textContent = "Adopt Me!"
        collection.append(btn)
    }
    
    collection.innerHTML += 
        `<div class="card">
            <h2>${name}</h2>
            <h4 id="species">${species}</h4>
            <h4 id="breed"> ${breed}</h4>
            <p id="age"> ${age}</p>
            <p id="bio"> ${bio}</p>
            <img src=${image_url} class="pet-avatar" />
            <p id="available"> ${avail} </p>
        </div>`
}

const renderUserProfile = (user) => {

    const {name, age, email, username, preference} = user

    collection.innerHTML = `
    <div id='MyProfile'>
        <h2>${name}</h2>
        <label>Username:</label>
        <p>${username}</p>
        <label>Email Address:</label>
        <p>${email}</p>
        <label>Age:</label>
        <p>${age}</p>
        <label>Which pet would you prefer to adopt:</label>
        <p>${preference}</p>
    </div>
    `
}

function agencyLogin(){
//originally made button here to do the hide n seek, but page would auto refresh so it wouldn't persist on the screen
    // let newbtn = document.createElement('button') 
    // newbtn.id="new-pet-btn"
    // newbtn.textContent = 'Add Pet For Adoption'
    
    // petFormContainer.prepend(newbtn)

    collection.innerHTML = ''

    fetch('http://localhost:3000/pets')
    .then(resp => resp.json())
    .then(pets => pets.forEach(pet => agencyPage(pet)))
}

const agencyPage = (pet) => {

    let {name, species, breed, age, bio, image_url, available} = pet
//this should be the hide and seek function but would persist on the screen and once button was clicked, would disappear

    // const addBtn = document.querySelector("#new-pet-btn")
    // addBtn.addEventListener("click", () => {
    //   // hide & seek with the form
    //   addPet = !addPet
    //   if (addPet) {
    //     petFormContainer.style.display = "block"
    //   } else {
    //     petFormContainer.style.display = "none"
    //   }
    // })

    petFormContainer.innerHTML =
    `<form class="add-pet-form">
        <h3>Add a pet for adoption</h3> 
        <input type="text" name="name" value="" placeholder="Enter pet's name..." class="input-text"/>
        <br />
        <input type="text" name="image" value="" placeholder="Enter pet's image URL..." class="input-text"/>
        <br />
        <input type="text" name="species" value="" placeholder="Enter species..." class="input-text"/>
        <br />
        <input type="integer" name="age" value="" placeholder="Enter age..." class="input-text"/>
        <br />
        <input type="text" name="bio" value="" placeholder="Enter pet description..." class="input-text"/>
        <br />
        <input type="submit" name="submit" value="Add Pet to Adoption List" class="submit"/>
    </form> `
    
    collection.innerHTML += 
    `<div class="agency-card">
    <h2>${name}</h2>
    <h4 id="species">${species}</h4>
    <h4 id="breed"> ${breed}</h4>
    <p id="age"> ${age}</p>
    <p id="bio"> ${bio}</p>
    <img src=${image_url} class="pet-avatar" />
    <p id="available"></p>
    </div>`

    const newPetForm = document.querySelector('.add-pet-form')
    newPetForm.addEventListener('submit', addNewPet)

    //what info do we want to show on the agency side? Should style the cards differently so that it's obviously a different login
}
//need to make an actual login for agency

const addNewPet = (e) => {
    e.preventDefault()
// debugger
    newPetName = e.target.name.value
    newPetImage = e.target.image.value
    newPetSpecies = e.target.species.value
    newPetAge = e.target.age.value
    newPetBio = e.target.bio.value

    let newPetInfo = {
        name: newPetName,
        image: newPetImage,
        species: newPetSpecies,
        age: newPetAge,
        bio: newPetBio
        // available: true
    }

    fetch('http://localhost:3000/pets', { 
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(newPetInfo)
    })
    .then(resp => resp.json())
    .then(pet => {appendPet(pet)})
}
//when submitted, displays new pet in agency login but doesn't persist in either agency or user

fetchAgency()
fetchGetPets()
// fetchUser()

function newAccount() {
    collection.innerHTML =`
    <h2>Welcome to OHOHOH!</h2>
    <h4>Create an Account</h4>
    <form class='user-form'>
        <label>Name:</label>
        <input type='text' name='name' value='' placeholder='Enter Name Here' class='input-text'/>
        </br>
        <label>Username:</label>
        <input type='text' name='username' value='' placeholder='Enter Username Here' class='input-text'/>
        </br>
        <input type='submit' name='submit' value='Create Account'
        class='submit'/>
    </form>
        `
        // <label>Password:</label>
        // <input type='text' name='name' value='' placeholder='Create Password' class='input-text'/>
// add this to innerHTML when we add auth

//need to make a function call to render homepage
}

function userLogin(){
    collection.innerHTML =`
    <h2>Welcome to OHOHOH!</h2>
    <h4>Please Log In</h4>
    <form class='user-form'>
        <label>Username:</label>
        <input type='text' name='username' value='' placeholder='Enter Username Here' class='input-text'/>
        </br>
        <input type='submit' name='submit' value='Log In'
        class='submit'/>
    </form>
    `
        // <label>Password:</label>
        // <input type='text' name='name' value='' placeholder='Enter Password' class='input-text'/>
// add this to innerHTML when we add auth
// debugger
let form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', e => fetchUser(e))
}