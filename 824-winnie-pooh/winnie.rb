arr = []
open_jar_number =[]
100.times{arr << 0}
i = 1
while i < 101 do
    arr.each_with_index do |a,index|
        if (index +1) % i == 0
            arr[index] = (a+1) % 2
        end
    end
    i += 1
end 
arr.each_with_index do |b,index|
    open_jar_number << ("#"+ (index+1).to_s) if b == 1
end

p open_jar_number