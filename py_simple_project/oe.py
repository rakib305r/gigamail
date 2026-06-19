num= input("Enter your numbers:")
num_list= list(map(int, num.split()))

even= 0
odd= 0

for i in num_list:
    if i % 2 == 0:
        even += 1
    else:
        odd += 1

print("Even Numbers:", even)
print("Odd Numbers:", odd)