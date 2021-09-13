class Api::GroupsController < ApplicationController

    def index
        @board = @board = Board.find_by(id: params[:board_id])
        @groups = @board.groups
        render "/api/boards/groups/index"
    end

    def show
        @group = Group.find_by(id: params[:id])
        render "/api/boards/groups/show"
    end

    def create
        @group = Group.new(group_params)

        if @group.save
            @board = Board.find_by(id: @group.board_id)
            @board.save!
            render "/api/boards/groups/show"
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find_by(id: params[:id])

        if @group.update(group_params)
            render "/api/boards/groups/show"
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def destroy
    end

    private
    def group_params
        params.require(:group).permit(:color, :title, :board_id)
    end

end