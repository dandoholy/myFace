json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :email
json.full_name user.full_name
json.name user.first_name.capitalize
json.pic user.profile.profile_pic.image.url(:profile)
json.miniPic user.profile.profile_pic.image.url(:mini)
json.iconPic user.profile.profile_pic.image.url(:icon)
json.profileId user.profile.id

json.accepted do
  user.friends.each do |friend|
    json.set! friend.id do
      json.partial! '/api/users/user_info.json.jbuilder', user: friend
    end
  end
end
json.pendingOut do
  user.pending_friends.each do |pending|
    json.set! pending.id do
      json.partial! '/api/users/user_info.json.jbuilder', user: pending
    end
  end
end
json.pendingIn do
  user.requested_by_friends.each do |pending|
    json.set! pending.id do
      json.partial! '/api/users/user_info.json.jbuilder', user: pending
    end
  end
  user.rejected_by_friends.each do |rejected|
    json.set! rejected.id do
      json.partial! '/api/users/user_info.json.jbuilder', user: rejected
    end
  end
end
json.rejectedIn do
  user.rejected_friends.each do |rejected|
    json.set! rejected.id do
      json.partial! '/api/users/user_info.json.jbuilder', user: rejected
    end
  end
end
