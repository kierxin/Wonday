class Board < ApplicationRecord

    belongs_to :workspace, optional: true
    has_many :users, through: :workspace
    has_many :groups, dependent: :destroy

    validates :name, :workspace_id, :leaders, presence: true

    

end