class Board < ApplicationRecord

    belongs_to :workspace, optional: true
    has_many :users, through: :workspace
    has_many :groups, dependent: :destroy

    columns = ["status", "people", "deadline"]

    validates :name, :workspace_id, :leaders, :columns_in_use, presence: true
    validates :columns_in_use, inclusion: { in: columns }

end