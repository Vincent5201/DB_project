import mysql.connector
from mysql.connector import errorcode
from flask import Flask, jsonify, request
import random
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text
from sqlalchemy.pool import QueuePool

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Jason0928156792@127.0.0.1/housesystem'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
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
    around_store = request.args.getlist('around')
    around_d = request.args.getlist('around_d')

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
            else:
                query += f" AND Location_ID=0"

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
            else:
                query += f" AND Equipment_ID=0"
    if len(rent):
        low = 100000
        high = 0
        if "5000以下" in rent:
            low = min(low, 0)
            high = max(high, 5000)
        if "5000-9000" in rent:
            low = min(low, 5000)
            high = max(high, 9000)
        if "9000-14000" in rent:
            low = min(low, 9000)
            high = max(high, 14000)
        if "14000-20000" in rent:
            low = min(low, 14000)
            high = max(high, 20000)
        if "20000以上" in rent:
            low = min(low, 20000)
            high = max(high, 100000)
        query += f" AND Price >= {low} AND Price <= {high}"
    if len(rating):
        low = 10
        high = 0
        for r in rating:
            low = min(low, int(r[0]))
            high = max(high, int(r[2]))
        query += f" AND Score >= {low} AND Score <= {high}"
    if len(floor):
        low = 100
        high = 1
        if "一樓" in floor:
            low = min(low, 1)
            high = max(high, 1)
        if "二三樓" in floor:
            low = min(low, 2)
            high = max(high, 3)
        if "四六樓" in floor:
            low = min(low, 4)
            high = max(high, 6)
        if "七九樓" in floor:
            low = min(low, 7)
            high = max(high, 9)
        if "十樓以上" in floor:
            low = min(low, 10)
            high = max(high, 10)
        query_ht = f"SELECT HT_ID FROM house_type WHERE Floor_destination <= {high} AND Floor_destination >= {low}"
        cursor.execute(query_ht)
        HTids = cursor.fetchall()
        HT_id = [row['HT_ID'] for row in HTids]  
        if HT_id:
            ht_id_str = ', '.join(map(str, HT_id))
            query += f" AND Housetype_ID IN ({ht_id_str})"
        else:
            query += f" AND Housetype_ID=0"

    cursor.execute(query, params)
    houses = cursor.fetchall()
    random.shuffle(houses)
    count = 0
    d_limit = 100
    try:
        d_limit = float(around_d[0])
    except:
        d_limit = 100
    cont = False
    select = []
    for x, house in enumerate(houses):
        arounds = {}
        query_ar = f"""
            SELECT Title, Distance FROM L_distance, restaurant 
            WHERE L_ID1={house['Location_id']} AND L_ID2=Location_ID
            ORDER BY Distance ASC
        """
        cursor.execute(query_ar)
        around_res = cursor.fetchall()[:5]
        arounds["restaurant"] = around_res
        if "t0" in around_store and around_res[0]['Distance'] > d_limit:
            continue
        
        query_as = f"""
            SELECT Sname, Distance FROM L_distance, store
            WHERE L_ID1={house['Location_id']} AND L_ID2=location_id AND Stype=1
            ORDER BY Distance ASC
        """
        cursor.execute(query_as)
        around_s1 = cursor.fetchall()[:2]
        arounds["ty1"] = around_s1
        if "t1" in around_store and around_s1[0]['Distance'] > d_limit:
            continue
        
        for i in range(3,9):
            query_as = f"""
            SELECT SName, Distance FROM L_distance, store
            WHERE L_ID1={house['Location_id']} AND L_ID2=location_id AND Stype={i}
            ORDER BY Distance ASC
            """
            cursor.execute(query_as)
            around_s = cursor.fetchall()[:2]
            arounds[f"ty{i}"] = around_s
            if f"t{i}" in around_store and around_s[0]['Distance'] > d_limit:
                cont = True
                break
        if cont:
            continue
        count += 1
        houses[x]["arounds"] = arounds
        select.append(x)
        if count == 3:
            break
    houses = [ houses[h] for h in select]
    HT_ids = [row['Housetype_id'] for row in houses]  
    L_ids = [row['Location_id'] for row in houses]  
    E_ids = [row['Equipment_id'] for row in houses]  
    for i,id in enumerate(HT_ids):
        new_query=f"SELECT * FROM house_type WHERE HT_Id={id}"
        cursor.execute(new_query)
        data= cursor.fetchall()
        houses[i]["HT_id"] = data

    for i,id in enumerate(L_ids):
        new_query=f"SELECT * FROM location WHERE L_id={id}"
        cursor.execute(new_query)
        data= cursor.fetchall()
        houses[i]["L_id"] = data

    for i,id in enumerate(E_ids):
        new_query=f"SELECT * FROM equipment WHERE E_id={id}"
        cursor.execute(new_query)
        data= cursor.fetchall()
        houses[i]["E_id"] = data
        
    cursor.close()
    connection.close()
    
    return jsonify(houses)

if __name__ == '__main__':
    app.run(debug=True)
