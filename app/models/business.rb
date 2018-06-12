class Business < ApplicationRecord 
    include PgSearch

    pg_search_scope :name_search, :against => [:name]

    validates :name,
              :user_id, 
              :business_type_id, 
              :longitude, 
              :latitude, 
              :zip_code, 
              :street_address, 
              presence:true 

    has_many :tickets, 
        class_name: 'Ticket', 
        foreign_key: 'business_id',
        dependent: :destroy

    belongs_to :owner, 
        class_name: 'User', 
        foreign_key: 'user_id'
end