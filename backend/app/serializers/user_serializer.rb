class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :age, :email, :preference, :pets
  
  has_many :pets
end
