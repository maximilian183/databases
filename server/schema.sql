CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int not null primary key auto_increment,
  roomname varchar(20)
);

CREATE TABLE users (
  id int not null primary key auto_increment,
  username varchar(20)
);

/* all messages */
CREATE TABLE messages (
  /* Describe your table here.*/
  id int not null primary key auto_increment,
  message varchar(140),
  createdAt date not null,
  room_id int,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (room_id) REFERENCES rooms (id)
);

/* fix the private message foreign key  */
CREATE TABLE private_messages (
  id int not null primary key auto_increment,
  private_message_id int,
  user_from int,
  user_to int,
  FOREIGN KEY (user_from) REFERENCES users (id),
  FOREIGN KEY (user_to) REFERENCES users (id)
);

CREATE TABLE favorites(
  id int not null primary key auto_increment,
  relationship varchar(40),
  friend_from int,
  friend_to int,
  FOREIGN KEY (friend_from) REFERENCES users (id),
  FOREIGN KEY (friend_to) REFERENCES users (id)
);

ALTER TABLE private_messages
ADD FOREIGN KEY (private_message_id) REFERENCES messages (id);

ALTER TABLE users add UNIQUE (username);
ALTER TABLE rooms add UNIQUE (roomname);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
