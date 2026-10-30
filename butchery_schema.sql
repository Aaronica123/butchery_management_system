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

create table butchery_schema.main_branch(
id serial primary key,
meat butchery_schema.meat,
received int default 0,
wasted int default 0,
transfered int default 0,
sold int default 0,
closing int default 0,
opening int default 0,
created date default current_date
);

create table butchery_schema.expenses(
id serial primary key,
rent int default 0,
wages int default 0,
electricity int default 0,
transport int default 0,
gas int default 0,
packaging int default 0,
water int default 0,
total int default 0,
created date default current_date 
);
alter table butchery_schema.expenses add constraint expense_uq unique(created);

create or replace function butchery_schema.expense_insert()
returns trigger as $$
BEGIN
	new.total:=new.rent +new.wages + new.electricity +new.transport +new.gas +new.packaging+new.water;
	return new;
END;
$$
LANGUAGE plpgsql;

create or replace trigger expense_insert
before insert on butchery_schema.expenses
for each row
execute function butchery_schema.expense_insert();

create or replace trigger expense_update
before update on butchery_schema.expenses
for each row 
execute function butchery_schema.expense_insert();

alter table butchery_schema.main_branch add constraint uq unique(meat, created);

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
	and s.last_name like new.last_name and s.meat= new.meat;
	new.total_cost:=hold_*NEW.quantity;
	new.balance=new.total_cost;
END IF;
RETURN NEW;
END;
$$
LANGUAGE plpgsql;
create or replace trigger new_trigger
BEFORE insert on butchery_schema.purchase
FOR EACH ROW
EXECUTE FUNCTION butchery_schema.cost_check(); 

create or replace function butchery_schema.balance()
RETURNS TRIGGER AS $$
BEGIN
IF new.balance is null or new.total_paid < new.total_cost THEN
	new.balance:=new.total_cost-new.total_paid;
END IF;
RETURN NEW;

END;
$$
LANGUAGE plpgsql;

create or replace trigger update_balance
before update on butchery_schema.purchase
FOR EACH ROW
EXECUTE function butchery_schema.balance();

create or replace function butchery_schema.stock_track()
returns trigger as $$
DECLARE
hold_ numeric;
BEGIN
	IF new.opening=0 THEN
		select b.closing into hold_ from butchery_schema.main_branch b
		where b.created = (current_date-1) and b.meat = new.meat;
		if hold_ is null and new.received=0 THEN
			return null;
		END IF;
		IF hold_ is not null THEN
			new.closing:=hold_+new.received-(new.wasted+new.transfered+new.sold);
		END IF;
		IF hold_ is null and new.received>0 then
			new.closing:=new.received-(new.wasted+new.transfered+new.sold);
			
		END IF;
	END IF;
	return new;		
END;
$$
LANGUAGE plpgsql;

create or replace trigger stock_tracker
before insert on butchery_schema.main_branch
for each row
execute function butchery_schema.stock_track();
