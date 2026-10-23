create schema butchery_schema;
create type butchery_schema.meat As enum ('beef','chicken','goat','pork');
create type butchery_schema.status AS enum ('paid','pending','incomplete');
create table butchery_schema.supplier(
id serial primary key,
first_name varchar(100),
last_name varchar(100),
meat butchery_schema.meat,
amount int
);

alter table butchery_schema.supplier add constraint supplier_uq 
unique(first_name,last_name,meat);
create table butchery_schema.purchase(
id serial primary key,
first_name varchar(100),
last_name varchar(100),
meat butchery_schema.meat,
quantity int,
total_cost int,
total_paid int default 0,
balance int,
status butchery_schema.status default 'pending',
created timestamp default current_timestamp,
completed timestamp default null
);
alter table butchery_schema.purchase add constraint purchase_fk 
foreign key (first_name,last_name,meat) 
references
butchery_schema.supplier(first_name,last_name,meat);

create or replace function butchery_schema.cost_check()
RETURNS TRIGGER AS $$
DECLARE 
	hold_ numeric;
BEGIN
IF new.total_cost is null THEN
	select  s.amount into hold_ from butchery_schema.supplier s where s.first_name like new.first_name 
	and s.last_name like new.last_name and s.meat= new.meat*new.amount;
	new.total_cost:=hold_*NEW.amount;
END IF;
RETURN NEW;
END;
$$
LANGUAGE plpgsql;
create trigger new_trigger
BEFORE insert on butchery_schema.purchase
FOR EACH ROW
EXECUTE FUNCTION butchery_schema.cost_check(); 





