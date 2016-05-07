class Comment < ActiveRecord::Base
  validates_presence_of :author
  validates_presence_of :text

  def liked
    self["liked"] == "t"
  end
end
