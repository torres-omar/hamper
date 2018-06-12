class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    protect_from_forgery with: :null_session
    # helper methods available to views
    helper_method :current_user, :logged_in?

    private 

    def current_user
        return nil unless session[:session_token]
        # return @current_user if defined, else find user by session token
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user) 
        # create a session token for user and store in cookie
        session[:session_token] = user.reset_session_token!
        # store user argument in @current_user instance variable
        @current_user = user 
    end

    # modifying user object so, use bang (!) by convention
    def logout! 
        # change (reset) the current_user's session token 
        current_user.reset_session_token! 
        # set :session_token cookie to nil
        session[:session_token] = nil 
        # set @current_user instance variable to nil
        @current_user = nil 
    end

    def logged_in?
        !!current_user
    end

end
