class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :family_id, :created_at, :updated_at
  has_many :transactions
  has_many :categories
end
