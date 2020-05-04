class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :type
      t.string :company
      t.string :location
      t.string :date
      t.string :description
      t.string :media

      t.timestamps
    end
  end
end
