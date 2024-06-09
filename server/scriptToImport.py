import pandas as pd
import mysql.connector
from mysql.connector import errorcode

# Function to get the database connection
def get_db_connection():
    try:
        connection = mysql.connector.connect(
            user='root',
            password='Jason0928156792',  # Update with your password
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

# Read the CSV file
csv_file_path = r'sorte_datas\L_distance.csv'
data = pd.read_csv(csv_file_path)

data = data.fillna({
    'R_ID': 0,  # Assuming R_ID is a numeric field, replace NaN with 0
    'Title': '',  # Assuming Title is a text field, replace NaN with an empty string
    'Type': 0,  # Assuming Type is a numeric field, replace NaN with an empty string
    'ReviewsCount': 0,  # Assuming ReviewsCount is a numeric field, replace NaN with 0
    'Score': 0,  # Assuming Score is a numeric field, replace NaN with 0
    'Location_ID': 0  # Assuming Location_ID is a numeric field, replace NaN with 0
})
# Establish the database connection
connection = get_db_connection()
if connection:
    cursor = connection.cursor()

    # Iterate over the rows in the DataFrame and insert into the database
    for index, row in data.iterrows():
        insert_query = """
        INSERT INTO l_distance (D_ID,L_ID1,L_ID2,Distance)
        VALUES (%s,%s,%s,%s)
        """
        cursor.execute(insert_query, tuple(row))

    # Commit the transaction
    connection.commit()

    # Close the cursor and connection
    cursor.close()
    connection.close()
    print("Data imported successfully!")
else:
    print("Failed to connect to the database")
