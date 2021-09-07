class Board < ApplicationRecord

    validates :name, :workspace_id, presence: true

    

end