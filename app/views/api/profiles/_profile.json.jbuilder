json.extract! profile, :id, :user_id, :nickname, :address, :phone_number, :work, :college, :profile_pic_id, :banner_pic_id
json.user do
  json.extract! profile.user, :first_name, :last_name, :birthday, :gender, :email
  json.full_name profile.user.full_name
end
json.cover_pic profile.cover_pic.image.url(:cover)
json.profile_pic profile.profile_pic.image.url(:profile)
