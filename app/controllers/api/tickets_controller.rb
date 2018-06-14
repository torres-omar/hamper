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
        @tickets = Ticket.search_by_global_scope(params[:business_id], params[:q], params[:s])
        render 'api/tickets/index'
    end

    def id_search 
        @tickets = Ticket.search_by_id_scope(params[:business_id], params[:q], params[:s])
        render 'api/tickets/index'
    end 

    def customer_search 
        @tickets = Ticket.search_by_customer_scope(params[:business_id], params[:q], params[:s])
        render 'api/tickets/index'
    end

    def status_tickets
        page_number = Integer(params[:p])
        @tickets = Ticket.status_tickets_by_page_number(params[:business_id], page_number, params[:s])
        if @tickets
            render 'api/tickets/index'
        else
            render json: {:errors => ["Invalid parameters"]}, status: 422
        end
    end

    def notify_customer
        @ticket = Ticket.find_by(id: params[:ticket_id])
        if @ticket
            @ticket.change_status_to_notified!
            customer = Customer.find(@ticket.customer_id)
            customer.send_notification(ticket.id)
            render 'api/tickets/show'
        else
            render json: {:error => ['No record found']}, status: 422
        end 
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
            :delivery_method_id,
            :business_id, 
            :p
        )
    end
end
