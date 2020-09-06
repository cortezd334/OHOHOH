const collection = document.querySelector('#pet-collection')
const header = document.getElementById('pet-header')
const signup = document.getElementById('signup')
signup.addEventListener('click', newAccount)
const login = document.getElementById('login')
login.addEventListener('click', userLogin)

function fetchAgency() {
    fetch('http://localhost:3000/agencies/1')
    .then(res => res.json())
    .then(json => agencyInfo(json))
}

function fetchGetPets() {
    fetch('http://localhost:3000/pets')
    .then(resp => resp.json())
    .then(pets => pets.forEach(pet => appendPet(pet)))
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

    let {name,established, description} = agency

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
    // console.log(pet)
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