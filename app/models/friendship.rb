class Friendship < ApplicationRecord
  validates :requester_id, :requested_id, :status, presence: true

  belongs_to :requester,
    class_name: :User
  belongs_to :requestee,
    class_name: :User

end
