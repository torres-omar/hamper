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

ActiveRecord::Schema.define(version: 2018_06_11_142647) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_types", force: :cascade do |t|
    t.string "type_name", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.string "business_type_id", null: false
    t.decimal "latitude", null: false
    t.string "street_address", null: false
    t.float "price_per_pound"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "zip_code", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.decimal "longitude", null: false
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email_address", null: false
    t.string "phone_number"
    t.string "street_address"
    t.string "zip_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "apt_number"
    t.index ["email_address"], name: "index_customers_on_email_address", unique: true
  end

  create_table "delivery_methods", force: :cascade do |t|
    t.string "method_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dry_cleaning_items", force: :cascade do |t|
    t.string "item_name", null: false
    t.integer "business_id", null: false
    t.integer "business_user_id", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.integer "ticket_id", null: false
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statuses", force: :cascade do |t|
    t.string "status_name", null: false
    t.string "status_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ticket_types", force: :cascade do |t|
    t.string "type_name", null: false
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
    t.integer "delivery_method_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
