class Api::Boards_Controller < ApplicationController

    def show
    end

    def show
    end

    def show
    end

    def show
    end

    def show
    end

    private
    def board_params
        params.require(:board).permit(:name)
    end

end