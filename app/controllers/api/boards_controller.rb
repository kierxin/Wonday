class Api::BoardsController < ApplicationController

    def show
        @user = current_user
        @board = Board.find(id: current_user.latest_board)
        @workspace = @board.workspace
        render "/api/boards/show"
    end

    def create
        @user = current_user

        @board = Board.new(board_params)

        if @board.save
            @workspace = @board.workspace
            @user = current_user
            @user.latest_board = @board.id
            @user.save!

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
        params.require(:board).permit(:name, :workspace_id, :leaders => []) 
    end

end