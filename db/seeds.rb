# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🏕 Seeding users..."
user1 = user.create(name: 'Caitlin', password: 'hello', email: 'Caitlin123@gmail.com')
user2 = user.create(name: 'Lizzie', password: 'yolo', email: 'Caitlin123@gmail.com')
user3 = user.create(name: 'Tom', password: 'supsup', email: 'Caitlin123@gmail.com')
user4 = user.create(name: 'Morgan', password: 'hello', email: 'Caitlin123@gmail.com')
user5 = user.create(name: 'Danny', password: 'hello', email: 'Caitlin123@gmail.com')
user6 = user.create(name: 'Johnny', password: 'hello', email: 'Caitlin123@gmail.com')
user7 = user.create(name: 'Amanda', password: 'hello', email: 'Caitlin123@gmail.com')
user8 = user.create(name: 'Billy', password: 'hello', email: 'Caitlin123@gmail.com')

puts "🏕 Seeding items..."
item1 = item.create(name: 'Archery', difficulty: 2)
item2 = item.create(name: 'Swimming', difficulty: 3)
item3 = item.create(name: 'Photography', difficulty: 2)
item4 = item.create(name: 'Arts & Crafts', difficulty: 5)
item5 = item.create(name: 'Kayaking', difficulty: 3)
item6 = item.create(name: 'Fencing', difficulty: 4)
item7 = item.create(name: 'Canoeing', difficulty: 3)
item8 = item.create(name: 'Windsurfing', difficulty: 5)

puts "🏕 Seeding purchases..."
purchase.create(user_id: user1.id, item_id: item2.id, time: 11)
purchase.create(user_id: user1.id, item_id: item1.id, time: 12)
purchase.create(user_id: user1.id, item_id: item4.id, time: 15)
purchase.create(user_id: user2.id, item_id: item2.id, time: 11)
purchase.create(user_id: user2.id, item_id: item1.id, time: 12)
purchase.create(user_id: user4.id, item_id: item8.id, time: 16)
purchase.create(user_id: user5.id, item_id: item7.id, time: 11)
purchase.create(user_id: user3.id, item_id: item4.id, time: 12)

