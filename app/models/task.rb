class Task < ApplicationRecord

    belongs_to :group

    possible_statuses = ["Done", "Working on it", "Stuck", nil]

    validates :title, :group_id, presence: true
    validates :title, length: { maximum: 500 }
    validates :status, inclusion: { in: possible_statuses }

end