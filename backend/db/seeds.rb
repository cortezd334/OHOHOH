# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.delete_all
Agency.delete_all
User.delete_all


pet_name = ["Theodore", "Rusty", "Iggy", "Schmoodles", "Finn", "Ivy", "Goldie", "Dirty Harry", "Marshmello", "Gus"]

pet_age = [4, 3, 5, 7, 2, 1, 6]

pet_bio = ["I enjoy long walks along the beach. Just don't make me run, I'm not the working out type!", "Little mischievous mutt who won’t take no for an answer when it comes to balls! Dirty kitchen floor? No problem! With me anything that hits that floor will be gobbled up in no time flat.", "You won't need a gym membership with me! I will work you out! Get ready to be sore!", "Loves a good nap, secret snacks and cuddling up in finished laundry. Give me one good belly rub and I’m yours forever","I'm very loveable! You will fall head over heals for me...just don't leave me...please...I can't handle being away from you!", "I'm a fantastic palm reader...or should I say, paw reader", "Ball, did I hear ball?! Let's play fetch, got to catch them balls", "I need a partner! You see there is this other dog that's always following me...but every time I turn around I only catch a glimpse of its tail! It's driving me crazy! No matter how fast I run I can't catch him! I feel like running in circles! Adopt me so that together we can catch him!", "Love cuddling, great with kids, and have a lot of love to give", "You may not have notice but I love food! Don't leave food unattended, it may not be there when you come back. I'm always ready!", "Trifling mischievous little bitch, you leave your shoe out it’s mine. Food on the table? That's also mine. What I lack in manners I make up in undying love and affection."]

agency = Agency.create(name: 'OHOHOH', established: 2020, description: "Pet adoption counselors are responsible for facilitating the adoption of cats and dogs at animal shelters, working with shelter managers. ... These counselors must be able to assess the personalities and needs of animals and determine whether a potential human adopter or family of adopters is a good match.")

user1 = User.create(name: "Daniel", username:"dbpatnode", email:"dbp@gmail.com", preference: "dogs")
user2 = User.create(name: "Danira", username:"d", email: "d@gmail.com", preference: "monkeys")

pet1 = Pet.create(name:"Teddy", species: "Cat", breed: "Siamese", age: 3, image_url: "https://www.thesprucepets.com/thmb/JJx2lCGirUVUOMrByvNEe5Y6jSM=/1080x1080/smart/filters:no_upscale()/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg", bio: "My name is not deceiving, I love to cuddle and play. I'm a young energetic cat that is more like a dog.", available: true, agency_id: 1)


pet382= Pet.create(name:"Buttons", species:"Turtle", breed:"Snapping", age: 13, image_url: "https://cdn2.newsok.biz/cache/large960_blur-3a9332c94041a34cd88c40aae4c44283.jpg", bio: "Loves snapping and doing turtle stuff. Great with kids.", available: true, agency_id: 1)

pet382= Pet.create(name:"Fatty", species:"Turtle", breed:"Snapping", age: 13, image_url: "https://cdn2.newsok.biz/cache/large960_blur-3a9332c94041a34cd88c40aae4c44283.jpg", bio: "Loves snapping and doing turtle stuff. Great with kids.", available: false, agency_id: 1, user_id: 2)

url = "https://dog.ceo/api/breeds/image/random/10"
dog_images = RestClient::Request.execute(method: :get,
    url: "https://dog.ceo/api/breeds/image/random/10",
    headers:{
        'Content-Type': 'application/json'
  })
  response_json = JSON.parse(dog_images.body)
  response_json['message'].each do |image_url|
    possible_pet = Pet.find_or_create_by(image_url: image_url)
    if !possible_pet.valid?
      possible_pet.agency_id = Agency.first.id
      possible_pet.save
    end
    arr = image_url.split('/')
    possible_pet.breed = arr[4]
    possible_pet.name = pet_name.sample
    possible_pet.species = 'Dog'
    possible_pet.age = pet_age.sample
    possible_pet.bio = pet_bio.sample
    possible_pet.available = 'true'
    possible_pet.save
  end

  puts "all seeds are done. woot!"
