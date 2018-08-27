# https://gist.github.com/kasun-maldeni/ce4fb1d81648057fd6ccdf0079d6d4a9
def seriesSum(n)
    series = '1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16'
    return '0.00' if n == 0
    num_arr =series.split(' + ').slice(1,n-1)
    total = 0
    sum = num_arr.map do |num|
        a = num.split('/')
        total += a[0].to_f/a[1].to_f
    end
    sprintf('%.2f', total+1)

end

p seriesSum 0
p seriesSum 2
p seriesSum 5


def sum(n)
    series = '1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16'
    arr = series.split("/").map{|a|a.split(" ")[0]}.slice(0,n)
    total = arr.inject(0){|add,x| add + 1/x.to_f }
    sprintf('%.2f', total)
end
p sum 0
p sum 2
p sum 5

