class Api::GroupsController < ApplicationController

    def index
        @board = Board.find_by(id: params[:id])
        @groups = @board.groups
        render "/api/groups/index"
    end

    def show
        @group = Group.find_by(id: params[:id])
        render "/api/groups/show"
    end

    def create
        @group = Group.new(group_params)

        if @group.save
            render "/api/groups/show"
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find_by(id: params[:id])

        if @group.update(group_params)
            render "/api/groups/show"
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