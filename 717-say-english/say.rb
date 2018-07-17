#https://gist.github.com/kasun-maldeni/5a452491fd938d0b920d607750658bb6
class Say
    def initialize number
        @number = number         
    end

    def in_english
        if @number.class != Integer
            "not a number"
        elsif !@number.between?(0,99)
            "Number must be between 0 and 99, inclusive."
        elsif @number.between?(11,19) ||@number == 0
            case @number
            when 0 then 'zero'
            when 11 then 'eleven'
            when 12 then 'tweleve' 
            when 13 then 'thirteen'
            when 14 then 'fourteen'
            when 15 then 'fifteen'
            when 16 then 'sixteen'
            when 17 then 'seventeen'
            when 18 then 'eighteen'
            when 19 then 'nineteen'
            end
        else 
            ones = @number % 10
            tens = (@number / 10).to_i
            ones_english = ['one','two','three','four','five','six','seven','eight','nine']
            tens_english =['twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
            if tens == 0
                ones_english[ones-1]
            elsif ones == 0 
                tens_english[tens-2]
            else
                tens_english[tens-2] + '-' + ones_english[ones-1]
            end
        end
    end
end

class Integer 
    def in_english 
       Say.new(self).in_english
    end  
end

# p Say.new(-1).in_english
# p Say.new(0).in_english
# p Say.new(7).in_english
# p Say.new(15).in_english
# p Say.new(24).in_english
# p Say.new(60).in_english
# p Say.new("cat").in_english

# p 1.in_english
# p 15.in_english
# p 61.in_english
# p 90.in_english

#other methods to get tens and ones
"21".chars
"21".split""
a,b ="21".split("").map(&:to_i)
a,b =21.divmod(10)
a,b #2,1 number