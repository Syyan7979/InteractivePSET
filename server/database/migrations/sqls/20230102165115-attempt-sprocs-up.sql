/* Replace with your SQL commands */
-- Create Attempt
DROP PROCEDURE IF EXISTS create_attempt;
CREATE PROCEDURE create_attempt(
    IN iID INT,
    IN pID INT,
    IN cID INT,
    IN sID INT,
    IN iNum SMALLINT,
    IN sFeedback VARCHAR(1000),
    IN isCorrect CHAR(1),
    IN floatAns FLOAT,
    IN submitDate DATETIME
)
BEGIN
INSERT INTO attempt
    (item_id, pset_id, course_id, student_id, attempt_id, student_feedback, is_correct, float_answer, submit_datetime) 
VALUES
    (iID, pID, cID, sID, iNum, sFeedback, isCorrect, floatAns, submitDate);
END;

-- Delete Item
DROP PROCEDURE IF EXISTS delete_attempt;
CREATE PROCEDURE delete_attempt(
    IN aID INT
)
BEGIN
DELETE FROM attempt WHERE attempt_id = aID;
END;

-- Read attempts from item
DROP PROCEDURE IF EXISTS read_attempts_from_item;
CREATE PROCEDURE read_attempts_from_item(
    IN iID INT
)
BEGIN
SELECT *
FROM attempt
WHERE item_id = iID;
END;

-- Attempt patching
DROP PROCEDURE IF EXISTS general_attempt_patching;
CREATE PROCEDURE general_attempt_patching(
	IN aID INT,
    IN iID INT,
    IN pID INT,
    IN cID INT,
    IN sID INT,
    IN iNum SMALLINT,
    IN sFeedback VARCHAR(1000),
    IN isCorrect CHAR(1),
    IN floatAns FLOAT,
    IN submitDate DATETIME
)
BEGIN
UPDATE
    attempt
SET
	item_id = COALESCE(item_id, iID),
	pset_id = COALESCE(pset_id, pID),
	course_id = COALESCE(course_id, cID),
	student_id = COALESCE(student_id, sID),
	attempt_id = COALESCE(attempt_id, iNum),
	student_feedback = COALESCE(student_feedback, sFeedback),
	is_correct = COALESCE(is_correct, isCorrect),
	float_answer = COALESCE(float_answer, floatAns),
	submit_datetime = COALESCE(submit_datetime, submitDate)
WHERE attempt_id = aID;
END;