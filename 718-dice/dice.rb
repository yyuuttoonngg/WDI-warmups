# https://gist.github.com/kasun-maldeni/9f54de1a1dee4515c32ba335fb31e721

class Dice
    def self.roll(n = 1)
        @arr = []
        n.times do 
           @arr.push rand(1..6)
        end

        border = "-----------\n"
        zero = "|         |\n"
        one_top = "|       * |\n"
        one_middle = "|    *    |\n"
        one_bottom = "| *       |\n"
        two = "| *     * |\n"

        dice1 = border + zero + one_middle + zero + border
        dice2 = border + one_top + zero + one_bottom + border
        dice3 = border + one_top + one_middle + one_bottom + border
        dice4 = border + two + zero + two + border
        dice5 = border + two + one_middle + two + border
        dice6 = border + two + two + two + border

        @dice_arr = [dice1,dice2,dice3,dice4,dice5,dice6]
        @arr.each{|n| puts @dice_arr[n-1]}

        self   
    end

    def self.total
        sum = 0
        @arr.each {|a| sum += a }
        result = [@arr,sum]
    end
end

p Dice.roll(3).total

#monkey patching
# class Dice
#     def self.roll(n = 1)
#         arr = []
#         n.times do 
#            arr.push(1 + rand(6))
#         end
#         arr
#     end
# end

# class Array
#     def total
#         sum = 0
#         self.each {|a| sum += a }
#         result = [].push self
#         result.push sum
#         result
#     end
# end

# dicefaces
# '-----------'
# '|         |'
# '|    *    |'
# '|         |'
# '-----------'
# '-----------'
# '|       * |'
# '|         |'
# '| *       |'
# '-----------'
# '-----------'
# '|       * |'
# '|    *    |'
# '| *       |'
# '-----------'
# '-----------'
# '| *     * |'
# '|         |'
# '| *     * |'
# '-----------'
# '-----------'
# '| *     * |'
# '|    *    |'
# '| *     * |'
# '-----------'
# '-----------'
# '| *     * |'
# '| *     * |'
# '| *     * |'
# '-----------'



