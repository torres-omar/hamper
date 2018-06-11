Rails.application.routes.draw do
  root 'static_pages#root'

=begin 
    Rails routes are matched in 
    the order they are specified, 
    so if you have a 'resources :photos' above 
    a 'get 'photos/poll'' the show action's route for the 
    resources line will be matched before the get line. 
    To fix this, move the get line above the resources 
    line so that it is matched first.
=end

  # The 'defaults: { format: :json }' option tells the controller to first look for a .json.jbuilder view rather than an html.erb view.
  namespace :api, defaults: {format: :json} do 
    # :users => name of controller, map to controller actions
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:show, :index] do 
      resources :businesses, only: [:index, :create]
    end

    resources :businesses, only: [:show]

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
