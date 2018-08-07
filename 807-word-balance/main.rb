# https://gist.github.com/kasun-maldeni/bfc2d2caee02ace657fbd2b795f54c9e

def letter_weight(letter)
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.index(letter) + 1
end

def balance (word)
    word.upcase!
    balance_index = false
    balance_weight = false
    word.split("").each_with_index do |letter, index|
        if index >= 1 && index <= word.length - 2
            before_arr = word.split("").slice(0..index - 1)
            after_arr = word.split("").slice(index + 1..-1)
            before_total = 0
            after_total = 0
            before_arr.each_with_index{|x,i|before_total += letter_weight(x)*(before_arr.length - i)}
            after_arr.each_with_index{|y,j|after_total += letter_weight(y)*(j + 1)}
            if before_total == after_total                 
                balance_index = index
                balance_weight = before_total
            end
        end
    end
    if balance_index
        before_balance_letter = before = word.slice(0..balance_index-1)
        balance_letter = word[balance_index]
        after_balance_letter = word.slice(balance_index+1..-1)
        "#{before_balance_letter} #{balance_letter} #{after_balance_letter} - #{balance_weight}"
    else
        "#{word} DOSE NOT BALANCE"
    end
end

p balance("stead")
p balance ("CONSUBSTANTIATION")
p balance ("WRONGHEADED")
p balance ("UNINTELLIGIBILITY")
p balance ("SUPERGLUE")
p balance ("AcA")
p balance ("A")
p balance ("ab")