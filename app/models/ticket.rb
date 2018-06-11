class WeightValidator < ActiveModel::EachValidator
    # if ticket type involves a Laundry Bag, ensure that bag_wieght is not blank
    def validate_each(record, attribute, value) 
        unless TicketType.find(record.ticket_type_id).type_name == "Dry Cleaning"
            if record[attribute].blank?
                record.errors[attribute] << "bag weight can't be blank" 
            end   
        end
    end
end

class Ticket < ApplicationRecord
    validates :business_id, 
              :customer_id, 
              :status_id,
              :date_dropped_off, 
              :time_dropped_off, 
              :grand_total, 
              :ticket_type_id, 
              presence:true
    
    validates :bag_weight, weight: true
end 