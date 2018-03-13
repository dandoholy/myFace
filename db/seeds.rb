# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all
Post.destroy_all
Photo.destroy_all
Comment.destroy_all

Photo.create!(image: "http://s3.amazonaws.com/myface-development/photos/images/000/000/003/original/defaultcover.jpg?1520975647")
Photo.create!(image: "http://s3.amazonaws.com/myface-development/photos/images/000/000/004/original/defaultphotomale.jpg?1520975671")

User.create!(email: 'guest@demo.com', password: 'starwars', first_name: 'guest', last_name: 'demo', gender: 'male', birthday: '1970-02-07')
User.create!(email: 'grace@cutie.pie', password: 'starwars', first_name: 'Grace', last_name: 'Korn', gender: 'female', birthday: '1990-03-08')
User.create!(email: 'dan@sky.net', password: 'starwars', first_name: 'Dan', last_name: 'Crabs', gender: 'male', birthday: '1991-09-16')
User.create!(email: 'zed@ninjas.com', password: 'starwars', first_name: 'Zed', last_name: 'Nope', gender: 'male', birthday: '1980-08-13')
