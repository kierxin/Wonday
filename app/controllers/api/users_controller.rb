class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:show]

    def show
        @user = User.find_by(id: params[:id])
        @workspace = Workspace.find_by(id: @user.workspace)
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

    private
    def user_params
        params.require(:user).permit(:email, :password, :full_name)
    end

end 