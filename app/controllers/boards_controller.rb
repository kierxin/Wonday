class Api::Boards_Controller < ApplicationController

    def show
        @board = Board.find_by(id: params[:id])
        render "/api/boards/show"
    end

    def new
        render "/api/workspaces/new"
    end

    def create
        @board = Board.new(board_params)

        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        # @board = Board.find_by(id: params[:id])

    end

    def destroy
    end

    private
    def board_params
        params.require(:board).permit(:name, :workspace_id, :leaders_ids) 
            # prolly want to remove workspace_id ^
    end

end