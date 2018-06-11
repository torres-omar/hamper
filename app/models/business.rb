class Business < ApplicationRecord 
    validates :name,
              :user_id, 
              :business_type_id, 
              :longitude, 
              :latitude, 
              :zip_code, 
              :street_address, 
              presence:true 
end