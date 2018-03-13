# json.array! @posts do |post|
#   json.partial! '/api/posts/post', post: post
# end

json.posts do
  @posts.posts.each do |post|
    json.set! post.id do
      json.partial! '/api/posts/post', post: post
    end
  end
end

json.users do
  @posts.authors.each do |author|
    json.set! author.id do
      json.partial! '/api/users/user_info', user: author
    end
  end
end

json.comments do
  @posts.comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
