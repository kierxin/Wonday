Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do

    resources :boards, only: [:index, :show, :create, :update, :destroy] do
      resources :groups, only: [:index, :show, :create, :update, :destroy]
    end

    resources :users, only: [:show, :update, :create]
    resource :session, only: [:create, :destroy]
    resources :workspaces, only: [:create, :update, :destroy]
  end
end
