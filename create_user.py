import sqlite3
from werkzeug.security import generate_password_hash

def create_user(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    hashed_password = generate_password_hash(password, method='sha256')
    try:
        c.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
        conn.commit()
    except sqlite3.IntegrityError:
        print("User already exists.")
    conn.close()

if __name__ == '__main__':
    create_user('testuser', 'testpassword')