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

    belongs_to :business, 
        class_name: 'Business', 
        foreign_key: :business_id, 
        primary_key: :id 

    belongs_to :customer, 
        class_name: 'Customer', 
        foreign_key: :customer_id, 
        primary_key: :id
    
    belongs_to :status,
        class_name: 'Status',
        foreign_key: :status_id,
        primary_key: :id 
    
    belongs_to :ticket_type, 
        class_name: 'TicketType', 
        foreign_key: :ticket_type_id, 
        primary_key: :id 
end 