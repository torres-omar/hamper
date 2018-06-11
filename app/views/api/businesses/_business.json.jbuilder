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
end