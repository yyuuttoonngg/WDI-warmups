class Coffee
    def initialize(name,order,size,sugar_qty,*special)
        @name = name
        random_letter = ('A'..'Z').to_a.sample
        @name.gsub!(/^./,random_letter)
        @order = order
        @size = size
        @sugar_qty = sugar_qty
        @special = special
        @time1 = Time.now
        # random waiting time between 120-300 seconds
        @ran_waiting_time = rand(180)+120
    end

    def to_s
        if @sugar_qty > 1
            "#{@name}'s #{@order}, #{@size}, #{@sugar_qty} sugars"
        else
            "#{@name}'s #{@order}, #{@size}, #{@sugar_qty} sugar."
        end
    end

    def ready?
        @time2 = Time.now
        p @time2-@time1
        p @ran_waiting_time
        if (@time2 - @time1) > @ran_waiting_time 
            true
        else false
        end
    end

    def collected=(status)
        @collected = status
    end
end

