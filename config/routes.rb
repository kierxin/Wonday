Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do

    resources :boards, only: [:index, :show, :create, :update, :destroy] do
      resources :groups, only: [:index, :create]
    end

    resources :groups, only: [:show, :update, :destroy] do
      resources :tasks, only: [:index, :create]
    end

    resources :tasks, only: [:show, :update, :destroy]
    
    resources :users, only: [:index, :show, :update, :create]
    resource :session, only: [:create, :destroy]
    resources :workspaces, only: [:create, :update, :destroy]
  end
end
