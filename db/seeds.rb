# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all

User.create!(email: 'guest@demo.com', password: 'starwars', first_name: 'guest', last_name: 'demo', gender: 'male')
User.create!(email: 'grace@cutie.pie', password: 'starwars', first_name: 'Grace', last_name: 'Korn', gender: 'female')
User.create!(email: 'dan@sky.net', password: 'starwars', first_name: 'Dan', last_name: 'Crabs', gender: 'male')
User.create!(email: 'zed@ninjas.com', password: 'starwars', first_name: 'Zed', last_name: 'Nope', gender: 'male')
