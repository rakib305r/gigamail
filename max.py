class max3num:
    def __init__(self):
        a = int(input("A = "))
        b = int(input("B = "))
        c = int(input("C = "))
        
        if (a > b) and (a > c):
            print("A is maximum:", a)
        elif b > c:
            print("B is maximum:", b)
        else:
            print("C is maximum:", c)

max3num_obj = max3num()

