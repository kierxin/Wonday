class Api::UsersController < ApplicationController

    def index
        @user = current_user
        render "/api/users/show"
    end

    def show
        @user = User.find_by(id: params[:id])
        render "/api/users/show"
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

    def update
        @user = User.find_by(id: params[:id])

        if @user.update(user_params)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :full_name, :latest_board)
    end

end 