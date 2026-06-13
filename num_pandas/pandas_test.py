#---------------------------------------(csv file read)
# import pandas as pd

# df = pd.read_csv("supermarket_sales_dataset.csv" ) #if file error do this-- encoding = "utf-8"/"latin1"
# print(df)


#---------------------------------------(json file read)
# import pandas as pd

# df = pd.read_json("small_supermarket_dataset.json")
# print(df)


#---------------------------------------(make data file and convert it csv/excel file)
# import pandas as pd 
# data = {
#     "Name":('Rakib','Rayhan','shimul'),
#     "Roll": (56,45,13),
#     "Post": ('STUDENT','STUDENT','STUDENT')
# }
# df = pd.DataFrame(data)
# print(df)
# df.to_csv("spi.csv", index = False) #index = false if i index don't use
# df.to_excel("spi.xlsx", index = False)



#---------------------------------------(none value remove)
# import pandas as pd
# data = {
#     'Name': ['Rakib', 'Rayhan', 'Shimul', None, 'Ayesha'],
#     'Age': [25, None, 22, 30, None],
#     'Salary': [50000, 60000, None, 55000, 70000],
#     'Department': ['Sales', None, 'HR', 'IT', 'Marketing']
# }

# df = pd.DataFrame(data)
# print(df)

# df.dropna(inplace = True) #axis = 1/0 included remove row or column
# print(df)



#---------------------------------------(none value replace by anything)
import pandas as pd
data = {
    'Name': ['Rakib', 'Rayhan', 'Shimul', None, 'Ayesha'],
    'Age': [25, None, 22, 30, None],
    'Salary': [50000, 60000, None, 55000, 70000],
    'Department': ['Sales', None, 'HR', 'IT', 'Marketing']
}

df = pd.DataFrame(data)
print(df)

df.fillna(0,inplace = True) # 0 mean whats the number i replaced none
print(df)