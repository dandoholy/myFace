class Posts
  attr_reader :posts

  def initialize(posts)
    @posts = posts
  end

  def comments
    @comments = Comment.where(post_id: @posts.pluck(:id))
  end

  def authors
    author_arr = @posts.pluck(:author_id).concat(self.comments.pluck(:author_id)).uniq
    @authors = User.where(id: author_arr)
  end
end
