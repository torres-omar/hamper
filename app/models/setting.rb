class Setting < ApplicationRecord
    validates :user_id, :startup_business_id, presence:true 
    
    belongs_to :user, 
            class_name: 'User',
            foreign_key: :user_id            
end
