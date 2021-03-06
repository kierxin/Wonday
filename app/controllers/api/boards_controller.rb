class Api::BoardsController < ApplicationController

    def index
        @boards = current_user.boards
        render "/api/boards/index"
    end

    def show
        @user = current_user
        @board = Board.find_by(id: params[:id]) || Board.find_by(id: current_user.latest_board)
        @user.latest_board = @board.id
        @user.save!
        
        render "/api/boards/show"
    end

    def create
        @user = current_user

        @board = Board.new(board_params)
        @board.description = ""

        if @board.save
            @workspace = @board.workspace
            @user.latest_board = @board.id
            @user.save!

            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end

    end

    def update
        @board = Board.find_by(id: params[:id])

        if @board.update(board_params)
            @user = current_user
            @user.latest_board = @board.id
            @user.save!
            render "/api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])

        @workspace = Workspace.find(@board.workspace_id)
        if @workspace.boards.length > 1
            @board.destroy
            @boards = current_user.boards

            render "/api/boards/index"
        else 
            render json: ["Workspace must have at least one board"], status: 405
        end
    end

    private
    def board_params
        params.require(:board).permit(:name, :workspace_id, :description, columns_in_use: [], leaders: []) 
    end

end