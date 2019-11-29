class CreateJourneys < ActiveRecord::Migration[6.0]
  def change
    create_table :journeys do |t|
      t.text :startpoint
      t.text :endpoint
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
