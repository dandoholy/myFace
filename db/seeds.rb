# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Profile.destroy_all
Post.destroy_all
Photo.destroy_all
Comment.destroy_all

Photo.create!(image: "https://s3.amazonaws.com/myface-seed/defaultcover.jpg")
Photo.create!(image: "https://s3.amazonaws.com/myface-seed/defaultphotomale.jpg")

guest = User.create!(email: 'guest@demo.com', password: 'starwars', first_name: 'guest', last_name: 'demo', gender: 'male', birthday: '1970-02-07')
grace = User.create!(email: 'grace@cutie.pie', password: 'starwars', first_name: 'Grace', last_name: 'Korn', gender: 'female', birthday: '1990-03-08')
dan = User.create!(email: 'dan@sky.net', password: 'starwars', first_name: 'Dan', last_name: 'Crabs', gender: 'male', birthday: '1991-09-16')
zed = User.create!(email: 'zed@ninjas.com', password: 'starwars', first_name: 'Zed', last_name: 'Nope', gender: 'male', birthday: '1980-08-13')
love = User.create!(email: '4love2me0@virgin.media', password: 'starwars', first_name: 'Laurette', last_name: 'Cougar', gender: 'female', birthday: '1992-09-23')
zion = User.create!(email: 'ziont@kpop.com', password: 'starwars', first_name: 'HaeSol', last_name: 'Kim', gender: 'male', birthday: '1989-04-13')
jay = User.create!(email: 'jaypark@kpop.com', password: 'starwars', first_name: 'Jay', last_name: 'Park', gender: 'male', birthday: '1987-04-25')
big = User.create!(email: 'bigbang@kpop.com', password: 'starwars', first_name: 'G', last_name: 'Dragon', gender: 'male', birthday: '1988-08-18')
tae = User.create!(email: 'taeyeon@kpop.com', password: 'starwars', first_name: 'Taeyeon', last_name: 'Kim', gender: 'female', birthday: '1989-03-09')
top = User.create!(email: 'top@kpop.com', password: 'starwars', first_name: 'Seunghyun', last_name: 'Choi', gender: 'male', birthday: '1987-11-04')
apu = User.create!(email: 'apu@simpsons.com', password: 'starwars', first_name: 'Apu', last_name: 'Nahasapeemapetilon', gender: 'male', birthday: '1974-02-12')
bart = User.create!(email: 'bart@simpsons.com', password: 'starwars', first_name: 'Bart', last_name: 'Simpson', gender: 'male', birthday: '1992-12-23')
skinner = User.create!(email: 'skinner@simpsons.com', password: 'starwars', first_name: 'Seymour', last_name: 'Skinner', gender: 'male', birthday: '1972-03-23')
superman = User.create!(email: 'superman@superhero.com', password: 'starwars', first_name: 'Clark', last_name: 'Kent', gender: 'male', birthday: '1938-06-23')
marge = User.create!(email: 'marge@simpsons.com', password: 'starwars', first_name: 'Marge', last_name: 'Simpson', gender: 'female', birthday: '1978-02-23')
batman = User.create!(email: 'batman@superhero.com', password: 'starwars', first_name: 'Bruce', last_name: 'Wayne', gender: 'male', birthday: '1939-05-23')
ww = User.create!(email: 'ww@superhero.com', password: 'starwars', first_name: 'Diana', last_name: 'Prince', gender: 'female', birthday: '1941-10-23')
hg = User.create!(email: 'hawkgirl@superhero.com', password: 'starwars', first_name: 'Shayera', last_name: 'Hall', gender: 'female', birthday: '1940-01-22')
hq = User.create!(email: 'harley@villain.com', password: 'starwars', first_name: 'Harley', last_name: 'Quinn', gender: 'female', birthday: '1993-09-23')
joker = User.create!(email: 'joker@villain.com', password: 'starwars', first_name: 'Mark', last_name: 'Hamill', gender: 'female', birthday: '1940-04-25')

guest.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/doodlecover.jpg")
grace.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/pexels-photo-416160.jpeg")
dan.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/pexels-photo-416160.jpeg")
zed.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/pexels-photo-416160.jpeg")
love.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/pexels-photo-416160.jpeg")
zion.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/firecover.jpg")
jay.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/firecover.jpg")
big.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/firecover.jpg")
tae.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/firecover.jpg")
top.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/firecover.jpg")
apu.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/doodlecover.jpg")
bart.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/doodlecover.jpg")
skinner.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/doodlecover.jpg")
superman.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/capecover.jpg")
marge.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/doodlecover.jpg")
batman.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/capecover.jpg")
ww.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/capecover.jpg")
hg.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/capecover.jpg")
hq.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/fly-cover.png")
joker.profile.update(cover_pic: "https://s3.amazonaws.com/myface-seed/cover/fly-cover.png")

guest.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/guest.jpg")
grace.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/grace.jpg")
dan.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/dan.jpg")
zed.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/zed.png")
love.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/love.jpg")
zion.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/ziont-xpn.jpg")
jay.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/03_jaypark_01_11-21.jpg")
big.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/g-dragon1.jpg")
tae.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/Taeyeon.jpg")
top.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/bigbang-t-o-p.jpg")
apu.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/apu.png")
bart.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/bart.jpeg")
skinner.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/Seymour_Skinner_(real).png")
superman.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/Superman-dcuo.jpg")
marge.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/marge.jpg")
batman.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/batman.jpg")
ww.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/wonderwoman-1280-9amembargo-1488818748850_1280w-920x584.jpg")
hg.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/hawkgirl.jpg")
hq.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/harley.jpg")
joker.profile.update(profile_pic: "https://s3.amazonaws.com/myface-seed/profile/mark.jpeg")

User.all.each do |u|
  4.times {Post.create!(author_id: u.id, body: Faker::Seinfeld.quote, privacy: 1)}
end

begin
Friendship.create!(requester_id: User.first.id, requested_id: User.second.id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.third.id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.fourth.id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.fifth.id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.last.id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.find_by(first_name: 'Mark').id, status: 1)
Friendship.create!(requester_id: User.first.id, requested_id: User.find_by(first_name: 'Bruce').id, status: 1)
Friendship.create!(requester_id: User.second.id, requested_id: User.find_by(first_name: "Diana").id, status: 0)
Friendship.create!(requester_id: User.second.id, requested_id: User.find_by(first_name: "Harley").id, status: 0)
Friendship.create!(requester_id: User.second.id, requested_id: User.find_by(first_name: "Clark").id, status: 2)
Friendship.create!(requester_id: User.second.id, requested_id: User.find_by(first_name: "Bart").id, status: 1)
Friendship.create!(requester_id: User.second.id, requested_id: User.find_by(first_name: "Seymour").id, status: 1)
Friendship.create!(requester_id: User.third.id, requested_id: User.find_by(first_name: "Apu").id, status: 0)
Friendship.create!(requester_id: User.third.id, requested_id: User.find_by(first_name: "Skinner").id, status: 0)
Friendship.create!(requester_id: User.third.id, requested_id: User.find_by(first_name: "Taeyeon").id, status: 1)
Friendship.create!(requester_id: User.third.id, requested_id: User.find_by(first_name: "G").id, status: 1)
rescue
end
# Friendship.create!(requester_id: , requested_id: , status: 0)
