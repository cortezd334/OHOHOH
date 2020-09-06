# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
    # binding.pry
    Pet.find_or_create_by(image_url: image_url)
  end
  # binding.pry
  puts "all seeds are done. woot!"
