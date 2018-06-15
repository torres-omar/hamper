class Api::CustomersController < ApplicationController
    def index
        @customers = Customer.where("business_id = ?", params[:business_id])
        render 'api/customers/index'
    end 

    def create
        @customer = Customer.new(customer_params)
        if @customer.save 
            render 'api/customers/show'
        else 
            render json: {:errors => @customer.errors.full_messages}
        end 
    end 

    def show
        @customer = Customer.find_by(id: params[:id])
        if @customer
            render 'api/customers/show'
        else
            render json: {:errors => ["No record found in db."]}
        end
    end

    def search
        @customers = Customer.search_by_name_and_email(params[:business_id], params[:q])
        render 'api/customers/index'
    end

    private 

    def customer_params 
        params.require(:customer).permit(
            :first_name, 
            :last_name,
            :email_address, 
            :phone_number, 
            :street_address,
            :zip_code, 
            :apt_number, 
            :business_id
        )
    end
end
