def get_squares arr
    new_arr =[]
    arr.each do |num|
        if (num ** 0.5) % 1 == 0
            new_arr.push num
        end
    end
    new_arr.sort!.uniq!
end
p get_squares ([4, 1, 16, 1, 10, 35, 22])


# def get_square arr
#     arr.each do |num|
#         if (num ** 0.5) % 1 != 0
#             arr.delete num
#             p arr
#         end
#     end
#     arr.sort!.uniq!
# end
# p get_square ([4, 1, 16, 1, 10, 35, 22])

# [4, 1, 16, 1, 35, 22]
# [4, 1, 16, 1, 35]
# [1, 4, 16, 35]