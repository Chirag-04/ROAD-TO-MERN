CREATE DATABASE NSUT;
USE NSUT;

CREATE TABLE student(
   rollno INT PRIMARY KEY ,
   name VARCHAR(50) ,
   marks INT NOT NULL,
   grade VARCHAR(1) ,
   city VARCHAR(20)
);

 CREATE TABLE dept(
   id INT PRIMARY KEY,
   name VARCHAR(50)
 );
 
 insert into dept
 values 
 (101 , "English"),
 (102 , "Maths"),
 (103  , "Science");
 select * from dept;
 
 update dept
 set id =  105
 where name = "English";
 
 select * from teacher ;
  CREATE TABLE teacher(
   id INT PRIMARY KEY,
   name VARCHAR(50),
   deptId INT,
   FOREIGN KEY (deptId) references dept(id)
   ON UPDATE CASCADE 
   ON DELETE CASCADE
 );
drop table teacher;
insert into teacher 
values 
(100 , "Gaurav" , 101), 
(101  , "Sia" , 101) ,
(102  , "Diljit" , 102),
(103 , "Karan"  , 102) , 
(104  , "Jassi" , 103 );


INSERT INTO student (rollno, name, marks, grade, city) VALUES
(1, 'John Doe', 85, 'A', 'New York'),
(2, 'Jane Smith', 78, 'B', 'Los Angeles'),
(3, 'Alice Johnson', 92, 'A', 'Chicago'),
(4, 'Bob Brown', 67, 'C', 'Houston'),
(5, 'Charlie Davis', 74, 'B', 'Phoenix'),
(6 , "Steve Smith" ,100 , 'A' , 'Chicago'),
(7, 'John Cena', 91, 'A', 'New York');

 SET SQL_SAFE_UPDATES = 0 ;
-- update query
select * from student;
UPDATE student 
set grade = "O"
where grade = "A";

select * from student;

UPDATE student 
set marks = 80
where name ="Bob Brown";
select * from student;


UPDATE student 
set grade = "B"
where (marks>=80 AND marks<=90) ;

select * from student;


-- Q update everyone's marks by 1 (bonus)
update student 
set marks = 95
where rollno = 6;

select * from student;


update student 
set marks = marks + 2
where marks +2<96 ;


-- q delete the student with marks less than 
delete from student 
where marks <= 85;









