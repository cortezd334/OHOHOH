class AgenciesController < ApplicationController
    def show
        agency = Agency.find_by(params[:id])
        render json: agency
    end
end
