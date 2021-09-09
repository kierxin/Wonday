class Api::WorkspacesController < ApplicationController

    def create
        puts "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1"
        puts "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1"
        puts "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1"
        puts "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1"
        @workspace = Workspace.new(workspace_params)

        if @workspace.save
            # render "api/boards/show"
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
        params.require(:board).permit(:name, :workspace_id, :leaders) 
    end

end