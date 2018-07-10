def danchat()
    talk_to_dan = gets.chomp
    while talk_to_dan != ''  
        if talk_to_dan.upcase == talk_to_dan
            puts "Woah, chill out!"    
        elsif talk_to_dan.end_with?(".")
            puts "Whatever."
        elsif talk_to_dan.downcase == "dan" 
            puts "Fine. Be that way!"
        else 
            puts "Sure"
        end
        talk_to_dan = gets.chomp
    end
end

def sP34k()
    new_str_arr=[]
    letter_arr=[]
    normal_talk = gets.chomp
    talk_arr = normal_talk.split(/([aeiou])/)
    talk_arr.each do |str|
        if  str.length ==1
            str.tr!('aeio','4310')
        else 
            index = 1
            while index < str.length
                str[index] = str[index].upcase!
                index +=2            
            end
        end
    end
    puts talk_arr.join

end

sP34k()
