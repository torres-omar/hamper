class ContactInfo < ActiveModel::Validator
    def validate(record) 
        if record.email_address.blank? && record.phone_number.blank?
            record.errors[:base] << "Some form of contact information is needed. Email or phone number."
        end
    end
end

class Customer < ApplicationRecord 
    validates :first_name, 
              :last_name, 
              presence:true

    validates_with ContactInfo

    has_many :tickets, 
        class_name: 'Ticket',
        foreign_key: :customer_id, 
        dependent: :destroy
end