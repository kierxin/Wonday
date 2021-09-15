class Api::GroupsController < ApplicationController

    def index
        @board = Board.find_by(id: params[:board_id])
        @groups = @board.groups
        render "/api/groups/index"
    end

    def show
        @group = Group.find_by(id: params[:id])
        render "/api/groups/show"
    end

    def create
        # if !group_params
            available_colors = ["gold", "indigo", "green", "blue", "salmon", "brown", "gray"]
            idx = rand(7)

            default_group = {
                board_id: params[:board_id],
                color: available_colors[idx],
                title: "New Group"
            }
            @group = Group.new(default_group)
        # else
        #     @group = Group.new(group_params)
        # end

        if @group.save
            @board = Board.find_by(id: @group.board_id)
            @board.save!
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
        @group = Group.find_by(id: params[:id])
        @board = Board.find(@group.board_id)
            
        @group.destroy
        @groups = Group.all.select { |group| group.board_id == @board.id }

        render "/api/groups/index"
    end

    private
    def group_params
        params.require(:group).permit(:color, :title, :board_id)
    end

end