Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :profiles, only: [:show, :create]
    resources :profiles, only: :update, param: :user_id
    resources :posts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :photos, only: [:create]
    # resources :friendships, only: [:create, :update, :destroy]

    post "users/:id/friendships", to: "users#create_friendship"
    patch "users/:id/friendships", to: "users#update_friendship"
    delete "users/:id/friendships", to: "users#destroy_friendship"
  end

  root 'static_pages#root'
end
