class User < ApplicationRecord
    validates :first_name, :last_name, :email, presence: true

    has_many :businesses, 
        class_name: 'Business', 
        foreign_key: :user_id, 
        dependent: :destroy

    after_initialize :ensure_session_token

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email)
        user = User.find_by(email: email) 
        return user unless user.nil? 
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private 

    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end


end
