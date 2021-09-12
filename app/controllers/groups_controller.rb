class Api::GroupsController < ApplicationController

    def index
    end

    def show
        # @group = Group.find_by(id: params[:id])

    end

    def create
    end

    def update
    end

    def destroy
    end

    private
    def group_params
        params.require(:group).permit(:color, :title, :board_id)
    end

end