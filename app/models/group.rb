class Group < ApplicationModel

    belongs_to :board

    validates :color, :board_id, :title, presence: true
    validates :title, length: { maximum: 200 }
    validates :color, :inclusion: { in: %w(gold, indigo, green, blue, brown, gray, salmon) }

end