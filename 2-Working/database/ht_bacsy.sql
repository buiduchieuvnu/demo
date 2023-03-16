create table ht_bacsy(
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
   , mabn varchar(20) not null
   , chuyenmon varchar(10) not null
   , sdt varchar(12)
   , email varchar (100) not null
   
   -- Fks
   , phongkham_id int
);