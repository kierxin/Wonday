Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do

    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:show, :create, :update, :destroy]
    resources :workspaces, only: [:create, :update, :destroy]
  end
end
