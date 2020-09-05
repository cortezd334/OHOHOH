class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.integer :age
      t.string :email
      t.string :preference

      t.timestamps
    end
  end
end
