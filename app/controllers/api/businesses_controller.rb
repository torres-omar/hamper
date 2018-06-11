class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.includes(:owner).where("user_id = ?", params[:user_id])
        render 'api/businesses/index'
    end 

    def create
    end 

end
