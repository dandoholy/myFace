json.partial! '/api/users/user_info.json.jbuilder', user: @user

# json.friends do
#   @user.friends.each do |fr|
#     json.partial! 'api/users/user_info.json.jbuilder', user: fr
#   end
# end
