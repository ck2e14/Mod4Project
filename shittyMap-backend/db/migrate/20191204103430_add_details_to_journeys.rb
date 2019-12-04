class AddDetailsToJourneys < ActiveRecord::Migration[6.0]
  def change
    add_column :journeys, :duration, :string
    add_column :journeys, :transit_mode, :string
    add_column :journeys, :distance, :string
  end
end
