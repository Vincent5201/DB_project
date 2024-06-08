import mysql.connector
from mysql.connector import errorcode
from flask import Flask, jsonify, request

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
    location = request.args.getlist('location')
    rent = request.args.getlist('rent')
    floor = request.args.getlist('floor')
    rating = request.args.getlist('rating')
    equipment = request.args.getlist('equipment')

    connection = get_db_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM house WHERE 1=1"

    if len(location):
        tgt = []
        if '東區' in location:
            tgt.append(25)
        if '北區' in location:
            tgt.append(2)
        if '中西區' in location:
            tgt.append(3)
        if tgt: 
            location_str = ', '.join(map(str, tgt))
            query_s = f"SELECT L_ID FROM location WHERE Section IN ({location_str})"
            cursor.execute(query_s)
            L_id = [row[0] for row in cursor.fetchall()]
            if L_id: 
                l_id_str = ', '.join(map(str, L_id))
                query += f" AND Location_ID IN ({l_id_str})"

    cursor.execute(query, [])
    houses = cursor.fetchall()

    cursor.close()
    connection.close()
    
    return jsonify(houses)

if __name__ == '__main__':
    app.run(debug=True)
