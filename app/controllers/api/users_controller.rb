class Api::UsersController < ApplicationController

    def show
         render api_users_url #TEMPORARY
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render api_users_url #TEMPORARY
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :full_name)
    end

end