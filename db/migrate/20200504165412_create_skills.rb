class CreateSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :media
      t.string :description

      t.timestamps
    end
  end
end
