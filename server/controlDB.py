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
    CREATE TABLE restaurants_type (
        RT_ID INT PRIMARY KEY,
        name VARCHAR(15)
    )
    """

    createTable(cursor, query)
    #insertData(cursor, connection, query, data)
    insertCSVfile(cursor, connection, "D://codes//DB_project//sorte_datas//restaurants_type.csv", "restaurants_type")

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
