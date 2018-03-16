module FriendableController
  extend ActiveSupport::Concern

  def create_friendship
    @friendship = Friendship.new(requester_id: current_user.id, requested_id: params[:id], status: 0)
    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update_friendship
    @friendship = Friendship.find_by_user_ids(current_user.id, params[:id])
    if @friendship.update_attributes(friendship_params)
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy_friendship
    @friendship = Friendship.find_by_user_ids(current_user.id, params[:id])
    if @friendship
      @friendship.destroy!
    else
      render json: { errors: "Friendship not found." }, status: 404
    end
  end

  def friendship_params
    params.require(:friendship).permit(:requester_id, :requested_id, :status)
  end

end
