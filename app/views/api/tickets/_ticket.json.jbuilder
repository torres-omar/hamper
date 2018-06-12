json.set! ticket.id do 
    json.extract! ticket, 
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
end