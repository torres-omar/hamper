class DeliveryMethod < ApplicationRecord
    validates :method_name, presence: true
end
