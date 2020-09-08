class PetsController < ApplicationController

    def index
        pets = Pet.all
        render json: pets
    end

    def show
        pet = Pet.find_by(params[:id])
        render json: pet
    end

    def create
        debugger
        pet = Pet.create(pet_params)
        render json: pet
    end

    def update
        pet = Pet.find_by(params[:id])
        render json: pet
    end

    def destroy
        pet = Pet.find_by(params[:id])
        pet.destroy
    end

    private
    def pet_params
        params.require(:pet).permit(:name, :species, :breed, :age, :image_url, :bio, :available, :agency_id)
    end
end
