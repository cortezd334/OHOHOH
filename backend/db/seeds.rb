# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
