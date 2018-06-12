json.set! business.id do 
    json.extract! business, 
        :name, 
        :street_address, 
        :city, 
        :zip_code, 
        :state, 
        :latitude, 
        :longitude, 
        :price_per_pound
    json.owner_first_name business.owner.first_name 
    json.owner_last_name business.owner.last_name
end