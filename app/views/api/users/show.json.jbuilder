json.partial! '/api/users/user_info', user: @user

json.friends do
  @user.friends.each do |fr|
    json.partial! 'api/users/user_info', user: fr
  end
end

json.test do
  {}
end
