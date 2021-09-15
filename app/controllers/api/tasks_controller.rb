class Api::TasksController < ApplicationController

    def index
        @group = Group.find_by(id: params[:group_id])
        @tasks = @group.tasks
        render "/api/tasks/index"
    end

    def show
        @task = Task.find_by(id: params[:id])
        render "/api/tasks/show"
    end

    def create
        @task = Task.new(task_params)

        if @task.save
            @group = Group.find_by(id: @task.group_id)
            @group.save!
            render "/api/tasks/show"
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @task = Task.find_by(id: params[:id])
        @group = Group.find_by(id: @task.group_id)

        if @task.update(task_params)
            render "/api/tasks/show"
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        @group = Group.find(@task.group_id)

        @task.destroy
        @tasks = Task.all.select { |task| task.group_id == @group.id }

        render "/api/tasks/index"
    end

    private
    def task_params
        params.require(:task).permit(:title, :group_id, :status)
    end
    
end