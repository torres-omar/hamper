json.extract! ticket, 
                :id,
                :business_id, 
                :date_dropped_off, 
                :time_dropped_off,
                :date_fulfilled, 
                :time_fulfilled, 
                :bag_weight, 
                :grand_total, 
                :customer_id, 
                :status_id, 
                :ticket_type_id, 
                :delivery_method_id

json.customer_first_name ticket.customer.first_name
json.customer_last_name ticket.customer.last_name
