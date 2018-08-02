def longest(a,b)
    (a+b).split("").sort().uniq.join("")
end
s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
p longest(s1,s2)