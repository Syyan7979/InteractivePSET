/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `users`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `user_password` VARCHAR (128) NOT NULL,
    `user_dp` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `role` CHAR(1) NOT NULL,
    PRIMARY KEY (`user_id`)
);

CREATE TABLE IF NOT EXISTS `course`(
    `course_id` INT NOT NULL AUTO_INCREMENT,
    `course_name` VARCHAR(100) NOT NULL,
    `course_desc` VARCHAR(255) NOT NULL,
    `enrollment_key` VARCHAR(128) NOT NULL,
    `teacher_id` INT NOT NULL,
    PRIMARY KEY (`course_id`),
    FOREIGN KEY (`teacher_id`) REFERENCES users(`user_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `course_enroll`(
    `course_id` INT NOT NULL,
    `student_id` INT NOT NULL,
    PRIMARY KEY (`course_id`, `student_id`),
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES users(`user_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `pset`(
    `pset_id` INT NOT NULL AUTO_INCREMENT,
    `course_id` INT NOT NULL,
    `pset_title` VARCHAR(100) NOT NULL,
    `pset_desc` VARCHAR(255) NOT NULL,
    `due_datetime` DATETIME NOT NULL,
    `published` CHAR(1) NOT NULL,
    `float_tolerance` FLOAT NOT NULL,
    PRIMARY KEY (`pset_id`),
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `item`(
    `item_id` INT NOT NULL AUTO_INCREMENT,
    `pset_id` INT NOT NULL,
    `course_id` INT NOT NULL,
    `render_order` SMALLINT NOT NULL,
    `problem` VARCHAR(1000) NOT NULL,
    `post_problem` VARCHAR(300),
    `points` FLOAT NOT NULL,
    `parent` INT,
    PRIMARY KEY (`item_id`),
    FOREIGN KEY (`pset_id`) REFERENCES pset(`pset_id`) ON DELETE CASCADE,
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `attempt`(
    `item_id` INT NOT NULL,
    `pset_id` INT NOT NULL,
    `course_id` INT NOT NULL,
    `student_id` INT NOT NULL,
    `attempt_id` INT NOT NULL AUTO_INCREMENT,
    `student_feedback` VARCHAR(1000),
	`is_correct` CHAR(1) NOT NULL,
    `float_answer` FLOAT,
    `submit_datetime` DATETIME NOT NULL,
    PRIMARY KEY (`attempt_id`),
    PRIMARY KEY (`item_id`, `pset_id`, `course_id`, `student_id`),
    FOREIGN KEY (`item_id`) REFERENCES item(`item_id`) ON DELETE CASCADE,
    FOREIGN KEY (`pset_id`) REFERENCES pset(`pset_id`) ON DELETE CASCADE,
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES users(`user_id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `feedback`(
    `item_id` INT NOT NULL,
    `pset_id` INT NOT NULL,
    `course_id` INT NOT NULL,
    `feedback_id` INT NOT NULL,
    `feedback` VARCHAR(1000) NOT NULL,
	`is_correct` CHAR(1) NOT NULL,
    `float_answer` FLOAT,
    `submit_datetime` DATETIME NOT NULL,
    PRIMARY KEY (`item_id`, `pset_id`, `course_id`, `student_id`, `feedback_id`),
    PRIMARY KEY (`item_id`, `pset_id`, `course_id`, `student_id`),
    FOREIGN KEY (`item_id`) REFERENCES item(`item_id`) ON DELETE CASCADE,
    FOREIGN KEY (`pset_id`) REFERENCES pset(`pset_id`) ON DELETE CASCADE,
    FOREIGN KEY (`course_id`) REFERENCES course(`course_id`) ON DELETE CASCADE
);