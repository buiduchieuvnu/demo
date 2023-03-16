create table ht_phongkham(
   id serial primary key
   -- default
   , ghichu varchar(500) 
   , ngay_tao timestamp not null
   , ngay_sua timestamp
   , nguoi_tao varchar(200) 
   , nguoi_sua varchar(200) 
   , trangthai int default 1
   -- data
   , tenphongkham varchar(500) not null
   
   -- Fks
);

-- add column foregin key bacsy_id for ht_phongkham
alter table ht_phongkham add column bacsy_id int;
alter table ht_phongkham add constraint fk_pk_vt_bs foreign key (bacsy_id)  references ht_bacsy(id);