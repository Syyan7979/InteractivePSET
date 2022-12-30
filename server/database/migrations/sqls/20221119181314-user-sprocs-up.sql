-- Create User
DROP PROCEDURE IF EXISTS create_user;
CREATE PROCEDURE create_user(
	IN uID VARCHAR(14),
    IN uName VARCHAR(15),
    IN uEmail VARCHAR(320),
    IN uPassword VARCHAR (128),
    IN uDP VARCHAR(255),
    IN firstName VARCHAR(64),
    IN lastName VARCHAR(64),
    IN bDay BIGINT,
    IN a INT,
    IN tchr TINYINT
)
BEGIN
INSERT INTO
	user
(user_id, user_name, user_email, user_password, user_dp, first_name, last_name, birthday, age, teacher)
	VALUES
(uID, uName, uEmail, uPassword, uDP, firstName, lastName, bDay, a, tchr);
END;

-- Delete User
DROP PROCEDURE IF EXISTS delete_user;
CREATE PROCEDURE delete_user(
	IN uID VARCHAR(14)
)
BEGIN
DELETE FROM course WHERE student_id = uID OR teacher_id = uID;
DELETE FROM pset WHERE student_id = uID;
DELETE FROM item WHERE student_id = uID;
DELETE FROM user WHERE user_id = uID;
END;

-- Patching User
CREATE PROCEDURE patch_user(
    IN uID VARCHAR(14),
    IN uName VARCHAR(15),
    IN uEmail VARCHAR(320),
    IN uPassword VARCHAR (128),
    IN uDP VARCHAR(255),
    IN firstName VARCHAR(64),
    IN lastName VARCHAR(64),
    IN bDay BIGINT,
    IN a INT,
    IN tchr TINYINT
)
BEGIN
UPDATE
    user
SET
    user_name = COALESCE(user_name, uName),
    user_email = COALESCE(user_email, uEmail),
    user_password = COALESCE(user_password, uPassword),
    user_dp = COALESCE(user_dp, uDP),
    first_name = COALESCE(first_name, firstName),
    last_name = COALESCE(last_name, lastName),
    birthday = COALESCE(birthday, bDay),
    age = COALESCE(age, a),
    teacher = COALESCE(teacher, tchr)
WHERE
    user_id = uID;
END;

-- Getting Specific User
DROP PROCEDURE IF EXISTS get_user;
CREATE PROCEDURE get_user(
	IN uID VARCHAR(14)
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, birthday, age, teacher
FROM
	user
WHERE user_id = uID;
END;

-- Getting All Users
DROP PROCEDURE IF EXISTS get_all_users;
CREATE PROCEDURE get_all_users()
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, birthday, age, teacher
FROM
	user;
END;

-- Getting All students
DROP PROCEDURE IF EXISTS get_students;
CREATE PROCEDURE get_students(
	IN uID VARCHAR(14)
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, birthday, age, teacher
FROM
	user
WHERE teacher = 0;
END;

-- Getting All teachers
DROP PROCEDURE IF EXISTS get_teachers;
CREATE PROCEDURE get_teachers(
	IN uID VARCHAR(14)
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, birthday, age, teacher
FROM
	user
WHERE teacher = 1;
END;

-- Login Validation via email
DROP PROCEDURE IF EXISTS email_login_validation;
CREATE PROCEDURE email_login_validation(
	IN uEmail VARCHAR(320),
    IN uPassword VARCHAR(128)
)
BEGIN
SELECT 
	user_id, user_password
FROM
	user
WHERE user_email = uEmail AND user_password = uPassword;
END;

-- Login Validation via username
DROP PROCEDURE IF EXISTS username_login_validation;
CREATE PROCEDURE username_login_validation(
	IN uName VARCHAR(15),
    IN uPassword VARCHAR(128)
)
BEGIN
SELECT 
	user_id, user_password
FROM
	user
WHERE user_name = uName AND user_password = uPassword;
END;