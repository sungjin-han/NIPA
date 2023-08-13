Table club {
  club_id varchar(50) [primary key]
  foundation_date date
  home_location varchar(50)
  created_at timestamp
  updated_at timestamp
}

Table players {
  player_id varchar(50) [primary key]
  club_id varchar(50)
  player_name varchar(50)
  nationality varchar(50)
  position varchar(50)
  back_number int
  created_at timestamp
  updated_at timestamp
}

Table staff {
  staff_id varchar(50) [primary key]
  club_id varchar(50)
  staff_name varchar(50)
  position varchar(50)
  back_number int
  nationality varchar(50)
  created_at timestamp
  updated_at timestamp
}

Table event {
  event_id varchar(50) [primary key]
  club_id varchar(50)
  event_date date
  prize varchar(50)
  content varchar(50)
  created_at timestamp
  updated_at timestamp
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
  created_at timestamp
  updated_at timestamp
}

Table broadcast {
  broadcast_id varchar(50) [primary key]
  club_id varchar(50)
  broadcaster varchar(50)
  time varchar(50)
  location varchar(50)
  commentator varchar(50)
  created_at timestamp
  updated_at timestamp
}

Table shop {
  shop_id varchar(50) [primary key]
  club_id varchar(50)
  item varchar(50)
  price int
  sale varchar(50)
  created_at timestamp
  updated_at timestamp
}

Ref: club.club_id < players.club_id
Ref: club.club_id < staff.club_id
Ref: club.club_id < event.club_id
Ref: players.player_id < record.player_id
Ref: players.club_id < shop.club_id
Ref: staff.club_id < shop.club_id
Ref: club.club_id < broadcast.club_id
Ref: club.club_id < shop.club_id