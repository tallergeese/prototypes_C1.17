Place your queries below
-- FEATURE SET 1
SELECT * FROM `students` WHERE `username` = 'sgtdan'

UPDATE `students` SET `email`='newemail@mememail.com' WHERE `username`='sgtdan'

INSERT INTO `c117db`.`students` (`id`, `name`, `email`, `age`, `ssn`, `username`, `password`, `joined`, `status`) VALUES (NULL, 'Feature Set1', 'fs1@dfsdf.com', '23', '111555333', 'fs1', SHA1('hello'), NOW(), 'active')

DELETE FROM `students` WHERE `username`='fs1'

-- FEATURE SET 2

SELECT * FROM `todo_items` WHERE `user_id`='3'

INSERT INTO `c117db`.`todo_items` (`id`, `title`, `details`, `timestamp`,`user_id`) VALUES (NULL, 'do insert', 'insert all the things giggity', CURTIME(), '3')

DELETE FROM `todo_items` WHERE `user_id` = '3' AND `id`='2'

UPDATE `todo_items` SET `details` = 'insert all the things giggity UPDATE: giggity' WHERE `id` = '11' AND `user_id` = '3'

SELECT * FROM `students` WHERE `id` = 3