cards = [
    {:card1 => {:name => 'Pikachu', :attack=>	40}},
    {:card2 => {:name => 'Rattata', :attack=>	20}},
    {:card3 => {:name => 'Pidgeot', :attack=>	60}},
    {:card4 => {:name => 'Alakazam', :attack=>	80}},
    {:card5 => {:name => 'Butterfree', :attack=>	30}},
    {:card6 => {:name => 'Gengar', :attack=>	30}},
    {:card7 => {:name => 'Moltres', :attack=>	100}},
    {:card8 => {:name => 'Vulpix', :attack=>	40}},
    {:card9 => {:name => 'Blastoise', :attack=>	80}},
    {:card10 => {:name => 'Hitmonchan', :attack=>	50}}
]

pile_one = cards.sample(3)
cards.reject!{|x| pile_one.include?x}
pile_two = cards.sample(3)
cards.reject!{|x| pile_two.include?x}
pile_three = cards.sample(3)
cards.reject!{|x| pile_three.include?x}
pile_four = cards

cards_piles = [pile_one, pile_two, pile_three, pile_four]

# display the back of cards 
cards_piles.each do |pile|
    puts "pile " + (cards_piles.index(pile) + 1).to_s
    pile.each{|card|p card.keys}
end

players = {
    :alfred => [],
    :peter => []
}
# alfred pick first
alfred_pick = cards_piles[rand(3)]
players[:alfred] << alfred_pick
cards_piles.delete(alfred_pick)

# peter pick
peter_pick= cards_piles[rand(2)]
players[:peter] << peter_pick
cards_piles.delete(peter_pick)

# alfred wins 7 out of 10 times
winner_number = rand(10)
if winner_number < 7
    players[:alfred] << cards_piles.shift
    players[:peter] << cards_piles.shift
else
    players[:peter]<< cards_piles.shift
    players[:alfred] << cards_piles.shift
end

p players