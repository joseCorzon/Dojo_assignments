# 1
for x in range(1, 151):
    print(x)

# 2
for x in range(5, 1001, 5):
    print(x)

# 3


def counting_dojo():
    for i in range(1, 101):
        if i % 5 == 0:
            print("Coding")
        if i % 10 == 0:
            print("Dojo")
        else:
            print(i)


counting_dojo()

# 4
Oddtotal = 0

for num in range(0, 500000):
    if(num % 2 != 0):
        Oddtotal = Oddtotal + num

print(Oddtotal)

# 5
for x in range(2018, 0, -4):
    print(x)

# 6
lowNum = 2
highNum = 9
mult = 3

for x in range(lowNum, highNum+1):
    if x % mult == 0:
        print(x)
