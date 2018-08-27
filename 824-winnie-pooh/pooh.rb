
class Jar
    def initialize
        @open = false
    end
    
    def toggle_lid
        @open = !@open
    end

    def open?
        !!@open
    end
end

jars =[]
open_jars =[]
100.times{ jars << Jar.new}

jars.each_with_index.map do |jar,index|
    round =1
    while round <= 100
        if (index + 1)%round == 0
            jar.toggle_lid
        end
        round += 1
    end
    open_jars << "#" + (index + 1).to_s if jar.open?
end

p open_jars
