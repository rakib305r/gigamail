import math

class QuadraticEq:
    def __init__(self, a, b, c):
        d = (b * b) - (4 * a * c)
        if d < 0:
            print("Roots are imaginary!")
        else:
            x1 = (-b + math.sqrt(d)) / (2 * a)
            x2 = (-b - math.sqrt(d)) / (2 * a)
            print("x1 = %.2f" % x1, "x2 = %.2f" % x2)

a = int(input("A = "))
b = int(input("B = "))
c = int(input("C = "))

qrdeq = QuadraticEq(a, b, c)
