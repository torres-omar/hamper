class Business < ApplicationRecord 
    include PgSearch

    pg_search_scope :name_search, 
                    :against => [:name], 
                    :using => {
                        :tsearch => {:prefix => true}
                    }

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
        foreign_key: :business_id,
        dependent: :destroy

    has_many :customers, 
        class_name: 'Customer', 
        foreign_key: :business_id

    belongs_to :owner, 
        class_name: 'User', 
        foreign_key: :user_id
    
    belongs_to :business_type, 
        class_name: 'BusinessType', 
        foreign_key: :business_type_id
end