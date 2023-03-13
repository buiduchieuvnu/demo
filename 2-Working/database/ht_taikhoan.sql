/*
Desc: Bảng lưu thông tin tài khoản đăng nhập
Created date: 2023-03-13
Created by: hieubd
Deploy: hc_thuctap_test, hc_thuctap_app

*/

create table ht_taikhoan(
   id serial primary key
   -- default
   , ghichu varchar(500) 
   , ngay_tao timestamp not null
   , ngay_sua timestamp
   , nguoi_tao varchar(200) 
   , nguoi_sua varchar(200) 
   , trangthai int default 1
   -- data
   , hoten varchar(500) not null
   , uname varchar(100) not null
   , pwd varchar(100) not null
   -- Fks
   , vaitro_id int
);

alter table ht_taikhoan add constraint fk_tk_vt_vt foreign key (vaitro_id)  references ht_vaitro(id);
