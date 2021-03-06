class Allergies
    def initialize score
        @allergens = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen', 'cats']
        raise 'invalid score' unless score.class == Integer && score.between?(0,255)
            @indices =[]
            while score >=1
                i = get_index score
                @indices << i
                score = score - 2**i
                get_index score
            end
            @allergies = @indices.sort!.map{|i|@allergens[i]}
    end

    def get_index score
        [*0..(@allergens.length-1)].select{|n|2**n > score/2}.min
    end

    def allergic_to? allergen
        @allergies.include? allergen
    end

    def list
        @allergies 
    end

end
