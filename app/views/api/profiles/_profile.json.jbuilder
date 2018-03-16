json.extract! profile, :id, :user_id, :nickname, :address, :phone_number, :work, :college, :profile_pic_id, :banner_pic_id
json.user do
  json.set! profile.user.id do
    json.extract! profile.user, :id, :first_name, :last_name, :birthday, :gender, :email
    json.full_name profile.user.full_name
    json.friends do
      profile.user.friends.each do |friend|
        json.set! friend.id do
          json.partial! '/api/users/user_info', user: friend
        end
      end
    end
    # json.pending do
    #   profile.user.pending.each do |pending|
    #     json.set! pending.id do
    #       json.partial! '/api/users/user_info', user: pending
    #     end
    #   end
    # end
  end
end
json.cover_pic profile.cover_pic.image.url(:cover)
json.profile_pic profile.profile_pic.image.url(:profile)
