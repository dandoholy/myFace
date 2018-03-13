class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
  belongs_to :post
end
