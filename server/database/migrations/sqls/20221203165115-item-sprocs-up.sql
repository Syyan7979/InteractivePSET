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
END;

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
LEFT JOIN item AS i2 ON i1.parent = i2.item_id
WHERE i1.pset_id = pID
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
	pset_id = COALESCE(pID, pset_id),
	course_id = COALESCE(cID, course_id),
	render_order = COALESCE(iNum, render_order),
	problem = COALESCE(prob, problem),
	post_problem = COALESCE(postProb, post_problem),
	points = COALESCE(pointVal, points),
	parent = COALESCE(parentID, parent)
WHERE item_id = iID;
END;

-- Get all items
DROP PROCEDURE IF EXISTS get_all_items;
CREATE PROCEDURE get_all_items()
BEGIN
SELECT * FROM item;
END;