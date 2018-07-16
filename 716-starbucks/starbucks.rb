require_relative 'coffee'


$all_coffees = []

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
c2 = Coffee.new('Kate', 'long black', 'medium', 0)
c3 = Coffee.new('Bob', 'cuppciono', 'large', 1,'whipped cream')
$all_coffees.push c1
$all_coffees.push c2
$all_coffees.push c3
c1.collected = true
p $all_coffees

def waiting
    uncollected = $all_coffees.select{|customer|customer.instance_variable_get(:@collected) !=true}
    uncollected.each{|customer|puts customer.instance_variable_get(:@name)}
end
waiting
