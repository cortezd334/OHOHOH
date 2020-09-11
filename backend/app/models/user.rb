class User < ApplicationRecord
    has_many :pets
    has_one :agency, through: :pets

    validates :username, presence: true
    validates :username, uniqueness: true
end
