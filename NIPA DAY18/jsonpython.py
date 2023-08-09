import json

# JSON 파일 읽기
with open('data.json', 'r') as file:
    data = json.load(file)  # JSON 데이터를 Python 객체로 변환

# 읽은 데이터 사용
print(data['xxx'])

# JSON 파일 쓰기
data_to_write = {'xxx': 'value'}

with open('output.json', 'w') as file:
    json.dump(data_to_write, file)  # Python 객체를 JSON 형식으로 파일에 쓰기
