class User < ApplicationRecord

    attr_reader :password

    validates :password_digest, presence: true
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    def password=(pass)
        @password = pass
        self.password_digest = BCrypt::Password.create(pass)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.find_by_credentials(email, pass)
        user = User.find_by(email: email)

        if user && user.is_password?(pass)
            user
        else
            nil
        end
    end

    def is_password?(pass)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(pass)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end