json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :email
json.full_name user.full_name
json.name user.first_name.capitalize
json.pic user.profile.profile_pic.image.url(:profile)
json.miniPic user.profile.profile_pic.image.url(:mini)
json.iconPic user.profile.profile_pic.image.url(:icon)
json.profileId user.profile.id
