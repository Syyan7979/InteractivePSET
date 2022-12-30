-- Create Pset
DROP PROCEDURE IF EXISTS create_pset;
CREATE PROCEDURE create_pset(
    IN pID VARCHAR(14),
    IN cID VARCHAR(14),
    IN pNum INT,
    IN pTitle VARCHAR(128),
    IN pDesc VARCHAR(255),
    IN dur BIGINT,
    IN dueDate BIGINT,
    IN itemsCount INT
)
BEGIN
CREATE TEMPORARY TABLE psetDetails(
    `pset_id` VARCHAR(14) NOT NULL,
    `course_id` VARCHAR(14) NOT NULL,
    `pset_num` INT NOT NULL,
    `pset_title` VARCHAR(128) NOT NULL,
    `pset_desc` VARCHAR(255),
    `start_time` BIGINT,
    `duration` BIGINT,
    `due_date` BIGINT,
    `submit_time` BIGINT,
    `items_count` INT,
    `score` FLOAT
);
INSERT INTO psetDetails
    (pset_id, course_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score) 
VALUES
    (pID, cID, pNum, pTitle, pDesc, NULL, dur, due_date, NULL, itemsCount, NULL);
INSERT INTO pset 
    (pset_id, course_id, student_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score)
SELECT 
    pset_id, course_id, student_id, pset_num, pset_title, pset_desc, start_time, duration, due_date, submit_time, items_count, score
FROM
    psetDetails a CROSS JOIN (SELECT student_id FROM course WHERE course_id = cID AND student_id != 'default_value') b;
DROP TEMPORARY TABLE psetDetails;
END;

-- Delete Pset
DROP PROCEDURE IF EXISTS delete_pset;
CREATE PROCEDURE delete_pset(
    IN pID VARCHAR(14)
)
BEGIN
DELETE FROM item WHERE pset_id = pID;
DELETE FROM pset WHERE pset_id = pID;
END;

-- General patching by pset_id
DROP PROCEDURE IF EXISTS general_patching;
CREATE PROCEDURE general_patching(
    IN pID VARCHAR(14),
    IN pNum INT,
    IN pTitle VARCHAR(128),
    IN pDesc VARCHAR(255),
    IN dur BIGINT,
    IN dueDate BIGINT
)
BEGIN
UPDATE
    pset
SET
    pset_num = COALESCE(pset_num, pNum),
    pset_title = COALESCE(pset_title, pTitle),
    pset_desc = COALESCE(pset_desc, pDesc),
    duration = COALESCE(duration, dur),
    due_date = COALESCE(due_date, dueDate)
WHERE pset_id = pID;
END;

-- Patch specific Pset by pset_id and student_id
DROP PROCEDURE IF EXISTS specific_patching;
CREATE PROCEDURE specific_patching(
    IN pID VARCHAR(14),
    IN sID VARCHAR(14),
    IN sTime BIGINT,
    IN subTime BIGINT,
    IN scre FLOAT
)
BEGIN
UPDATE
    pset
SET
    start_time = COALESCE(start_time, sTime),
    submit_time = COALESCE(submit_time, subTime),
    score = COALESCE(score, scre)
WHERE pset_id = pID AND student_id = sID;
END;

-- Get Specific Pset by pset_id and student_id
DROP PROCEDURE IF EXISTS get_specific_pset;
CREATE PROCEDURE get_specific_pset(
    IN pID VARCHAR(14),
    IN sID VARCHAR(14)
)
BEGIN
SELECT * FROM pset WHERE pset_id = pID AND student_id = sID;
END;

-- Get all psets by student_id
DROP PROCEDURE IF EXISTS get_student_pset;
CREATE PROCEDURE get_student_pset(
    IN sID VARCHAR(14)
)
BEGIN
SELECT * FROM pset WHERE student_id = sID;
END;

-- Get all psets
DROP PROCEDURE IF EXISTS get_all_psets;
CREATE PROCEDURE get_all_psets()
BEGIN
SELECT * FROM pset;
END;