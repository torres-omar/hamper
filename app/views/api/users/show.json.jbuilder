json.extract! @user, 
    :id, 
    :email, 
    :first_name, 
    :last_name

json.start_up_business_view @user.settings.start_up_business_id

