-- Create Pset
DROP PROCEDURE IF EXISTS create_pset;
CREATE PROCEDURE create_pset(
    IN cID INT,
    IN pTitle VARCHAR(100),
    IN pDesc VARCHAR(255),
    IN dDatetime BIGINT,
    IN pub CHAR(1),
    IN fTolerance FLOAT
)
BEGIN
INSERT INTO pset 
    (course_id, pset_title, pset_desc, due_datetime, published, float_tolerance)
VALUES
	(cID, pTitle, pDesc, dDatetime, pub, fTolerance);
END;

-- Delete Pset
DROP PROCEDURE IF EXISTS delete_pset;
CREATE PROCEDURE delete_pset(
    IN pID INT
)
BEGIN
DELETE FROM pset WHERE pset_id = pID;
END;

-- Patching pset by pset_id
DROP PROCEDURE IF EXISTS patch_pset;
CREATE PROCEDURE patch_pset(
    IN pID INT,
    IN cID INT,
    IN pTitle VARCHAR(100),
    IN pDesc VARCHAR(255),
    IN dDatetime BIGINT,
    IN pub CHAR(1),
    IN fTolerance FLOAT
)
BEGIN
UPDATE
    pset
SET
	course_id = COALESCE(cID, course_id),
    pset_title = COALESCE(pTitle, pset_title),
    pset_desc = COALESCE(pDesc, pset_desc),
    due_datetime = COALESCE(dDatetime, due_datetime),
    published = COALESCE(pub, published),
    float_tolerance = COALESCE(fTolerance, float_tolerance)
WHERE pset_id = pID;
END;

-- Get all psets by course
DROP PROCEDURE IF EXISTS get_course_pset;
CREATE PROCEDURE get_course_pset(
    IN cID INT
)
BEGIN
SELECT * FROM pset WHERE course_id = cID
ORDER BY pset_id;
END;

-- Get all psets by student
DROP PROCEDURE IF EXISTS get_student_pset;
CREATE PROCEDURE get_student_pset(
    IN sID INT
)
BEGIN
SELECT * FROM course_enroll ce
LEFT JOIN pset p ON ce.student_id = sID AND p.course_id = ce.course_id
ORDER BY p.due_datetime;
END;

-- Get all psets
DROP PROCEDURE IF EXISTS get_all_psets;
CREATE PROCEDURE get_all_psets()
BEGIN
SELECT * FROM pset;
END;