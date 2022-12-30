-- Create Item
DROP PROCEDURE IF EXISTS create_item;
CREATE PROCEDURE create_item(
    IN iID VARCHAR(14),
    IN pID VARCHAR(14),
    IN iNum INT,
    IN prob VARCHAR(1000),
    IN cAns VARCHAR(1000)
)
BEGIN
CREATE TEMPORARY TABLE itemDetails(
    `item_id` VARCHAR(14) NOT NULL,
    `pset_id` VARCHAR(14) NOT NULL,
    `item_num` INT NOT NULL,
    `problem` VARCHAR(1000) NOT NULL,
    `correct_answer` VARCHAR(1000) NOT NULL,
    `student_answer` VARCHAR(1000),
    `feedback` VARCHAR(1000),
    `score` FLOAT
);
INSERT INTO itemDetails
    (item_id, pset_id, item_num, problem, correct_answer, student_answer, feedback, score) 
VALUES
    (iID, pID, iNum, prob, cAns, NULL, NULL, NULL);
INSERT INTO item 
    (item_id, pset_id, student_id, item_num, problem, correct_answer, student_answer, feedback, score)
SELECT 
    item_id, pset_id, student_id, item_num, problem, correct_answer, student_answer, feedback, score
FROM
    itemDetails a CROSS JOIN (SELECT student_id FROM pset WHERE pset_id = pID) b;
DROP TEMPORARY TABLE itemDetails;
END;

-- Delete Item
DROP PROCEDURE IF EXISTS delete_item;
CREATE PROCEDURE delete_item(
    IN iID VARCHAR(14)
)
BEGIN
DELETE FROM item where item_id = iID;
END;

-- General Item patching
DROP PROCEDURE IF EXISTS general_item_patching;
CREATE PROCEDURE general_item_patching(
    IN iID VARCHAR(14),
    IN iNum INT,
    IN prob VARCHAR(1000),
    IN cAns VARCHAR(1000)
)
BEGIN
UPDATE
    item
SET
    item_num = COALESCE(item_num, iNum),
    problem = COALESCE(problem, prob),
    correct_answer = COALESCE(correct_answer, cAns)
WHERE item_id = iID;
END;

-- Specific Item patching
DROP PROCEDURE IF EXISTS specific_item_patching;
CREATE PROCEDURE specific_item_patching(
    IN iID VARCHAR(14),
    IN sID VARCHAR(14),
    IN sAns VARCHAR(1000),
    IN fback VARCHAR(1000),
    IN scr FLOAT
)
BEGIN
UPDATE
    item
SET
    student_answer = COALESCE(student_answer, sAns),
    feedback = COALESCE(feedback, fback),
    score = COALESCE(score, scr)
WHERE item_id = iID AND student_id = sID;
END;

-- Get specific item from item_id and student_id
DROP PROCEDURE IF EXISTS get_specific_item;
CREATE PROCEDURE get_specific_item(
    IN iID VARCHAR(14),
    IN sID VARCHAR(14)
)
BEGIN
SELECT * FROM item WHERE item_id = iID AND student_id = sID;
END;

-- Get items from pset_id and a student_id
DROP PROCEDURE IF EXISTS get_pset_items;
CREATE PROCEDURE get_pset_items(
    IN pID VARCHAR(14),
    IN sID VARCHAR(14)
)
BEGIN
SELECT * FROM item WHERE pset_id = pID AND student_id = sID;
END;

-- Get all items
DROP PROCEDURE IF EXISTS get_all_items;
CREATE PROCEDURE get_all_items()
BEGIN
SELECT * FROM item;
END;