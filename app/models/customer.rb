class ContactInfo < ActiveModel::Validator
    def validate(record) 
        if record.email_address.blank? && record.phone_number.blank?
            record.errors[:base] << "Some form of contact information is needed. Email or phone number."
        end
    end
end

class Customer < ApplicationRecord
    include PgSearch
    include SendGrid

    pg_search_scope :name_scope, 
                    :against => [:first_name, :last_name],
                    :using => {
                        :tsearch => {:prefix => true}
                    }
    
    validates :first_name, 
              :last_name, 
              presence:true

    validates_with ContactInfo

    has_many :tickets, 
        class_name: 'Ticket',
        foreign_key: :customer_id, 
        dependent: :destroy

    belongs_to :business, 
        class_name: 'Business', 
        foreign_key: :business_id

    def self.search_by_name(business_id, query)
        return Customer.where("business_id = ?", business_id).name_scope(query)
    end

    def send_notification(ticket_id)
        from = Email.new(email: 'omar.torres@plated.com')
        to = Email.new(email: self.email_address)
        subject = 'FROM: Hamper - ready for pick up!'
        content = Content.new(type: 'text/plain', value: "Ticket ID: #{ticket_id}")
        mail = Mail.new(from, subject, to, content)
        # find out how to store API in environment variable
        # add api env variable
        response = sg.client.mail._('send').post(request_body: mail.to_json)
    end
end