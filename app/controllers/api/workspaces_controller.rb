class Api::WorkspacesController < ApplicationController

    def create
        workspace = { leaders: [params[:userId].to_i] }
        @workspace = Workspace.new(workspace)

        if @workspace.save
            render "api/workspaces/create"
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
        params.require(:board).permit(:name, :workspace_id, :leaders => []) 
    end

end