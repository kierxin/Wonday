json.(user, :id, :email, :full_name, :workspace, :latest_board)

json.boards user.boards, :id, :name