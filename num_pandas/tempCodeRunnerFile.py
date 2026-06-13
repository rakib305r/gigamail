import pandas as pd
data = {
    'Name': ['Rakib', 'Rayhan', 'Shimul', None, 'Ayesha'],
    'Age': [25, None, 22, 30, None],
    'Salary': [50000, 60000, None, 55000, 70000],
    'Department': ['Sales', None, 'HR', 'IT', 'Marketing']
}

df = pd.DataFrame(data)
print(df)

df.dropna(inplace = True)
print(df)