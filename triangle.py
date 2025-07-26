import math
def Triangle():
  a= int(input("Enter a value of A:"))
  b=int(input("Enter a value of B:"))
  c=int(input("Enter a value of C:"))
  if((a+b)>c and (a+c)>b and (b+c)>a):
    s= (a+b+c)/2
    Area= math.sqrt(s*(s-a)*(s-b)*(s-c))
    print("The Area of Triangle is", Area) 
  else:
    print("Triangle Area Error!")
Triangle()
