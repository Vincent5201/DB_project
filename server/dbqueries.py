import csv
import mysql

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
    
def send():
    connection = mysql.connector.connect(
        user='root',
        password='410503Sue',
        host='127.0.0.1',
        database="dbproject"
    )
    print("Connection successful!")
    cursor = connection.cursor()

    query = """
    CREATE TABLE house (
        H_ID INT PRIMARY KEY,
        Title VARCHAR(10) NOT NULL,
        Price FLOAT NOT NULL,
        Score FLOAT NOT NULL,
        Location_ID INT,
        FOREIGN KEY (Location_ID) REFERENCES location(L_ID) ON DELETE SET NULL ON UPDATE CASCADE,
        Equipment_ID INT,
        FOREIGN KEY (Equipment_ID) REFERENCES equipment(E_ID) ON DELETE SET NULL ON UPDATE CASCADE,
        Housetype_ID INT,
        FOREIGN KEY (Housetype_ID) REFERENCES house_type(HT_ID) ON DELETE SET NULL ON UPDATE CASCADE,
        Lanlord_ID INT,
        FOREIGN KEY (Lanlord_ID) REFERENCES landlord(LL_ID) ON DELETE SET NULL ON UPDATE CASCADE
    )
    """

    #createTable(cursor, query)
    #insertData(cursor, connection, query, data)
    insertCSVfile(cursor, connection, "D://codes//DB_project//sorte_datas//house_finish.csv", "house")
