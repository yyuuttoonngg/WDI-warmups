arr =[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5,5,-1]
arr_unique = arr.uniq 
letter_uniq = ''
arr_unique.map do |a|
    if arr.count{|x|x==a} % 2 == 1
        letter_uniq = a
    end 
end 
p letter_uniq