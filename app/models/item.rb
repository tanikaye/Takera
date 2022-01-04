class Item < ApplicationRecord
  has_many :purchases
  has_many :users, through: :purchases

  validates :name, presence: true

end
