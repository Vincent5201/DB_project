import csv

def createTable(cursor, query):
    '''
    create_table_query = """
    CREATE TABLE section (
        id INT PRIMARY KEY,
        name VARCHAR(10)
    )
    """
    '''
    cursor.execute(query)

def insertData(cursor, connection, query, data):
    '''
    insert_data_query = """
    INSERT INTO section (id, name)
    VALUES (%s, %s)
    """
    data = [
        (1, '北區'),
        (2, '東區'),
        (3, '中西區')
    ]
    '''
    cursor.executemany(query, data)
    connection.commit() 

def insertCSVfile(cursor, connection, file_path, table):

    with open(file_path, newline='') as csvfile:
        csv_reader = csv.reader(csvfile)
        headers = next(csv_reader) 
    
    data = []
    with open(file_path, newline='') as csvfile:
        csv_reader = csv.reader(csvfile)
        next(csv_reader)  
        for row in csv_reader:
            data.append(row)

    insert_data_query = """
    INSERT INTO {} ({})
    VALUES ({})
    """.format(table, ','.join(headers), ','.join(['%s'] * len(headers)))  

    cursor.executemany(insert_data_query, data)
    connection.commit()  
    