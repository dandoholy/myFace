class Api::PostsController < ApplicationController
  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render '/api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render '/api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def index
    @posts = Posts.new(Post.where("author_id = ? OR wall_id = ?", current_user.id, current_user.profile.id))
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: ["Post not found!"], status: 404
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :privacy, :wall_id)
  end
end
