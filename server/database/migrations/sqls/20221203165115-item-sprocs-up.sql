-- Create Item
DROP PROCEDURE IF EXISTS create_item;
CREATE PROCEDURE create_item(
    IN pID INT,
    IN cID INT,
    IN iNum SMALLINT,
    IN prob VARCHAR(1000),
    IN postProb VARCHAR(300),
    IN pointVal FLOAT,
    IN parentID INT
)
BEGIN
INSERT INTO item
    (pset_id, course_id, render_order, problem, post_problem, points, parent) 
VALUES
    (pID, cID, iNum, prob, postProb, pointVal, parentID);

-- Delete Item
DROP PROCEDURE IF EXISTS delete_item;
CREATE PROCEDURE delete_item(
    IN iID INT
)
BEGIN
DELETE FROM item WHERE item_id = iID;
END;

-- Read items from Pset in render order
DROP PROCEDURE IF EXISTS read_items_from_pset;
CREATE PROCEDURE read_items_from_pset(
    IN pID INT
)
BEGIN
SELECT i1.*
FROM item AS i1
LEFT JOIN item AS i2 ON i1.pset_id = pID AND i1.parent = i2.item_id
ORDER BY i1.parent, i1.render_order;
END;

-- Item patching
DROP PROCEDURE IF EXISTS general_item_patching;
CREATE PROCEDURE general_item_patching(
    IN pID INT,
    IN cID INT,
    IN iNum SMALLINT,
    IN prob VARCHAR(1000),
    IN postProb VARCHAR(300),
    IN pointVal FLOAT,
    IN parentID INT
)
BEGIN
UPDATE
    item
SET
	pset_id = COALESCE(pset_id, pID),
	course_id = COALESCE(course_id, cID),
	render_order = COALESCE(render_order, iNum),
	problem = COALESCE(problem, prob),
	post_problem = COALESCE(post_problem, postProb),
	points = COALESCE(points, pointVal),
	parent = COALESCE(parent, parentID),
WHERE item_id = iID;
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