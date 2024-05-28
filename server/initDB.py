
def createSECTION(cursor):
    create_table_query = """
    CREATE TABLE section (
        id INT PRIMARY KEY,
        name VARCHAR(10)
    )
    """
    cursor.execute(create_table_query)

def insertSection(cursor, connection):
    insert_data_query = """
    INSERT INTO section (id, name)
    VALUES (%s, %s)
    """

    # 数据
    data = [
        (1, '北區'),
        (2, '東區'),
        (3, '中西區')
    ]

    cursor.executemany(insert_data_query, data)
    connection.commit()  