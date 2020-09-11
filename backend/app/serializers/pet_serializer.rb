class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :breed, :age, :image_url, :bio, :available, :accept_adoption, :user

  # belongs_to :user
end
