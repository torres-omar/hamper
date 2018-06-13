json.set! customer.id do 
    json.extract! customer, 
                  :first_name,
                  :last_name,
                  :business_id
end