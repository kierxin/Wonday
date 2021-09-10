class Api::BoardsController < ApplicationController

    def show
        @user = current_user
        @board = Board.find_by(id: params[:id])
        if !@board
            @board = current_user.boards[0]
        end
        @workspace = @board.workspace
        render "/api/boards/show"
    end

    def create
        @user = current_user

        if !@user.boards
            default_board = {
                name: "New Board",
                leaders: [@user.id.to_i],
                workspace_id: @user.workspace_id
            }
            @board = Board.new(default_board)
        else 
            @board = Board.new(board_params)
        end

        if @board.save
            @user.save
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