json.extract! profile, :nickname, :address, :phone_number, :work, :college, :profile_pic_url, :banner_pic_url
json.user do
  json.extract! profile.user, :first_name, :last_name, :birthday, :gender, :email
end
