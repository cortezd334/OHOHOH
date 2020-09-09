class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.integer :age
      t.string :image_url
      t.text :bio
      t.boolean :available
      t.boolean :accept_adoption
      t.integer :agency_id
      t.integer :user_id

      t.timestamps
    end
  end
end
