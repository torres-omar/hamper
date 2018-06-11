class BusinessType < ApplicationRecord
    validates :type_name, :description, presence:true
end