# ---------------------------------------
# tempreture = [32,54.2,24.4,30,12]

# total = 0

# for temp in tempreture:
#   total += temp

# avarage = total/len(tempreture)
# print(avarage)

# ---------------------------------------
# import numpy as np
# tempreture = np.array([12.2,45.2,32.5])

# average = np.mean(tempreture)
# print(average)


# ---------------------------------------

#

# roll = np.array([3,5,9,45,2])

# print(roll.size)
# print(roll.shape)


# ---------------------------------------
# a = np.zeros((3,4))
# print(a)

# ---------------------------------------
# import numpy as np

# float_data = np.array([12.2,52.85,125.8])

# print(float_data.dtype)

# int_data = float_data.astype(int)

# print(int_data.dtype)



# ---------------------------------------
# import numpy as np

# arr = np.array([23,45,85,56,12])

# print(np.sum(arr))
# print(np.std(arr))
# print(np.var(arr))
# print(np.mean(arr))
# print(np.min(arr))
# print(np.max(arr))


# ---------------------------------------
# import numpy as np
# arr = np.array([45,56,21,85,52,36])

# print(arr[:6])
# print(arr[::2])
# print(arr[::-1])
# print(arr[[0,5,2]])

# ---------------------------------------
# import numpy as np
# arr = np.array([12,65,52,85,3,10])

# re_shape = arr.reshape(2,3)
# print(re_shape)


# ---------------------------------------
# import numpy as np
# arr = np.array([12,65,52,85,3,10])

# new_arr = np.append(arr, [1,2,3])
# print(new_arr)



# ---------------------------------------
# import numpy as np
# arr1 = np.array([12,65,52,85,3,10])
# arr2 = np.array([23,54,55,89,12,20])

# new_arr = np.concatenate((arr1, arr2))
# print(new_arr)


# ---------------------------------------
# import numpy as np
# arr1 = np.array([12,65,52,85,3,10])

# arr = np.delete(arr1 , 0)
# print(arr)

# import numpy as np
# arr2 = np.array([[12,65,52],
#                  [52,90,83]])

# new_arr = np.delete(arr2, 0, axis=0)
# print(new_arr)


# ---------------------------------------
# import numpy as np
# arr1 = np.array([12,23,45])
# arr2 = np.array([85,56,20])

# print(np.vstack((arr1,arr2)))
# print(np.hstack((arr1, arr2)))



# ---------------------------------------
# import numpy as np
# arr1 = np.array([12,23,45,12,80,6,23,83])
# new_arr = np.split(arr1, 4)

# print(new_arr)


# ---------------------------------------Vectorization
# import numpy as np

# arr = np.array([1,2,3,4])
# result = arr * 2

# print(result)


# ---------------------------------------Broadcasting
# import numpy as np 
# arr1 = np.array([[52,32,78],[12,54,47]])
# arr2 = np.array([51,647,97])

# print(arr1 + arr2)


# ---------------------------------------missing value
# import numpy as np
# arr = np.array([45,45,96, np.nan])
# print(np.isnan(arr)) #nan = not a number

# replace_arr = np.nan_to_num(arr , nan = 100) #replace a number
# print(replace_arr)


# ---------------------------------------
# import numpy as np 
# arr = np.array([45,86,23, np.inf ,56,58, -np.inf ,90])
# print(np.isinf(arr))

# replace_arr = np.nan_to_num(arr , posinf = 787, neginf= 78)
# print(replace_arr)


# ---------------------------------------
a = int(input(3))
b = int(input(2))

print(a + b)
print(a - b) 
print(a * b)