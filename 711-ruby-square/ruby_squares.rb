def get_squares_one arr
    new_arr =[]
    arr.each do |num|
        if (num ** 0.5) % 1 == 0
            new_arr.push num
        end
    end
    new_arr.sort!.uniq!
end
p get_squares_one ([4, 1, 16, 1, 10, 35, 22])


def get_squares_two arr
    new_arr = arr.select {|num| (num ** 0.5) % 1 == 0}
    new_arr.sort!.uniq!
end
p get_squares_two ([4, 1, 16, 1, 10, 35, 22])

def get_squares_three arr
    arr.select {|num| num ** 0.5 % 1 == 0}.sort!.uniq!
end
p get_squares_three [4, 1, 16, 1, 10, 35, 22]