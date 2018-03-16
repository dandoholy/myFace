module FriendableModel
  extend ActiveSupport::Concern

  included do
    # USER SENT REQUEST
    has_many :requested_friendships,
      foreign_key: :requester_id,
      class_name: :Friendship
    # USER WAS REQUESTED
    has_many :received_friendships,
      foreign_key: :requested_id,
      class_name: :Friendship

    # FRIENDS ACCEPTED BY USER
    has_many :accepted_friends,
      -> { where(friendships: { status: 1 })},
      through: :requested_friendships,
      source: :requestee
    # FRIENDS USER ACCEPTED REQUEST FROM
    has_many :received_friends,
      -> { where(friendships: { status: 1 })},
      through: :received_friendships,
      source: :requester
    # FRIENDS USER SENT REQUEST TO
    has_many :pending_friends,
      -> { where(friendships: { status: 0 })},
      through: :requested_friendships,
      source: :requestee
    # FRIENDS USER GOT REQUEST FROM
    has_many :requested_by_friends,
      -> { where(friendships: { status: 0 })},
      through: :received_friendships,
      source: :requester
    # FRIENDS USER GOT REJECTED BY
    has_many :rejected_by_friends,
      -> { where(friendships: { status: 2 })},
      through: :requested_friendships,
      source: :requestee
    # FRIENDS USER REJECTED REQUEST FROM
    has_many :rejected_friends,
      -> { where(friendships: { status: 2 })},
      through: :received_friendships,
      source: :requester
  end

  def friendships
    # requested_friendships | received_friendships
    Friendship.where(requester_id: self.id).or(Friendship.where(requested_id: self.id))
  end

  def friends
    # received_friends | accepted_friends
    User.joins(<<-SQL)
    INNER JOIN friendships ON requested_id = users.id OR requester_id = users.id
    SQL
    .where( <<-SQL, self_id: self.id)
    friendships.status = 1
    AND users.id != :self_id
    AND (requester_id = :self_id OR requested_id = :self_id)
    SQL
  end

  def pending
    # pending_friends | requested_friends
    User.joins(<<-SQL)
    INNER JOIN friendships ON requested_id = users.id OR requester_id = users.id
    SQL
    .where( <<-SQL, self_id: self.id)
    friendships.status = 0
    AND users.id != :self_id
    AND (requester_id = :self_id OR requested_id = :self_id)
    SQL
  end

  def friend_status(friend_id)
    friendships.where("requested_id = ? OR requester_id = ?", friend_id, friend_id)
  end

end
