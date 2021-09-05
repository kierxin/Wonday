class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)
            redirect_to api_user_url(@user)
        else
            render json: ["Incorrect email or password"], status: 401
        end
    end

    def destroy
        logout!
        redirect_to root
    end

end