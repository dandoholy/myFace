class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render 'api/photo/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end 
  end

  private
  def photo_params
    params.require(:photo).permit(:image)
  end
end
