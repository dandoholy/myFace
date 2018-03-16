class Friendship < ApplicationRecord
  validates :requester_id, :requested_id, :status, presence: true
  validate :ensure_no_duplicates, on: :create

  STATUSES = ["pending", "accepted", "rejected"]

  belongs_to :requester,
    class_name: :User,
    foreign_key: :requester_id
  belongs_to :requestee,
    class_name: :User,
    foreign_key: :requested_id

  def self.find_by_user_ids(id1, id2)
    self.where(requester_id: id1, requested_id: id2).or(self.where(requester_id: id2, requested_id: id1))[0]
  end

  def accept
    self.update!(status: 1)
  end

  def reject
    self.update!(status: 2)
  end

  def ensure_no_duplicates
    if self.class.find_by_user_ids(self.requester_id, self.requested_id)
      errors.add(:friendship, "This friendship already exists!")
    end
  end

end
