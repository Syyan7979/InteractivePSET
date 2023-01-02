/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `attempt`(
    `item_id` INT NOT NULL,
    `pset_id` INT NOT NULL,
    `course_id` INT NOT NULL,
    `student_id` INT NOT NULL,
    `attempt_id` INT NOT NULL AUTO_INCREMENT,
    `student_feedback` VARCHAR(1000),
	`is_correct` CHAR(1) NOT NULL,
    `float_answer` FLOAT NOT NULL,
    `submit_datetime` DATETIME NOT NULL,
    PRIMARY KEY (`attempt_id`),
    FOREIGN KEY (`item_id`) REFERENCES item(`item_id`) ON DELETE CASCADE,
    FOREIGN KEY (`pset_id`) REFERENCES pset(`pset_id`) ON DELETE CASCADE,
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES users(`user_id`) ON DELETE CASCADE
);


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

-- Item patching
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