**club_id 상세 조회**   
경로: /club/{club_id}      
경로 파라미터: club_id   
+ 응답:   
  + HTTP 상태코드: 200 OK   
  + 리턴 타입: JSON 객체
    + club_id: 문자열
    + foundation_data: 날짜
    + home_location: 문자열
    + players: 선수 목록 (JSON 배열)
      + players_id: 문자열
      + players_name: 문자열
      + nationality: 문자열
      + position: 문자열
    + staff: 스태프 목록 (JSON 배열)
      + staff_id: 문자열
      + staff_name: 문자열
      + position: 문자열
