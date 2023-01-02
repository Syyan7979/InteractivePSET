-- create new course
DROP PROCEDURE IF EXISTS create_course;
CREATE PROCEDURE create_course(
    IN cName VARCHAR(100),
    IN cDesc VARCHAR(255),
    IN eKey VARCHAR(128),
    IN tID INT
)
BEGIN
INSERT INTO
    course
(course_name, course_desc, enrollment_key, teacher_id)
VALUES
(cName, cDesc, eKey, tID);
END;

-- enroll course
DROP PROCEDURE IF EXISTS enroll_course;
CREATE PROCEDURE enroll_course(
    IN cID INT,
    IN sID INT
)
BEGIN
INSERT INTO
	course_enroll
(course_id, student_id)
VALUES
(cID, sID);
END;

-- delete course
DROP PROCEDURE IF EXISTS delete_course;
CREATE PROCEDURE delete_course(
    IN cID INT
)
BEGIN
DELETE FROM course WHERE course_id = cID;
END;

-- drop course
DROP PROCEDURE IF EXISTS drop_course;
CREATE PROCEDURE drop_course(
    IN cID INT,
    IN sID INT
)
BEGIN
DELETE FROM course_enroll WHERE course_id = cID AND student_id = sID;
END;

-- patch course
DROP PROCEDURE IF EXISTS patch_course;
CREATE PROCEDURE patch_course(
	IN cID INT,
    IN cName VARCHAR(100),
    IN cDesc VARCHAR(255),
    IN eKey VARCHAR(128),
    IN tID INT
)
BEGIN
UPDATE
    course
SET
    course_name = COALESCE(cName, course_name),
    course_desc = COALESCE(cDesc, course_desc),
    enrollment_key = COALESCE(eKey, enrollment_key),
    teacher_name = COALESCE(tID, teacher_id)
WHERE
    course_id = cID;
END;

-- get specific course - student
DROP PROCEDURE IF EXISTS get_course_student;
CREATE PROCEDURE get_course_student(
    IN cID INT,
    IN sID INT
)
BEGIN
SELECT
	c.course_name,
    c.course_desc,
    c.teacher_id
FROM course_enroll ce
INNER JOIN course c ON ce.course_id = c.course_id
WHERE ce.course_id = cID AND ce.student_id = sID
LIMIT 1;
END;

-- get specific course - teacher
DROP PROCEDURE IF EXISTS get_course_teacher;
CREATE PROCEDURE get_course_teacher(
    IN cID INT,
    IN tID INT
)
BEGIN
SELECT
	c.course_name,
    c.course_desc,
    c.enrollment_key
FROM course c
WHERE c.course_id = cID and c.teacher_id = tID
LIMIT 1;
END;

-- get all courses - student
DROP PROCEDURE IF EXISTS get_all_courses_student;
CREATE PROCEDURE get_all_courses_student(
	IN sID INT
)
BEGIN
SELECT
	ce.course_id,
	c.course_name,
    c.course_desc,
    c.teacher_id
FROM course_enroll ce
INNER JOIN course c ON ce.course_id = c.course_id
WHERE ce.student_id = sID;
END;

-- get all courses - teacher
DROP PROCEDURE IF EXISTS get_all_courses_teacher;
CREATE PROCEDURE get_all_courses_teacher(
	IN tID INT
)
BEGIN
SELECT
	c.course_id,
	c.course_name,
    c.course_desc,
    c.enrollment_key
FROM course c
WHERE c.teacher_id = tID;
END;

-- enroll validation
DROP PROCEDURE IF EXISTS enroll_validation;
CREATE PROCEDURE enroll_validation(
    IN cID INT,
    IN eKey VARCHAR(128)
)
BEGIN
SELECT EXISTS(SELECT * FROM course WHERE course_id = cID AND enrollment_key = eKey LIMIT 1) as match_exists;
END;

-- get all students in course
DROP PROCEDURE IF EXISTS get_students_in_course;
CREATE PROCEDURE get_students_in_course(
    IN cID INT
)
BEGIN
SELECT 
    u.user_id,
    u.user_name,
    u.first_name,
    u.last_name
FROM users u
INNER JOIN course_enroll ce ON u.user_id = ce.student_id
WHERE ce.course_id = cID;
END;