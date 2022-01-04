class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    user = find_user
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :password)
  end

  def find_user
    User.find(params[:id])
  end

end
