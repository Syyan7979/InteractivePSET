-- Create User
DROP PROCEDURE IF EXISTS create_user;
CREATE PROCEDURE create_user(
    IN uName VARCHAR(100),
    IN uEmail VARCHAR(100),
    IN uPassword VARCHAR(128),
    IN uDP VARCHAR(255),
    IN firstName VARCHAR(50),
    IN lastName VARCHAR(50),
    IN uRole CHAR(1) -- T if teacher, S if student
)
BEGIN
	INSERT INTO
		users
		(user_name, user_email, user_password, user_dp, first_name, last_name, role)
	VALUES
		(uName, uEmail, uPassword, uDP, firstName, lastName, uRole);
END;

-- Delete User
DROP PROCEDURE IF EXISTS delete_user;
CREATE PROCEDURE delete_user(
	IN uID INT
)
BEGIN
DELETE FROM users WHERE user_id = uID;
END;

-- Patching User
CREATE PROCEDURE patch_user(
    IN uID INT,
    IN uName VARCHAR(100),
    IN uEmail VARCHAR(100),
    IN uPassword VARCHAR(128),
    IN uDP VARCHAR(255),
    IN firstName VARCHAR(50),
    IN lastName VARCHAR(50),
    IN uRole CHAR(1)
)
BEGIN
UPDATE
    users
SET
    user_name = COALESCE(user_name, uName),
    email = COALESCE(email, uEmail),
    user_password = COALESCE(user_password, uPassword),
    user_dp = COALESCE(user_dp, uDP),
    first_name = COALESCE(first_name, firstName),
    last_name = COALESCE(last_name, lastName),
    role = COALESCE(uRole, role)
WHERE
    user_id = uID;
END;

-- Getting Specific User
DROP PROCEDURE IF EXISTS get_user;
CREATE PROCEDURE get_user(
	IN uID INT
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, role
FROM
	users
WHERE user_id = uID;
END;

-- Getting All Users
DROP PROCEDURE IF EXISTS get_all_users;
CREATE PROCEDURE get_all_users()
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, role
FROM
	users;
END;

-- Getting All students
DROP PROCEDURE IF EXISTS get_students;
CREATE PROCEDURE get_students(
	IN uID INT
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, role
FROM
	users
WHERE role = 'S';
END;

-- Getting All teachers
DROP PROCEDURE IF EXISTS get_teachers;
CREATE PROCEDURE get_teachers(
	IN uID INT
)
BEGIN
SELECT 
	user_id, user_name, user_email, user_dp, first_name, last_name, role
FROM
	users
WHERE role = 'T';
END;

-- Login Validation via email
DROP PROCEDURE IF EXISTS email_login_validation;
CREATE PROCEDURE email_login_validation(
	IN uEmail VARCHAR(100),
    IN uPassword VARCHAR(128)
)
BEGIN
SELECT 
	user_id, user_password
FROM
	users
WHERE user_email = uEmail AND user_password = uPassword;
END;

-- Login Validation via username
DROP PROCEDURE IF EXISTS user_name_login_validation;
CREATE PROCEDURE user_name_login_validation(
	IN uName VARCHAR(100),
    IN uPassword VARCHAR(128)
)
BEGIN
SELECT 
	user_id, user_password
FROM
	users
WHERE user_name = uName AND user_password = uPassword;
END;