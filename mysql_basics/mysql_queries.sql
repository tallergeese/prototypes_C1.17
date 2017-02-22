Place your queries below
SELECT * FROM `students` WHERE `username` = 'sgtdan'

UPDATE `students` SET `email`='newemail@mememail.com' WHERE `username`='sgtdan'

INSERT INTO `c117db`.`students` (`id`, `name`, `email`, `age`, `ssn`, `username`, `password`, `joined`, `status`) VALUES (NULL, 'Feature Set1', 'fs1@dfsdf.com', '23', '111555333', 'fs1', SHA1('hello'), NOW(), 'active');

DELETE FROM `students` WHERE `username`='fs1'