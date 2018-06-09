# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_09_184649) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.string "business_type_id", null: false
    t.decimal "longtitude", null: false
    t.decimal "latitude", null: false
    t.integer "zipcode", null: false
    t.string "street_address", null: false
    t.float "price_per_pound"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email_address", null: false
    t.string "phone_number", null: false
    t.string "street_address", null: false
    t.string "zip_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "customer_id", null: false
    t.integer "status_id", null: false
    t.date "date_dropped_off", null: false
    t.time "time_dropped_off", null: false
    t.date "date_fulfilled"
    t.time "time_filfilled"
    t.integer "note_id"
    t.float "bag_weight"
    t.float "grand_total", null: false
    t.integer "ticket_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "admin_first_name", null: false
    t.string "admin_last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
