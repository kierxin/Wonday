class Api::WorkspacesController < ApplicationController

    def create
        @user = current_user

        default_workspace = { leaders: [@user.id], name: "My Workspace" }

        @workspace = Workspace.new(default_workspace)

        if @workspace.save
            @user.workspace_id = @workspace.id
            @user.save

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
        params.require(:board).permit(:name, :leaders => []) 
    end

end