class User < ApplicationRecord
   has_secure_password
   has_many :journeys
   validates :username, presence: true 
   validates :uniqueness,  {case_sensitive: false}
   validates :password, presence: true
end
