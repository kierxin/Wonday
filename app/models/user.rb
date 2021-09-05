class User < ApplicationRecord

    validates :password_digest, presence: true
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

end