import pandas
csv_data = pandas.read_csv('QuestionData.csv')


def qtolst(L):
    for index, row in csv_data.iterrows():
        L.append(row['Question'])
    return



