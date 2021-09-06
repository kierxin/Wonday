class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token]);
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        redirect_to root_url unless logged_in?
    end

    def ensure_logged_out
        redirect_to root_url if logged_in? # TEMPORARY
    end

end
