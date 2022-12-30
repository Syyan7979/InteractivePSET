/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `user`(
    `user_id` VARCHAR(14) NOT NULL,
    `user_name` VARCHAR(15) NOT NULL,
    `user_email` VARCHAR(320) NOT NULL,
    `user_password` VARCHAR (128) NOT NULL,
    `user_dp` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(64),
    `last_name` VARCHAR(64),
    `birthday` BIGINT NOT NULL,
    `age` INT NOT NUll,
    `teacher` TINYINT(1),
    PRIMARY KEY (`user_id`)
);

CREATE TABLE IF NOT EXISTS `course`(
    `course_id` VARCHAR(14) NOT NULL,
    `course_name` VARCHAR(15) NOT NULL,
    `student_id` VARCHAR(14),
    `teacher_id` VARCHAR (14) NOT NULL,
    `teacher_name` VARCHAR (128) NOT NULL,
    `course_desc` VARCHAR(255),
    `enrollment_key` VARCHAR(128) NOT NULL,
    PRIMARY KEY (`course_id`, `student_id`)
);

CREATE TABLE IF NOT EXISTS `pset`(
    `pset_id` VARCHAR(14) NOT NULL,
    `course_id` VARCHAR(14) NOT NULL,
    `student_id` VARCHAR(14) NOT NULL,
    `pset_num` INT NOT NULL,
    `pset_title` VARCHAR(128) NOT NULL,
    `pset_desc` VARCHAR(255),
    `start_time` BIGINT,
    `duration` BIGINT,
    `due_date` BIGINT,
    `submit_time` BIGINT,
    `items_count` INT,
    `score` FLOAT,
    PRIMARY KEY (`pset_id`, `student_id`)
);

CREATE TABLE IF NOT EXISTS `item`(
    `item_id` VARCHAR(14) NOT NULL,
    `pset_id` VARCHAR(14) NOT NULL,
    `student_id` VARCHAR(14) NOT NULL,
    `item_num` INT NOT NULL,
    `problem` VARCHAR(1000) NOT NULL,
    `correct_answer` VARCHAR(1000) NOT NULL,
    `student_answer` VARCHAR(1000),
    `feedback` VARCHAR(1000),
    `score` FLOAT,
    PRIMARY KEY (`item_id`, `student_id`)
);