import mysql.connector
from mysql.connector import errorcode
from flask import Flask, jsonify

from dbqueries import *


app = Flask(__name__)

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            user='root',
            password='410503Sue',
            host='127.0.0.1',
            database='dbproject'
        )
        return connection
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
        return None
    
@app.route('/api/houses', methods=['GET'])

def get_houses():
    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM house"
    cursor.execute(query)
    houses = cursor.fetchall()
    cursor.close()
    connection.close()
    
    return jsonify(houses)

if __name__ == '__main__':
    app.run(debug=True)
