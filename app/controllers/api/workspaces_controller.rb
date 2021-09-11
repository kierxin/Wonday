class Api::WorkspacesController < ApplicationController

    def create
        @user = current_user

        @workspace = Workspace.new(workspace_params)

        if @workspace.save
            @user.update_attribute(:workspace_id => @workspace.id)

            render "/api/workspaces/show"
        else
            puts @workspace.errors.full_messages
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name, :leaders => []) 
    end

end