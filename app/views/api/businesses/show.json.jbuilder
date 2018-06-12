json.extract! @business, 
              :name, 
              :user_id,
              :business_type_id, 
              :latitude,
              :longitude,
              :street_address, 
              :price_per_pound,
              :zip_code, 
              :city, 
              :state
json.owner_first_name @business.owner.first_name 
json.owner_last_name @business.owner.last_name 
json.business_type @business.business_type.type_name