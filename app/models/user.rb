class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_profile

  validates :password_digest, :session_token, :email, :first_name, :last_name, :birthday, :gender, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :gender, inclusion: { in: ["female", "male"] }

  has_one :profile,
    foreign_key: :user_id
  has_many :posts,
    foreign_key: :author_id
  has_many :comments,
    foreign_key: :author_id


  # USER SENT REQUEST
  has_many :requested_friendships,
    foreign_key: :requester_id,
    class_name: :Friendship
  # USER WAS REQUESTED
  has_many :received_friendships,
    foreign_key: :requestee_id,
    class_name: :Friendship

  # FRIENDS USER SENT REQUEST TO
  has_many :requested_friends,
    through: :requested_friendships,
    source: :requestee
  # FRIENDS USER GOT REQUEST FROM
  has_many :received_friends,
    through: :received_friendships,
    source: :requester

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    token = nil
    loop do
      token = SecureRandom.urlsafe_base64
      break unless User.exists?(session_token: token)
    end
    token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def create_profile
    Profile.create!(user_id: self.id, banner_pic_id: Photo.find_by(image_file_name: "defaultcover.jpg").id, profile_pic_id: Photo.find_by(image_file_name: "defaultphotomale.jpg").id)
  end

  def full_name
    self.first_name.capitalize + ' ' + self.last_name.capitalize
  end
end
