class Board < ApplicationRecord

    belongs_to :workspace, optional: true
    has_many :users, through: :workspace

    validates :name, :workspace_id, :leaders, presence: true

    

end