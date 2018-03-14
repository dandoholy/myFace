class Profile < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
    foreign_key: :user_id
  belongs_to :profile_pic,
    class_name: :Photo,
    foreign_key: :profile_pic_id,
    optional: true
  belongs_to :cover_pic,
    class_name: :Photo,
    foreign_key: :banner_pic_id,
    optional: true
  has_many :posts,
    class_name: :posts,
    foreign_key: :wall_id

  def cover_pic=(image)
    if self.cover_pic.id == Photo.find_by(image_file_name: "defaultcover.jpg").id
      photo = Photo.create!(image: image)
      super(photo)
    else
      self.cover_pic.update!(image: image)
    end
  end

  def profile_pic=(image)
    if self.profile_pic.id == Photo.find_by(image_file_name: "defaultphotomale.jpg").id
      photo = Photo.create!(image: image)
      super(photo)
    else
      self.profile_pic.update!(image: image)
    end
  end


end

Photo.where()
