class Allergies
    def initialize score
        @allergens = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen', 'cats']
        @index =[]
        get_index score
        @allergies = @index.sort!.map{|i|@allergens[i]}

    end

    def get_index score
        if score > 255
            @index = [*0..7]
        elsif score > 0
            i = [*0..7].select{|n|2**n > score/2}.min
            @index<<i
            score = score-2**i 
            return get_index score
        else
            return @index
        end
        @index.sort!
    end


    def allergic_to? allergen
        @allergies.include? allergen
    end

    def list
        @allergies 
    end
end







allergies = Allergies.new(34)
p allergies.list