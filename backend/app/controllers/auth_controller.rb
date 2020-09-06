class AuthController < ApplicationController
    def login #similar to our new action
    end
  
    def verify_username #similar to our post
      # byebug
      @user = User.find_by(username: params[:auth][:username])
      if @user 
        session[:user_id] = @user.id
        render json: user
      else 
        flash[:message] = "Please enter the right credentials"
        render json: agency
      end
    end
end