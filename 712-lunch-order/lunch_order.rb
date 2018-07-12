# https://gist.github.com/kasun-maldeni/3ff70009c99feb615a717a9a4ba07b4d

def lunch_orders_string
    answer = "y"
    orders = {}  
        while answer == "y"
        puts "name for order"
        name = gets.chomp
        puts "what would you like to order"  
            if orders[name] == nil
            orders[name]=[].push(gets.chomp)
            else orders[name].push(gets.chomp)
            end
        puts "something else to add? y/n"
        answer = gets.chomp
        end
    orders.each do |name,food| 
        if food.length ==1
        puts "#{name} orderd #{food.last}" 
        else puts "#{name} orderd #{food[0..-2]*', '} & #{food.last}" 
        end
    end
end



def lunch_orders_symbol
    answer = "y"
    orders = {}  
        while answer == "y"
        puts "name for order"
        name = gets.chomp.to_sym
        puts "what would you like to order"  
            if orders[name] == nil
            orders[name]=[].push(gets.chomp)
            else orders[name].push(gets.chomp)
            end
        puts "something else to add? y/n"
        answer = gets.chomp
        end
    orders.each do |name,food| 
        if food.length ==1
        puts name.to_s + " orderd #{food.last}" 
        else puts name.to_s + " orderd #{food[0..-2]*', '} & #{food.last}" 
        end
    end
end
lunch_orders_symbol()

