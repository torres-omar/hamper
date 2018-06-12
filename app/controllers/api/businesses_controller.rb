class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.where("user_id = ?", params[:user_id])
        render 'api/businesses/index'
    end 

    def create
        @business = Business.new(business_params)
        @business.user_id = params[:user_id]
        if @business.save 
            render 'api/businesses/show'
        else 
            render json: @business.errors.messages, status: 400
        end 
    end 

    def show 
        @business = Business.includes(:owner, :business_type).find(params[:id])
        render 'api/businesses/show'
    end

    def search 
        @businesses = Business.where("user_id = ?", params[:user_id]).name_search(params[:q])
        render 'api/businesses/index'
    end

    private 

    def business_params
        params.require(:business).permit(
            :name, 
            :business_type_id, 
            :latitude, 
            :street_address, 
            :price_per_pound, 
            :zip_code, 
            :city, 
            :state, 
            :longitude
        )
    end
end
