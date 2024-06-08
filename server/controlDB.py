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
    query = "SELECT * FROM house WHERE "
    params = []

    if location:
        query += " AND Location_ID IN (%s)" % ','.join(['%s'] * len(location))
        params.extend(location)
    if rent:
        for r in rent:
            if '以上' in r:
                min_rent = int(r.replace('以上', ''))
                query += " AND Price >= %s"
                params.append(min_rent)
            else:
                min_rent, max_rent = map(int, r.split('-'))
                query += " AND Price BETWEEN %s AND %s"
                params.extend([min_rent, max_rent])
    if floor:
        query += " AND Floor IN (%s)" % ','.join(['%s'] * len(floor))
        params.extend(floor)
    if rating:
        for r in rating:
            min_score, max_score = map(float, r.split('-'))
            query += " AND Score BETWEEN %s AND %s"
            params.extend([min_score, max_score])
    if equipment:
        for equip in equipment:
            query += " AND FIND_IN_SET(%s, Equipment)"
            params.append(equip)

    cursor.execute(query, params)
    houses = cursor.fetchall()
    cursor.close()
    connection.close()

    return jsonify(houses)

if __name__ == '__main__':
    app.run(debug=True)
