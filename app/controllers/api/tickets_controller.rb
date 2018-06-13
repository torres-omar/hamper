class Api::TicketsController < ApplicationController
    def index 
        @tickets = Ticket.where("business_id = ?", params[:business_id])
        render 'api/tickets/index'
    end 

    def create
        @ticket = Ticket.new(ticket_params)
        @ticket.business_id = params[:business_id]
        if @ticket.save
            render 'api/tickets/show'
        else 
            render json: {:errors => @ticket.errors.full_messages}
        end
    end 

    def show
        @ticket = Ticket.includes(:customer, :status, :ticket_type, :delivery_method, :note).find_by(id: params[:id])
        if @ticket 
            render 'api/tickets/show'
        else 
            render json: {:errors => ["No record found in db."]}
        end 
    end

    def search 
        @tickets = Ticket.search_by_global_scope(params[:business_id], params[:q])
        render 'api/tickets/index'
    end

    def id_search 
        @tickets = Ticket.search_by_id_scope(params[:business_id], params[:q])
        render 'api/tickets/index'
    end 

    def customer_search 
        @tickets = Ticket.search_by_customer_scope(params[:business_id], params[:q])
        render 'api/tickets/index'
    end

    def unfulfilled_page
    end

    private 

    def ticket_params 
        params.require(:ticket).permit(
            :customer_id, 
            :status_id, 
            :date_dropped_off, 
            :time_dropped_off, 
            :date_fulfilled, 
            :time_fulfilled, 
            :bag_weight, 
            :grand_total, 
            :ticket_type_id, 
            :delivery_method_id
        )
    end
end
