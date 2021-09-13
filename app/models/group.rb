class Group < ApplicationRecord

    belongs_to :board

    available_colors = ["gold", "indigo", "green", "blue", "brown", "gray", "salmon"];

    validates :color, :board_id, :title, presence: true
    validates :title, length: { maximum: 200 }
    validates :color, inclusion: { in: available_colors }

end