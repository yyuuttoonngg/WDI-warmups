class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.text :species
      t.text :nickname
      t.integer :level

      t.timestamps
    end
  end
end
