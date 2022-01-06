class SessionsController < ApplicationController

  def create
    # byebug
    user = User.find_by(name: params[:name])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
    render json: {user: user, session: session }, status: :ok
    else
      render json: {error: "No Bueno"}, status: :unauthorized
    end
  end

  def destroy
    # byebug
    session.delete :user_id
    render json: {}, status: :no_content
  end

end
