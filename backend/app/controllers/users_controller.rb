class UsersController < ApplicationController
    
    def show
        user = User.find_by(params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def update
        user = User.find_by(params[:id])
        render json: user
    end

    def delete
        user = User.find_by(params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:name, :username, :age, :email, :preference)
    end

end
