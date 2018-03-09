class Post < ApplicationRecord
  validates :author_id, :body, :privacy, presence: true
  validates :privacy, inclusion: { in: [1,2,3] }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
  belongs_to :wall,
    class_name: :Profile,
    foreign_key: :wall_id,
    optional: true

end
