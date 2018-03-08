json.partial! '/api/users/user', user: @user
json.extract! @user, :address, :phone_number, :work, :college, :profile_pic_url, :banner_pic_url
