class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:email])
        # if user is found, login user and render show template/data for user 
        if @user 
            login(@user) 
            render 'api/users/show'
        else 
            render json: {:invalid_credentials => ["Invalid Credentials"]}, status: 401
        end 
    end 


    def destroy
        # calls the current_user method within ApplicationController
        # stores return value in @user
        @user = current_user 
        if @user
            logout! 
            render json: {} 
        else 
            render json: {:no_user => ["No user signed in"]}, status: 400
        end
    end
end
