class Profile < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
    foreign_key: :user_id
  belongs_to :profile_pic,
    class_name: :Photo,
    foreign_key: :profile_pic_id,
    optional: true
  belongs_to :banner_pic,
    class_name: :Photo,
    foreign_key: :banner_pic_id,
    optional: true
  has_many :posts,
    class_name: :posts,
    foreign_key: :wall_id

  def banner_pic=(image)
    debugger
    if self.banner_pic.id == Photo.first.id
      photo = Photo.create!(image: image)
      super(photo)
    else
      self.banner_pic.update!(image: image)
    end
    # check if bannerpic = default
    # update if so
    # create new photo and call super if not

  end

  def profile_pic=(image)
    # check if bannerpic = default
    # update if so
    # create new photo and call super if not
  end


end
