json.extract! @ticket,
                :id,
                :business_id, 
                :date_dropped_off, 
                :time_dropped_off,
                :date_fulfilled, 
                :time_fulfilled, 
                :bag_weight, 
                :grand_total
json.customer_first_name @ticket.customer.first_name 
json.customer_last_name @ticket.customer.last_name 
json.note @ticket.note.text 
json.status @ticket.status.status_name
json.delivery_method @ticket.delivery_method.method_name
json.ticket_type @ticket.ticket_type.type_name
