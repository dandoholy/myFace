json.extract! user, :id
json.full_name user.full_name
json.pic user.profile.profile_pic.image.url(:profile)
json.miniPic user.profile.profile_pic.image.url(:mini)
json.iconPic user.profile.profile_pic.image.url(:icon)
json.name user.first_name.capitalize
