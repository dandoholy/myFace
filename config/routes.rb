Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :profiles, only: [:show, :create]
    resources :profiles, only: :update, param: :user_id
    resources :posts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :photos, only: [:create]
  end

  root 'static_pages#root'
end
