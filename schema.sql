drop table if exists person;
create table person(
	email varchar(50) not null,
	fname varchar(50) not null,
	mname varchar(25),
	lname varchar(25) not null,
	birthdate date not null,
	password varchar(100) not null,
	constraint person_email_pk Primary Key(email)
);


drop table if exists student;
create table student(
	studentno character(10) not null, 
	degree varchar(70) not null, 
	college varchar(55) not null,
	constraint student_email_pk Primary Key(email) 
)inherits(person);

/*INSERT STUDENT*/

insert into student values(
	'jlesguerra2@up.edu.ph', 
	'Joshze Rica', 
	'Luklukan', 
	'Esguerra', 
	to_date('08-05-1997', 'MM-DD-YYYY'),
	'fGhdjs86h0fjnoPie32', 
	'2013-30624', 
	'BS Computer Science', 
	'College of Arts and Sciences' 
);

insert into student values(
	'jprmyrealonda@up.edu.ph', 
	'Jose Protacio', 
	'Rizal Mercado', 
	'y Realonda', 
	to_date('07-19-2010', 'MM-DD-YYYY'),
	'dfHduitro08df083dg9', 
	'2011-30624', 
	'BS Nutrition', 
	'College of Human Ecology'
);

insert into student values(
	'jdelacruz32@up.edu.ph', 
	'Juan', 
	'Dela', 
	'Cruz', 
	to_date('12-25-1992', 'MM-DD-YYYY'),
	'sdiEuif064hf9as094', 
	'2009-56905', 
	'BS Chemical Engineering', 
	'College of Engineering and Agro-Industrial Technology'
);

drop table if exists teacher;
create table Teacher (
	employeeno char (10) not null, 
	constraint Teacher_email_pk Primary Key(email) 
)inherits(person);

insert into Teacher values(
	'rncrecario@up.edu.ph',
	'Reginald Neil',
	'C',
	'Recario',
	to_date('01-01-1994','DD-MM-YYYY'),
	'password',
	'0001112221'
);

insert into Teacher values(
	'lrdanila@up.edu.ph',
	'Lailanie',
	'R',
	'Danila',
	to_date('02-02-1994','DD-MM-YYYY'),
	'password2',
	'1112223698'
);

insert into Teacher values(
	'cnmperalta@up.edu.ph',
	'Caroline Natalie',
	'M',
	'Peralta',
	to_date('03-03-1994','DD-MM-YYYY'),
	'password3',
	'1234567890'
);

drop table if exists Teacher_Degree_List;
create table Teacher_Degree_List (
	teacher_email varchar(50) not null, 
	degree varchar(70) not null, 
	constraint Teacher_Degree_List_pk Primary Key(teacher_email, degree),
	constraint Teacher_Degree_List_teacher_email_fk Foreign Key(teacher_email) References Teacher(email)
);

insert into Teacher_Degree_List values(
	'rncrecario@up.edu.ph','BS Computer Science'
);

insert into Teacher_Degree_List values(
	'lrdanila@up.edu.ph','BS Computer Science'
);

insert into Teacher_Degree_List values(
	'cnmperalta@up.edu.ph','BS Computer Science'
);

/*CREATE*/

drop table if exists class;
create table class(
	portal varchar(10) not null, 
	coursecode varchar(10) not null, 
	coursename varchar(100) not null,
	section varchar(5) not null, 
	description text, 
	teacheremail varchar(50) not null, 
	constraint class_portal_pk Primary Key(portal),
	constraint class_teacheremail_fk Foreign Key(teacheremail) References teacher(email)
);

insert into class values(
	'abcdefghij',
	'SEXED 101',
	'A journey into sex',
	'C-10L',
	'This course will teach about the different sex practices of different cultures',
	'cnmperalta@up.edu.ph'
);

insert into class values(
	'zxcvbnmtre',
	'SEXED 101',
	'A journey into sex',
	'C-19L',
	'This course will teach about the different sex practices of different cultures',
	'rncrecario@up.edu.ph'
);

insert into class values(
	'asdfghjklp',
	'FASH 1',
	'Introduction into the study of the expression beauty in clothing',
	'A-2L',
	'Delve into the intricacies of fashion design, discuss what is beauty, and learn how to discern true beauty from normal beauty',
	'cnmperalta@up.edu.ph'
);

