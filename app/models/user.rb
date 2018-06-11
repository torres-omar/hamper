class User < ApplicationRecord
    validates :first_name, :last_name, :email, presence: true

    has_many :businesses, 
        class_name: 'Business', 
        foreign_key: :user_id, 
        dependent: :destroy
end
