drop table if exists student;
create table student(
	studentno character(10) not null, 
	degree varchar(70) not null, 
	college varchar(55) not null, 
	password varchar(100) not null, 
	email varchar(50) not null, 
	firstname varchar(50) not null, 
	middlename varchar(25) not null, 
	lastname varchar(25) not null, 
	birthdate date not null, 
	constraint student_studentno_pk Primary Key(studentno));

/*INSERT STUDENT*/

insert into student values
('2013-30624', 
'BS Computer Science', 
'College of Arts and Sciences', 
'fGhdjs86h0fjnoPie32', 
'jlesguerra2@up.edu.ph', 
'Joshze Rica', 
'Luklukan', 
'Esguerra', 
to_date('08-05-1997', 'MM-DD-YYYY'));

insert into student values
('2011-30624', 
'BS Nutrition', 
'College of Human Ecology', 
'dfHduitro08df083dg9', 
'jprmyrealonda@up.edu.ph', 
'Jose Protacio', 
'Rizal Mercado', 
'y Realonda', 
to_date('07-19-2010', 'MM-DD-YYYY'));

insert into student values
('2009-56905', 
'BS Chemical Engineering', 
'College of Engineering and Agro-Industrial Technology', 
'sdiEuif064hf9as094', 
'jdelacruz32@up.edu.ph', 
'Juan', 
'Dela', 
'Cruz', 
to_date('12-25-1992', 'MM-DD-YYYY'));

drop table if exists teacher;
create table Teacher (
	Employeeno char (10) not null, 
	Password varchar(100) not null, 
	Email varchar(50) not null, 
	Firstname varchar(50) not null, 
	Middlename varchar(25) not null, 
	Lastname varchar(25) not null, 
	Birthdate date not null, 
	constraint Teacher_Employeeno_pk Primary Key(Employeeno) 
);

insert into Teacher values
('0001112221','password','rncrecario@up.edu.ph','Reginald Neil','C','Recario',to_date('01-01-1994','DD-MM-YYYY'));
insert into Teacher values
('1112223698','password2','lrdanila@up.edu.ph','Lailanie','R','Danila',to_date('02-02-1994','DD-MM-YYYY'));
insert into Teacher values
('1234567890','password3','cnmperalta@up.edu.ph','Caroline Natalie','M','Peralta',to_date('03-03-1994','DD-MM-YYYY'));

drop table if exists Teacher_Degree_List
create table Teacher_Degree_List (
	Employeeno char(10) not null, 
	Degree varchar(70) not null, 
	constraint Teacher_Degree_List_pk Primary Key(Employeeno, Degree),
	constraint Teacher_Degree_List_Employeeno_fk Foreign Key(Employeeno) References Teacher(Employeeno)
);

insert into Teacher_Degree_List values
('0001112221','BS Computer Science'
);
insert into Teacher_Degree_List values
('1112223698','BS Computer Science'
);
insert into Teacher_Degree_List values
('1234567890','BS Computer Science'
);

/*CREATE*/

drop table if exists class;
create table class(
	portal varchar(10) not null, 
	description text not null, 
	section varchar(5) not null, 
	coursecode varchar(10) not null, 
	teacheremployeeno character(10) not null, 
	constraint class_portal_pk Primary Key(portal),
	constraint class_teacheremployeeno_fk Foreign Key(teacheremployeeno) References teacher(Employeeno));

insert into class values('abcdefghij', 'A journey into sex', 'C-10L', 'SEXED 101', '1234567890');
insert into class values('zxcvbnmtre', 'A journey into sex', 'C-19L', 'SEXED 101', '0001112221');
insert into class values('asdfghjklp', 'Introduction into the study of the expression beauty in clothing', 'A-2L', 'FASH 1', '1234567890');

drop table if exists class_list;
create table class_list(
	portal varchar(10) not null,
	studentno character(10) not null, 
	constraint student_pk Primary Key(portal, studentno),
	constraint class_list_portal_fk Foreign Key(portal) References class(portal),
	constraint class_studentno_fk Foreign Key(studentno) References student(studentno));
	
insert into class_list values('asdfghjklp', '2013-30624');
insert into class_list values('asdfghjklp', '2011-30624');
insert into class_list values('zxcvbnmtre', '2009-56905');
insert into class_list values('abcdefghij', '2013-30624');

drop table if exists Requirement;
create table Requirement (
	Requirementid serial not null, 
	Type varchar(20) not null, 
	Duedate timestamp not null, 
	Maxgrade numeric(3) not null, 
	TeacherEmployeeNo char(10) not null, 
	constraint Requirement_Requirementid_pk Primary Key(Requirementid)
);

drop table if exists Requirement_Passed;
create table Requirement_Passed (
	Requirementid serial not null, 
	Studentno char(10) not null, 
	Grade numeric(3) not null, 
	Submissiondate timestamp not null, 
	constraint Requirement_Passed_pk Primary Key(Requirementid, Studentno),
	constraint Requirement_Passed_Requirementid_fk Foreign Key(Requirementid) References Requirement(Requirementid)
);

insert into Requirement(Type, Duedate, Maxgrade, TeacherEmployeeNo) values('Essay', current_timestamp, 100, '0001112221');
insert into Requirement(Type, Duedate, Maxgrade, TeacherEmployeeNo) values('Exercise', current_timestamp, 100, '1112223698');
insert into Requirement(Type, Duedate, Maxgrade, TeacherEmployeeNo) values('Essay', current_timestamp, 20, '1234567890');

insert into Requirement_Passed values(1, '2013-30624', 12, current_timestamp);
insert into Requirement_Passed values(1, '2011-30624', 12, current_timestamp);
insert into Requirement_Passed values(2, '2013-30624', 14, current_timestamp);
