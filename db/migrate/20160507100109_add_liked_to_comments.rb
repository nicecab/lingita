class AddLikedToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :liked, :boolean, default: false
  end
end
