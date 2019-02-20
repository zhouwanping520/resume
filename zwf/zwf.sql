SET NAMES UTF8;
DROP DATABASE IF EXISTS ZWF_ZWF;
CREATE DATABASE ZWF_ZWF CHARSET=UTF8;
USE ZWF_ZWF;
CREATE TABLE zwf_lunbotu(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128)
);
INSERT INTO zwf_lunbotu VALUES(null,'img/50.jpg');
INSERT INTO zwf_lunbotu VALUES(null,'img/51.jpg');
INSERT INTO zwf_lunbotu VALUES(null,'img/567.png');
INSERT INTO zwf_lunbotu VALUES(null,'img/52.jpg');
INSERT INTO zwf_lunbotu VALUES(null,'img/50.jpg');

 CREATE TABLE zwf_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(16),
    pwd VARCHAR(9)
);
INSERT INTO zwf_user VALUES(null,"tom","123456");
INSERT INTO zwf_user VALUES(null,"jerry","666666");
INSERT INTO zwf_user VALUES(null,"jeck","999999");
INSERT INTO zwf_user VALUES(null,"andy","123678");
INSERT INTO zwf_user VALUES(null,"fuck","654321");
CREATE TABLE zwf_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(9),
    phone VARCHAR(32)
);     
INSERT INTO zwf_login VALUES(null,"tom","123456",13786037329);  
INSERT INTO zwf_login VALUES(null,"jerry","666666",13786037329);
INSERT INTO zwf_login VALUES(null,"jeck","999999",13786037329);
INSERT INTO zwf_login VALUES(null,"andy","123678",13786037329);
INSERT INTO zwf_login VALUES(null,"fuck","654321",13786037329);                          