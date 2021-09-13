json.(user, :id, :email, :full_name, :latest_board)

json.workspace user.workspace

json.boards user.boards, :id, :name