drop table if exists class_list;
create table class_list(
	portal varchar(10) not null,
	studentemail varchar(50) not null, 
	isenrolled boolean default false,
	constraint student_pk Primary Key(portal, studentemail),
	constraint class_list_portal_fk Foreign Key(portal) References class(portal),
	constraint class_studentemail_fk Foreign Key(studentemail) References student(email)
);
	
insert into class_list values(
	'asdfghjklp', 
	'jlesguerra2@up.edu.ph'
);

insert into class_list values(
	'asdfghjklp', 
	'jprmyrealonda@up.edu.ph'
);

insert into class_list values(
	'zxcvbnmtre', 
	'jdelacruz32@up.edu.ph'
);

insert into class_list values(
	'abcdefghij',
	'jprmyrealonda@up.edu.ph'
);

drop table if exists requirement cascade;
create table requirement (
	id varchar(10) not null, 
	description text,
	name varchar(50) not null,
	type varchar(20) not null, 
	duedate timestamp not null, 
	maxgrade numeric(3) not null, 
	classportal varchar(10) not null,
	teacheremail varchar(50) not null, 
	constraint requirement_requirementid_pk Primary Key(id, classportal),
	constraint requirement_classportal_fk Foreign Key(classportal) References class(portal),
	constraint requirement_teacheremail_fk Foreign Key(teacheremail) References teacher(email) 
);

drop table if exists requirement_passed;
create table requirement_passed (
	requirementid varchar(10) not null, 
	classportal varchar(10) not null,
	studentemail varchar(50) not null, 
	grade numeric(3) not null, 
	submissiondate timestamp not null, 
	constraint requirement_Passed_pk Primary Key(requirementid, classportal, studentemail),
	constraint requirement_Passed_Requirementid_fk Foreign Key(requirementid, classportal) References Requirement(id, classportal),
	constraint requirement_passed_studentemai_fk Foreign Key(studentemail) References student(email)
);

insert into Requirement(id, description, name, type, duedate, maxgrade, classportal, teacheremail) 
values(
	'1',
	'Eessay on the history of fashion', 
	'Essay 1',
	'Essay', 
	current_timestamp, 
	100, 
	'abcdefghij', 
	'cnmperalta@up.edu.ph'
);

insert into Requirement(id, description, name, type, duedate, maxgrade, classportal, teacheremail)
values(
	'2',
	'Exercise on fashion design', 
	'Exer 12', 
	'Exercise', 
	current_timestamp, 
	100, 
	'asdfghjklp', 
	'cnmperalta@up.edu.ph'
);

insert into Requirement(id, description, name, type, duedate, maxgrade, classportal, teacheremail) 
values(
	'1',
	'',
	'',
	'Essay', 
	current_timestamp, 
	20, 
	'asdfghjklp',
	'cnmperalta@up.edu.ph'
);

insert into Requirement_Passed 
values(
	'1', 
	'abcdefghij', 
	'jprmyrealonda@up.edu.ph', 
	12, 
	current_timestamp
);

insert into Requirement_Passed 
values(
	'2', 
	'asdfghjklp', 
	'jlesguerra2@up.edu.ph', 
	12, 
	current_timestamp
);

insert into Requirement_Passed 
values(
	'1', 
	'asdfghjklp', 
	'jlesguerra2@up.edu.ph', 
	14, 
	current_timestamp
);

drop table if exists fileupload;
create table fileupload(
	fileno serial not null,
	filename varchar(25) not null,
	filedescription text,
	classportal varchar(10) not null,
	constraint fileupload_fileno_pk Primary Key(fileno),
	constraint fileupload_classportal_fk Foreign Key(classportal) References class(portal)
);

insert into fileupload(filename, filedescription, classportal)
values(
	'SEXED 101 Handout1.pdf', 
	'1st Handout for SEXED 101 Laborotary 1S1516', 
	'abcdefghij'
);

insert into fileupload(filename, filedescription, classportal)
values(
	'FASH 1 Handout1.pdf', 
	'1st Handout for FASH 1 Laborotary 1S1516', 
	'asdfghjklp'
);

insert into fileupload(filename, filedescription, classportal)
values(
	'FASH 1 Handout2.pdf', 
	'2nd Handout for FASH 1 Laborotary 1S1516', 
	'asdfghjklp'
);
