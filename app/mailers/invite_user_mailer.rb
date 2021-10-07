class InviteUserMailer < ApplicationMailer
    default from: 'kierxin@gmail.com'

    def invitation
        @email = params[:email]
        @url = 'https://wonday-clone-of-monday.herokuapp.com/#/signup'
        # @workspace = params[:workspaceId]
        mail(to: @email, subject:"You're invited to Wonday, Kira's full-stack project")
    end
end
