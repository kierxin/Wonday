class ApplicationController < ActionController::Base

    helper_method :current_user, :current_board, :logged_in?

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def current_board
        return nil unless session[:session_token]
        @current_board ||= Board.find_by(id: current_user.latest_board)
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
