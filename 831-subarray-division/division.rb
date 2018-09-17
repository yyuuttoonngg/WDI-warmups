def solve(arr,num)
    n = arr.length
    newArr =[]
    while n>0
        newArr << arr.combination(n).to_a.map{|a|a.inject(:+)}
            n -= 1
    end
    newArr.flatten!
    counter = 0
    newArr.each{|b|counter += 1 if b%num == 0}
    counter >0 
end

p solve([1,2,3,4,5],8)
