class Board < ApplicationRecord

    validates :name, :workspace_id, :leaders_ids, presence: true

    

end