class Note < ApplicationRecord
    validates :ticket_id, presence: true 
end