# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# clean tables
User.destroy_all 
Ticket.destroy_all
TicketType.destroy_all 
Status.destroy_all
Note.destroy_all 
DryCleaningItem.destroy_all
DeliveryMethod.destroy_all 
Customer.destroy_all 
Business.destroy_all 
BusinessType.destroy_all 

# default user
user = User.new(first_name: "Omar", last_name: "Torres", email: "01omartorres@gmail.com")
user.save
# business types
business_type_1 = BusinessType.new(type_name: "Laundromat", description: "an establishment with washing machines and dryers offering wash & fold services.")
business_type_2 = BusinessType.new(type_name: "Dry Cleaners", description: "an establishment offering dry cleaning services.")
business_type_3 = BusinessType.new(type_name: "Hybrid", description: "an establishment offering both wash & fold and dry cleaning services.")
business_type_1.save 
business_type_2.save 
business_type_3.save
# default businesses
business_1 = Business.new(name:"Your Cleaners", 
                user_id: user.id, 
                business_type_id: business_type_1.id,
                latitude: 40.7468686,
                longitude: -73.8820543, 
                zip_code: "11373", 
                street_address: "40-21 Hampton Street",
                city: "Elmhurst", 
                state: "NY", 
                price_per_pound: "1.20")

business_2 = Business.new(name: "Their Cleaners",
                user_id: user.id, 
                business_type_id: business_type_2.id, 
                latitude: 40.75113669999999, 
                longitude: -73.87271770000001, 
                zip_code: "11372",
                street_address: "94-13 37th ave",
                city: "Jackson Heights", 
                state: "NY"
                )

business_2 = Business.new(name: "Our Cleaners",
                user_id: user.id, 
                business_type_id: business_type_3.id, 
                latitude: 40.7489742,
                longitude: -73.89048630000002, 
                zip_code: "11372", 
                street_address: "75-12 37th ave",
                city: "Jackson Height",
                state: "NY",
                price_per_pound: "1.10"
                )

business_1.save
business_2.save
busienss_3.save
# delivery methods
DeliveryMethod.create(method_name: "Pick-up")
DeliveryMethod.create(method_name: "Drop-off")

# statuses
Status.create(status_name: "Unfulfilled", status_description: "Contents have not been delivered to customer.")
Status.create(status_name: "Notified", status_description: "Contents are ready for pick up, and customer has been notified.")
Status.create(status_name: "Fulfilled", status_description: "Contents have been delivered to customer.")

# ticket types
TicketType.create(type_name: "Laundry Bag")
TicketType.create(type_name: "Dry Cleaning")
TicketType.create(type_name: "Dry Cleaning + Laundry Bag")

# tickets 
Ticket.create(business_id: )


# change zipcode to string for business table
# add city & state column for business table

