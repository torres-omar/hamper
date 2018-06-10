class Status < ApplicationRecord 
    validates :status_name, :status_description, presence:true
end