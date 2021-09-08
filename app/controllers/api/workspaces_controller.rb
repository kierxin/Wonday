class Api::WorkspacesController < ApplicationController

    def new
        @user = current_user
        render "/api/workspaces/new"
    end

    def create
        @user = current_user
        @workspace = Workspace.new(workspace_params)
        
        if @workspace.save
            @board = @workspace.boards[0]
            render `/api/boards/#{@board}`
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private
    def workspace_params
        params.require(:workspace).permit(:leaders_ids)
    end

end