class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:show]

    def show
         render api_user_url(current_user)
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :full_name)
    end

end 