class Api::BoardsController < ApplicationController

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

    end

    def destroy
    end

    private
    def board_params
        params.require(:board).permit(:name, :workspace_id, :leaders_ids) 
    end

end