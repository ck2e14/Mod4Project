Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # below, we need to limit the available routes when appropriate 
        resources :users
        resources :journeys
        post "/login", to: "users#login"
        post "/signup", to: "users#create"    
        get "/validate", to: "users#validate"
    end
  end
end

