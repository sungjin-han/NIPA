Table club {
  club_id varchar(50) [primary key]
  foundation_date varchar(50)
  home_location varchar(50)
}

Table players {
  player_id varchar(50) [primary key]
  club_id varchar(50)
  player_name varchar(50)
  nationality varchar(50)
  position varchar(50)
  back_number int
}

Table staff {
  staff_id varchar(50) [primary key]
  club_id varchar(50)
  staff_name varchar(50)
  position varchar(50)
  back_number int
  nationality varchar(50)
}

Table event {
  club_id varchar(50) [primary key]
  event_date varchar(50)
  prize varchar(50)
  content varchar(50)
}

Table record {
  player_id varchar(50) [primary key]
  stat int
  victory int
  defeat int
  homerun int
  k int
  hit int
  steal int
}

Table broadcast {
  club_id varchar(50) [primary key]
  broadcaster varchar(50)
  time varchar(50)
  location varchar(50)
  commetator varchar(50)
}

Table shop {
  club_id varchar(50) [primary key]
  item varchar(50)
  price int
  sale varchar(50)
}

Ref: club.club_id > players.club_id
Ref: club.club_id > staff.club_id
Ref: players.player_id > record.stat
Ref: players.player_id > shop.item
Ref: staff.staff_id > shop.item
Ref: club.foundation_date > event.event_date
Ref: club.home_location > broadcast.location