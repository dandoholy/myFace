Rails.application.routes.draw do

  namespace :api do
    get 'profiles/create'
  end

  namespace :api do
    get 'profiles/update'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :profiles, only: [:create, :update]
  end

  root 'static_pages#root'
end
