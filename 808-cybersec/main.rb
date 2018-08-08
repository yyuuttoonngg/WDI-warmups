lines_arr =[]
File.open("file.txt").each do |line|
    lines_arr << line.chomp.split(",")
end
keys_arr = lines_arr.first.slice(1..-1)
# ["product", "cost per unit", "units"]


values_arr = lines_arr.slice(1..-1)
names_list = values_arr.map{|values| values.first}.uniq!
final = names_list.map do |a|
    arr_a =[]
    {a=>arr_a}
end


each_name = values_arr.map do |values|
    name = values.first 
    values.shift
    drug = Hash[keys_arr.zip(values)]
    final.each do |a|
        if a.keys[0] == name
            a.values[0].push drug
        end
    end 
end

puts final

