let addPet = false
const collection = document.querySelector('#pet-collection')
const header = document.getElementById('pet-header')
const newPetForm = document.querySelector('.add-pet-form')

document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#new-pet-btn")
    const petFormContainer = document.querySelector(".container")
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addPet = !addPet
      if (addPet) {
        petFormContainer.style.display = "block"
      } else {
        petFormContainer.style.display = "none"
      }
    })
  })

  newPetForm.addEventListener('submit', (e) => appendPet(e))


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

function fetchUser(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => json.forEach(user => renderUserProfile(user)))
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
    console.log(pet)
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

function newPetForm {
    collection.innerHTML =
    `<form class="add-pet-form">
    <h3>Add a pet for adoption</h3> 

    <input
        type="text"
        name="name"
        value=""
        placeholder="Enter pet's name..."
        class="input-text"
        />
        <br />
        <input
        type="text"
        name="image"
        value=""
        placeholder="Enter pets's image URL..."
        class="input-text"
        />
        <br />
        <input
        type="text"
        name="species"
        value=""
        placeholder="Enter species..."
        class="input-text"
        />
        <br />
        <input
        type="integer"
        name="age"
        value=""
        placeholder="Enter age..."
        class="input-text"
        />
        <br />
        <input
        type="text"
        name="bio"
        value=""
        placeholder="Enter pet description..."
        class="input-text"
        />
        <br />

        <input
        type="submit"
        name="submit"
        value="Add Pet to Adoption List"
        class="submit"
        />
    </form> 
    </div> 
    <p style="text-align:center">
    <button id="new-pet-btn">Add Pet For adoption</button>
    </p>`
}

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
// let newPetName = 

    fetch('http://localhost:3000/pets', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(newPetInfo)
    })
    .then(resp => resp.json())
    .then(pet => {appendPet(pet)})
}
addNewPet()
fetchAgency()
fetchGetPets()
fetchUser()