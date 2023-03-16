create table ht_benhnhan(
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
   , namsinh int
   , gioitinh varchar(10) not null
   , diachi varchar(100)
   , sdt varchar(12)
   , benhly varchar (100) not null
   
   -- Fks
   , bacsy_id int
   , phongkham_id int
);

alter table ht_benhnhan add constraint fk_bn_vt_bs foreign key (bacsy_id)  references ht_bacsy(id);
alter table ht_benhnhan add constraint fk_bn_vt_pk foreign key (phongkham_id)  references ht_phongkham(id);