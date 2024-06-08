import mysql.connector
from mysql.connector import errorcode
from flask import Flask, jsonify, request

from dbqueries import *


app = Flask(__name__)

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            user='root',
            password='Jason0928156792',
            host='127.0.0.1',
            database='housesystem'
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
    
@app.route('/api/housesystem', methods=['GET'])

def get_houses():
    # H id hasn't used
    title= request.args.get("Title")
    price = request.args.get('Price')
    score = request.args.get('Score')
    location = request.args.get('Location_id')
    equipment = request.args.get('Equipment_id')
    housetype = request.args.get('Housetype_id')
    landlord = request.args.get('Lanlord_id')

    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = connection.cursor(dictionary=True)
    
    query = "SELECT * FROM house WHERE 1=1"
    params = []

    if location:
        query += " AND Location = %s"
        params.append(location)
    if price:
        query += " AND Price >= %s"
        params.append(price)
    if score:
        query += " AND Score >= %s"
        params.append(score)

    if equipment:
            query += " AND Equipment >=%s"
            params.append(equipment)


    cursor.execute(query, params)
    houses = cursor.fetchall()
    cursor.close()
    connection.close()

    return jsonify(houses)
if __name__ == '__main__':
    app.run(debug=True)
