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
    @profile = User.find(params[:id]).profile
    if @profile.update_attributes(profile_params)
      render 'api/profiles/show'
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  private
  def profile_params
    params.require(:profile).permit(:nickname, :address, :phone_number, :work. :college)
  end
end
