/* Replace with your SQL commands */
-- Create Attempt
DROP PROCEDURE IF EXISTS create_attempt;
CREATE PROCEDURE create_attempt(
    IN iID INT,
    IN pID INT,
    IN cID INT,
    IN sID INT,
    IN sFeedback VARCHAR(1000),
    IN isCorrect CHAR(1),
    IN floatAns FLOAT,
    IN submitDate BIGINT
)
BEGIN
INSERT INTO attempt
    (item_id, pset_id, course_id, student_id, student_feedback, is_correct, float_answer, submit_datetime) 
VALUES
    (iID, pID, cID, sID, sFeedback, isCorrect, floatAns, submitDate);
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
    IN iID INT,
    IN sID INT
)
BEGIN
SELECT *
FROM attempt
WHERE item_id = iID AND student_id = sID;
END;

-- Attempt patching
DROP PROCEDURE IF EXISTS general_attempt_patching;
CREATE PROCEDURE general_attempt_patching(
	IN aID INT,
    IN iID INT,
    IN pID INT,
    IN cID INT,
    IN sID INT,
    IN sFeedback VARCHAR(1000),
    IN isCorrect CHAR(1),
    IN floatAns FLOAT,
    IN submitDate BIGINT
)
BEGIN
UPDATE
    attempt
SET
	item_id = COALESCE(iID, item_id),
	pset_id = COALESCE(pID, pset_id),
	course_id = COALESCE(cID, course_id),
	student_id = COALESCE(sID, student_id),
	student_feedback = COALESCE(sFeedback, student_feedback),
	is_correct = COALESCE(isCorrect, is_correct),
	float_answer = COALESCE(floatAns, float_answer),
	submit_datetime = COALESCE(submitDate, submit_datetime)
WHERE attempt_id = aID;
END;

-- Get particular attempt
DROP PROCEDURE IF EXISTS get_attempt;
CREATE PROCEDURE get_attempt(
    IN aID INT
)
BEGIN
SELECT * FROM attempt WHERE attempt_id = aID;
END;