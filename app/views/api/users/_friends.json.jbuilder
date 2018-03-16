@users.each do |u|
  json.set! u.id do
    json.partial! '/api/users/user_info.json.jbuilder', user: u
    json.friends do
      u.friends.each do |fr|
        json.partial! 'api/users/user_info.json.jbuilder', user: fr
      end
    end
  end
end
