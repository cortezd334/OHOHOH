class User < ApplicationRecord
    has_many :pets
    has_one :agency, through: :pets
end
