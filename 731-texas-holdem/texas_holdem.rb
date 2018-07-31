numbers = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
spades = []
hearts = []
clubs = []
diamonds = []
numbers.each do |number|
    spades.push (number + ' of Spades')
    hearts.push (number + ' of Hearts')
    clubs.push (number + ' of Clubs')
    diamonds.push (number + ' of Diamonds')
end

cards = spades + hearts + clubs + diamonds
original_cards = cards.clone

puts 'How many players(2-8) ?'
cpu_players = [*1..(gets.chomp.to_i - 1)].map{|cpu|'CPU ' + cpu.to_s + '  hand'}
players = cpu_players + ['Your hand']

cards.shuffle!

players_cards = players.map do |player|
    cards.pop
    { player => cards.pop(2) }
end

flop = cards.pop(3)
turn = cards.pop
river = cards.pop
community_cards =[{"Flop" => flop},{"Turn" => turn},{"River" =>river}]

# show each player's cards and community cards
game_board = players_cards + community_cards

# checkcard
community_cards.map{|b|b.values}
to_check = players_cards.map do |a|
   ( a.values + community_cards.map{|b|b.values}).flatten!
end


values = to_check.map do |player|
    player.map do |card|
        index = original_cards.index(card)
        
        value = {
            "num" => index%13, 
            "color" => (index/13).to_i
        } 
    end
end

winner = { 
    :index => 5,
    :winner_score => 0,
    :name =>''

}

 values.map.with_index do |value,i|
    score = 0
    value.each do |a|
        n = a["num"].to_f
        color = a["color"]
        if (value.select{|b|b=={"num"=>n+1, "color"=>color}}.length >0) && (value.select{|b|b=={"num"=>n+2, "color"=>color}}.length>0 ) && (value.select{|b|b=={"num"=>n-1, "color"=>color}}.length>0 ) && (value.select{|b|b=={"num"=>n-2, "color"=>color}}.length>0)
            if n+2 == 12 #royalflush
                score = 9
            else 
                if (n+2)/100+8 > score
                    score = (n+2)/100+8  #straightflush
                end
            end
        elsif value.select{|b|b["color"]==color}.length > 4 #flush
            if score < (n+2)/100 + 5
                score = (n+2)/100 + 5
            end
        elsif value.select{|b|b["num"]== n+1}.length!=0 && value.select{|b|b["num"]== n+2}.length!=0 && value.select{|b|b["num"]== n-1}.length!=0 && value.select{|b|b["num"]== n-2}.length!=0 #straight
            if score < (n+2)/100 + 4
                score = (n+2)/100 + 4
            end 
        elsif value.select{|b|b["num"] == n}.length == 4 # four
            if score < n/100 + 7
                score = n/100 + 7
            end
        elsif value.select{|b|b["num"] == n}.length == 3 
            other_cards = value.select{|b|b["num"] != n}
            other_cards.each do |card|
                if other_cards.select{|a|a["num"]==
                    card["num"]}.length>1 #fullhouse
                if score < 6+n/100
                    score =  6+n/100
                end 
                else
                    if score < n/100+3  # three
                        score < n/100+3
                    end
                end
            end
        elsif value.select{|b|b["num"] == n}.length == 2 
            other_cards = value.select{|b|b["num"] != n}
            other_cards.each do |card|
                if other_cards.select{|a|a["num"]==
                    card["num"]}.length>1 #twopairs
                if score < 2+n/100
                        score = 2+n/100
                end
                else
                    if score < n/100+1
                        score = n/100+1  # onepair
                    end 
                end
            end
        else
            if score < n/100
                score = n/100
            end
        end
    end
    if score > winner[:winner_score]
        winner[:winner_score]= score
        winner[:index] =i
    end
end

winner[:name ]= players[winner[:index]].slice(0..-7)
p winner