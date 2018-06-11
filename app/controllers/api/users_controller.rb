class Api::UsersController < ApplicationController
    def index 
        @users = User.all
        render 'api/users/index'
    end 

    def show
        @user = User.find(params[:id])
        if @user
            render 'api/users/show'
        else 
            render json: {:no_user => "No user found"}, status: 400
        end 
    end
end
