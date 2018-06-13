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

business_3 = Business.new(name: "Our Cleaners",
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
business_3.save
# delivery methods
delivery_method_1 = DeliveryMethod.new(method_name: "Pick-up")
delivery_method_2 = DeliveryMethod.new(method_name: "Drop-off")
delivery_method_1.save 
delivery_method_2.save

# statuses
status_1 = Status.new(status_name: "Unfulfilled", status_description: "Contents have not been delivered to customer.")
status_2 = Status.new(status_name: "Notified", status_description: "Contents are ready for pick up, and customer has been notified.")
status_3 = Status.new(status_name: "Fulfilled", status_description: "Contents have been delivered to customer.")
status_1.save
status_2.save
status_3.save
# ticket types
ticket_type_1 = TicketType.new(type_name: "Laundry Bag")
ticket_type_2 = TicketType.new(type_name: "Dry Cleaning")
ticket_type_3 = TicketType.new(type_name: "Dry Cleaning + Laundry Bag")
ticket_type_1.save
ticket_type_2.save
ticket_type_3.save


# customers
customer_1 = Customer.new(first_name: "Erik",last_name: "Campos", email_address: "ecampos@gmail.com", business_id: business_1.id)
customer_2 = Customer.new(first_name: "Cesar",last_name: "Garcia", email_address: "cgarcia@gmail.com", business_id: business_1.id)
customer_3 = Customer.new(first_name: "Vinny",last_name: "Roca", email_address: "vroca@gmail.com", business_id: business_1.id)
customer_1.save 
customer_2.save 
customer_3.save 

# Tickets 
Ticket.create(business_id: business_1.id, 
              customer_id: customer_1.id, 
              delivery_method_id: delivery_method_1.id,
              status_id: status_1.id, 
              ticket_type_id: ticket_type_1.id, 
              date_dropped_off: Date.today, 
              time_dropped_off: Time.now,
              bag_weight: 45, 
              grand_total: 43.30)

Ticket.create(business_id: business_1.id, 
              customer_id: customer_2.id, 
              delivery_method_id: delivery_method_2.id,
              status_id: status_1.id, 
              ticket_type_id: ticket_type_3.id, 
              date_dropped_off: Date.today, 
              time_dropped_off: Time.now,
              bag_weight: 45, 
              grand_total: 43.30)   

Ticket.create(business_id: business_1.id, 
              customer_id: customer_3.id, 
              delivery_method_id: delivery_method_2.id,
              status_id: status_1.id, 
              ticket_type_id: ticket_type_3.id, 
              date_dropped_off: Date.today, 
              time_dropped_off: Time.now,
              bag_weight: 45, 
              grand_total: 43.30) 

# change zipcode to string for business table
# add city & state column for business table

