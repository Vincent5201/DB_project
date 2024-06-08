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
    params = []

    if len(location):
        location_map = {
            '東區': 25,
            '北區': 2,
            '中西區': 3
        }
        location_ids = [location_map[loc] for loc in location if loc in location_map]
        if location_ids:
            location_str = ', '.join(map(str, location_ids))
            query_s = f"SELECT L_ID FROM location WHERE Section IN ({location_str})"
            cursor.execute(query_s)
            Lids = cursor.fetchall()
            L_id = [row['L_ID'] for row in Lids]  # Ensure to use 'L_ID' as dictionary key
            if L_id:
                l_id_str = ', '.join(map(str, L_id))
                query += f" AND Location_ID IN ({l_id_str})"

    if len(equipment):
        equipment_map = {
            '冷氣': 'AC',
            '電視': 'TV',
            '冰箱': 'Refrigerator',
            '洗衣機': 'Washing_Machine',
            '廚房': 'Kitchen',
            '網路': 'Internet',
            '沙發': 'Sofa',
            '衣櫃': 'Balcony',
            '電梯': 'Elevator',
            '停車位': 'Parking_Space'
        }
        equipment_names = [equipment_map[loc] for loc in equipment if loc in equipment_map]
        if equipment_names:
            query_e = f"SELECT E_ID FROM equipment WHERE 1=1"
            for equ in equipment_names:
                query_e += f" AND {equ}=1"
            cursor.execute(query_e)
            Eids = cursor.fetchall()
            E_id = [row['E_ID'] for row in Eids]  
            if E_id:
                e_id_str = ', '.join(map(str, E_id))
                query += f" AND Equipment_ID IN ({e_id_str})"

    cursor.execute(query, params)
    houses = cursor.fetchall()

    cursor.close()
    connection.close()
    
    return jsonify(houses)

if __name__ == '__main__':
    app.run(debug=True)
