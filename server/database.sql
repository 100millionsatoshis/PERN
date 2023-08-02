-- student table
create table talaba(
  student_id serial primary key,
  email varchar(255) unique not null,
  phone varchar(50),
  password varchar(255) not null,
  created_at date default current_date,
  student_name varchar(50),
  student_surname varchar(50),
  gender varchar(10),
  date_of_birth date
)