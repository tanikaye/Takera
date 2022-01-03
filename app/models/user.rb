class User < ApplicationRecord
  has_many :purchases
  has_many :items, through: purchases

  validates :has_secure_password

end
