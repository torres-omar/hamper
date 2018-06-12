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
    include PgSearch 

    pg_search_scope :id_scope, 
                    :against => [:id], 
                    :using => {
                        :tsearch => {:prefix => true}
                    }

    pg_search_scope :global_scope, 
                     :associated_against => {
                         :customer => [:first_name, :last_name],
                         :ticket_type => [:type_name],
                         :status => [:status_name], 
                         :delivery_method => [:method_name]
                     },
                     :against => [:id],
                     :using => {
                         :tsearch => {:prefix => true}
                     }

    pg_search_scope :customer_name_scope, 
                     :associated_against => {
                         :customer => [:first_name, :last_name]
                     },
                     :using => {
                         :tsearch => {:prefix => true}
                     }

    

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
        
    belongs_to :delivery_method, 
        class_name: 'DeliveryMethod', 
        foreign_key: :delivery_method_id, 
        primary_key: :id
 
    has_one :note, 
        class_name: 'Note',
        foreign_key: :ticket_id 

    def self.search_by_global_scope(business_id, query)
        return Ticket.where("business_id = ?", business_id).global_scope(query)
    end

    def self.search_by_id_scope(business_id, query)
        return Ticket.where("business_id = ?", business_id).id_scope(query) 
    end

    def self.search_by_customer_scope(business_id, query)
        return Ticket.where("business_id = ?", business_id).customer_name_scope(query)
    end
end 