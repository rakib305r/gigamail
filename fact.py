def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
n = int(input("Enter a Positive Number:"))
if n < 0:
  print("You Enter a Negative Number so try again!")
  exit(0)
else:
   print("The Factorial of", n, "is:", factorial(n))
