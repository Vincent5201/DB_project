import mysql.connector
from mysql.connector import errorcode

from dbqueries import *

try:
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

except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    cursor.close()
    connection.close()

