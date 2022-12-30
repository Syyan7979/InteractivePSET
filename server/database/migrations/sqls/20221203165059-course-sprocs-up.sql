-- create new course
DROP PROCEDURE IF EXISTS create_course;
CREATE PROCEDURE create_course(
    IN cID VARCHAR(14),
    IN cName VARCHAR(15),
    IN tchrID VARCHAR (14),
    IN tchrName VARCHAR (128),
    IN cDesc VARCHAR(255),
    IN eKey VARCHAR(128)
)
BEGIN
INSERT INTO
    course
(course_id, course_name, student_id, teacher_id, teacher_name, course_desc, enrollment_key)
VALUES
(cID, cName, 'default_value', tchrID, tchrName, cDesc, eKey);
END;

-- enroll course
DROP PROCEDURE IF EXISTS enroll_course;
CREATE PROCEDURE enroll_course(
    IN cID VARCHAR(14),
    IN cName VARCHAR(15),
    IN sID VARCHAR(14),
    IN tchrID VARCHAR (14),
    IN tchrName VARCHAR (128),
    IN cDesc VARCHAR(255),
    IN eKey VARCHAR(128)
)
BEGIN
CREATE TEMPORARY TABLE StudentTemp(
    `student_id` VARCHAR(14) NOT NULL
);
INSERT INTO StudentTemp 
    (student_id)
VALUES
    (sID);
INSERT INTO
    course
(course_id, course_name, student_id, teacher_id, teacher_name, course_desc, enrollment_key)
VALUES
(cID, cName, sID, tchrID, tchrName, cDesc, eKey);
INSERT INTO pset 
    (pset_id, course_id, student_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score)
SELECT 
    pset_id, course_id, student_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score
FROM
    StudentTemp a 
        CROSS JOIN 
    (SELECT DISTINCT
        pset_id, course_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score 
    FROM 
        pset 
    WHERE course_id = cID) b;
INSERT INTO item
    (item_id, pset_id, student_id, item_num, problem, correct_answer, student_answer, feedback, score)
SELECT 
    item_id, pset_id, student_id, item_num, problem, correct_answer, student_answer, feedback, score
FROM
    StudentTemp a 
        CROSS JOIN 
    (SELECT DISTINCT 
        item_id, pset_id, item_num, problem, correct_answer, student_answer, feedback, score 
    FROM item WHERE pset_id in 
        (SELECT DISTINCT pset_id FROM pset WHERE course_id = cID)) b;
DROP TEMPORARY TABLE StudentTemp;
END;

-- delete course
DROP PROCEDURE IF EXISTS delete_course;
CREATE PROCEDURE delete_course(
    IN cID VARCHAR(14)
)
BEGIN
DELETE FROM item WHERE pset_id in (SELECT DISTINCT pset_id FROM pset WHERE course_id = cID);
DELETE FROM pset WHERE course_id = cID;
DELETE FROM course WHERE course_id = cID;
END;

-- drop course
DROP PROCEDURE IF EXISTS drop_course;
CREATE PROCEDURE drop_course(
    IN cID VARCHAR(14),
    IN sID VARCHAR(14)
)
BEGIN
DELETE FROM item WHERE pset_id IN (SELECT DISTINCT pset_id FROM pset WHERE course_id = cID) AND student_id = sID;
DELETE FROM pset WHERE course_id = cID AND student_id = sID;
DELETE FROM course WHERE course_id = cID AND student_id = sID;
END;

-- patch course
DROP PROCEDURE IF EXISTS patch_course;
CREATE PROCEDURE patch_course(
    IN cID VARCHAR(14),
    IN cName VARCHAR(15),
    IN sID VARCHAR(14),
    IN tchrID VARCHAR (14),
    IN tchrName VARCHAR (128),
    IN cDesc VARCHAR(255),
    IN eKey VARCHAR(128)
)
BEGIN
UPDATE
    course
SET
    course_name = COALESCE(course_name, cName),
    student_id = COALESCE(student_id, sID),
    teacher_id = COALESCE(teacher_id, tchrID),
    teacher_name = COALESCE(teacher_name, tchrName),
    course_desc = COALESCE(course_desc, cDesc),
    enrollment_key = COALESCE(enrollment_key, eKey)
WHERE
    course_id = cID;
END;

-- get specific course
DROP PROCEDURE IF EXISTS get_course;
CREATE PROCEDURE get_course(
    IN cID VARCHAR(14)
)
BEGIN
SELECT * FROM course WHERE course_id = cID AND student_id = 'default_value';
END;

-- get all courses
DROP PROCEDURE IF EXISTS get_all_courses;
CREATE PROCEDURE get_all_courses()
BEGIN
SELECT * FROM course WHERE  student_id = 'default_value';
END;

-- enroll validation
DROP PROCEDURE IF EXISTS enroll_validation;
CREATE PROCEDURE enroll_validation(
    IN cID VARCHAR(14),
    IN eKey VARCHAR(128)
)
BEGIN
SELECT * FROM course WHERE course_id = cID AND enrollment_key = eKey;
END;
