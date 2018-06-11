class DryCleaningItem < ApplicationRecord 
    validates :item_name,
              :business_id, 
              :business_user_id, 
              presence: true 
end