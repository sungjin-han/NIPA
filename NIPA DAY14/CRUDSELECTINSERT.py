from flask import Flask, render_template
import pymysql

app = Flask(__name__)

# 데이터베이스 연결 설정
db = pymysql.connect(
    host='localhost',
    user='your_username',
    password='your_password',
    database='your_database'
)

# 홈 페이지 라우트
@app.route('/')
def index():
    # 클럽 정보 SELECT 쿼리 실행
    club_info = []
    with db.cursor() as cursor:
        cursor.execute('SELECT * FROM Club')
        club_info = cursor.fetchall()

    # 선수 정보 SELECT 쿼리 실행
    player_info = []
    with db.cursor() as cursor:
        cursor.execute('SELECT * FROM Player')
        player_info = cursor.fetchall()

    # 스태프 정보 SELECT 쿼리 실행
    staff_info = []
    with db.cursor() as cursor:
        cursor.execute('SELECT * FROM Staff')
        staff_info = cursor.fetchall()

    return render_template('index.html', club_info=club_info, player_info=player_info, staff_info=staff_info)

if __name__ == '__main__':
    app.run(debug=True)
