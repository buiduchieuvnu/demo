/*
Desc: Bảng lưu thông tin tài khoản đăng nhập
Created date: 2023-03-13
Created by: hieubd
Deploy: hc_thuctap_test, hc_thuctap_app

*/

create table ht_vaitro(
   id serial primary key
   -- default
   , ghichu varchar(500) 
   , ngay_tao timestamp default now()
   , ngay_sua timestamp default now()
   , nguoi_tao varchar(200) 
   , nguoi_sua varchar(200) 
   , trangthai int default 1
   -- data
   , ma varchar(100) not null
   , ten varchar(100) not null
   -- Fks
);