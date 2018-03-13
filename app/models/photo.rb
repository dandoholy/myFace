class Photo < ApplicationRecord
  has_attached_file :image,
    styles: {cover: "851x315>", profile: "168x168>", thumb: "40x40>", mini: "32x32>", icon: "24x24>"},
    default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_one :pp_profile,
    class_name: :Profile,
    foreign_key: :profile_pic_id
  has_one :bp_profile,
    class_name: :Profile,
    foreign_key: :banner_pic_id
end
