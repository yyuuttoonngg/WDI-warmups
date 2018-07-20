class Scrabble
    def self.score (str,bonus)
        arr =str.downcase.split("")
        sum = 0
    
        if bonus[:double_letter]
            if bonus[:double_letter].class == Integer && arr[bonus[:double_letter]] != nil
                @index_double = [bonus[:double_letter]]
            end
            if bonus[:double_letter].class == String && arr.include?(bonus[:double_letter])
                @index_double = arr.each_index.select{|i| arr[i] == bonus[:double_letter] }
            end
        end

        if bonus[:triple_letter]
            if bonus[:triple_letter].class == Integer && arr[bonus[:triple_letter]] != nil
                @index_triple = [bonus[:triple_letter]]
            end
            if bonus[:triple_letter].class == String && arr.include?(bonus[:tripletriple_letter])
                @index_triple = arr.each_index.select{|i| arr[i] == bonus[:triple_letter] }
            end
        end

        str.downcase.split("").each_with_index do |a,i|
            if a =~ /[aeioulnrst]/ then score= 1 
            elsif a =~ /[dg]/ then score= 2
            elsif a =~ /[bcmp]/ then score= 3
            elsif a =~ /[fhvwy]/ then score= 4
            elsif a =~ /[k]/ then score= 5
            elsif a =~ /[jx]/ then  score= 8
            elsif a =~ /[qz]/ then  score=10
            end

            if @index_double.include?(i) && @index_triple.include?(i) 
                weight = 6
            elsif @index_double.include?(i)
                weight = 2
            elsif @index_triple.include?(i)
                weight = 3
            else weight =1
            end
            sum += score * weight         
        end
        return sum
    end
end

p Scrabble.score('cabbage', {:double_letter => 'b',:triple_letter => 2})