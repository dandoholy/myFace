class Api::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render 'api/profiles/show'
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    @profile = Profile.find_by(user_id: params[:user_id])
    if @profile.update_attributes(profile_params)
      render 'api/profiles/show'
    else
      render json: {errors: @profile.errors.full_messages}, status: 422
    end
  end

  def show
    @profile = Profile.find_by(user_id: params[:id])
    render json: ['Profile not found.'], status: 404 unless @profile
  end

  private
  def profile_params
    params.require(:profile).permit(:id, :nickname, :address, :phone_number, :work, :college, :cover_pic, :profile_pic)
  end
end
