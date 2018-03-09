Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :profiles, only: [:show, :create, :update]
    resources :posts, except: [:new, :edit]
  end

  root 'static_pages#root'
end
