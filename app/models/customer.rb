class Customer < ApplicationRecord 
    validates :first_name, 
              :last_name, 
              :email_address,
              presence:true

    has_many :tickets, 
        class_name: 'Ticket',
        foreign_key: :customer_id, 
        dependent: :destroy
end