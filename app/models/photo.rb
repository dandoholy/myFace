class Photo < ApplicationRecord
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_one :pp_profile,
    class_name: :Profile,
    foreign_key: :profile_pic_id
  has_one :bp_profile,
    class_name: :Profile,
    foreign_key: :banner_pic_id
end
