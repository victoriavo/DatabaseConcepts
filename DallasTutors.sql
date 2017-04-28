-- phpMyAdmin SQL Dump
-- version 4.6.6deb1+deb.cihar.com~xenial.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 28, 2017 at 06:00 PM
-- Server version: 5.7.18-0ubuntu0.16.04.1
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DallasTutors`
--

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE `Courses` (
  `course_name` text NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` (`course_name`, `course_id`) VALUES
('Advanced Placement Environmental Science', 1000),
('Advanced Placement Calculus AB', 1001),
('Advanced Placement Calculus BC', 1002),
('Advanced Placement American Government', 1003),
('Advanced Placement World History', 1004),
('Advanced Placement American History', 1005),
('Advanced Placement Statistics', 1006);

-- --------------------------------------------------------

--
-- Table structure for table `Courses Taught`
--

CREATE TABLE `Courses Taught` (
  `tutor_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Courses Taught`
--

INSERT INTO `Courses Taught` (`tutor_id`, `course_id`) VALUES
(4, 1000),
(11, 1003),
(11, 1004),
(11, 1005);

-- --------------------------------------------------------

--
-- Table structure for table `Course Subjects`
--

CREATE TABLE `Course Subjects` (
  `subject_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `High Schools`
--

CREATE TABLE `High Schools` (
  `high_school_name` text NOT NULL,
  `high_school_id` int(11) NOT NULL,
  `zip` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `High Schools`
--

INSERT INTO `High Schools` (`high_school_name`, `high_school_id`, `zip`) VALUES
('Greenhill School', 4324, 75001),
('Parish Episcopal School', 4327, 75254),
('St Mark\'s School of Texas', 4326, 75230),
('Hockaday School', 4235, 75229);

-- --------------------------------------------------------

--
-- Table structure for table `High School Subjects`
--

CREATE TABLE `High School Subjects` (
  `high_school_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Photos`
--

CREATE TABLE `Photos` (
  `id` int(11) NOT NULL,
  `photo` blob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Photos`
--

INSERT INTO `Photos` (`id`, `photo`) VALUES
(2, NULL),
(1, NULL),
(3, NULL),
(4, NULL),
(11, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Ratings`
--

CREATE TABLE `Ratings` (
  `rating_id` int(11) NOT NULL,
  `rating_value` int(11) NOT NULL,
  `tutor_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Sessions`
--

CREATE TABLE `Sessions` (
  `tutor_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `isAccepted` tinyint(1) NOT NULL DEFAULT '0',
  `time_requested` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_accepted` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Sessions`
--

INSERT INTO `Sessions` (`tutor_id`, `student_id`, `course_id`, `isAccepted`, `time_requested`, `time_accepted`) VALUES
(1, 3, 5, 0, '2017-04-19 02:31:24', NULL),
(1, 3, 5, 0, '2017-04-19 02:31:28', NULL),
(1, 2, 6, 0, '2017-04-19 04:44:27', NULL),
(4, 2, 6, 0, '2017-04-19 04:51:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Students`
--

CREATE TABLE `Students` (
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `student_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `high_school` text,
  `graduation_year` text,
  `bio` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Students`
--

INSERT INTO `Students` (`first_name`, `last_name`, `student_id`, `email`, `password`, `high_school`, `graduation_year`, `bio`) VALUES
('Bob', 'Bobbert', 2, 'bbobbert@greenhill.org', 'peacocksrockmysocks', 'Greenhill School', '2020', 'Hello, my name is Bob.  I am looking for a tutor to help me with APES and AB Calculus.'),
('Monica', 'Lee', 3, 'leemo@hockaday.edu', 'k1tt3nm1tt3n$', 'The Hockaday School', '2018', 'Hi!  I\'m Monica and I go to Hockaday.  I need help with the ACT, specifically in the Science section.  I would greatly appreciate your help!'),
('does', 'thiswork', 24, 'hopefully@gmail.com', 'idk', NULL, NULL, NULL),
('test2', 'test2', 28, 'test2@gmail.com', 'testing123', NULL, NULL, NULL),
('Kitty', 'Kat', 29, 'meow@gmail.com', 'meow', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Subjects`
--

CREATE TABLE `Subjects` (
  `subject_name` text NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Subjects`
--

INSERT INTO `Subjects` (`subject_name`, `subject_id`) VALUES
('Science', 1),
('Math', 2),
('History', 3),
('Standardized Tests', 4);

-- --------------------------------------------------------

--
-- Table structure for table `Tutors`
--

CREATE TABLE `Tutors` (
  `tutor_id` int(11) NOT NULL,
  `first_name` longtext NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `past_high_school` text,
  `bio` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tutors`
--

INSERT INTO `Tutors` (`tutor_id`, `first_name`, `last_name`, `email`, `password`, `past_high_school`, `bio`) VALUES
(1, 'Maya', 'Playa', 'mayaplayalovesmargs@gmail.com', 'margs', 'Some High School In Dallas', 'Hi, I go to Some High School In Dallas. I am looking for help. '),
(4, 'Harrison', 'Fields', 'hfields@smu.edu', 'f13ld0fdr3@m$', 'St. Mark\'s School of Texas', 'Howdy!  I\'m Harrison, I\'m a Mechanical Engineering Major at SMU who specializes in Calculus and Physics tutoring.  Let me know if you need any help!'),
(11, 'Pauline', 'Woodson', 'pawoodson@smu.edu', 'd@@@mns0n', 'Hockaday School', 'I\'m Pauline, I graduated from Hockaday in 2015 and I can help you with any of the AP History classes!'),
(12, 'Langston', 'Kuiper', 'thelangman@gmail.com', 'r0m@nc3l@ngu@age', 'Parish Episcopal School', 'Yo!  Langston here, need help with programming?  I\'m your man!'),
(22, 'Adam', 'Apple', 'applesandoranges@gmail.com', 'whoops', NULL, NULL),
(23, 'victoria', 'isgettingsick', 'soconfused@gmail.com', 'help', NULL, NULL),
(25, 'victoria', 'villanova', 'sotiredofthis@gmail.com', 'thissucks', NULL, NULL),
(26, 'victoria', 'villanova', 'sotiredofthis@gmail.com', 'thissucks', NULL, NULL),
(27, 'test1', 'test1', 'test1@gmail.com', 'testing123', NULL, NULL),
(30, 'Maya', 'Playa', 'playamaya@gmail.com', 'password1', NULL, NULL),
(31, 'Test', 'User', 'testuser', 'testpass', NULL, NULL),
(32, 'Test2', 'User2', 'testuser2', '$2y$15$8MdmrIecqGVlag5Stvwgc.bhSgGayipZHP3.w3cRxq45iGHP01B1G', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `first_name` longtext NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'Maya', 'Playa', 'mayaplayalovesmargs@gmail.com', 'margs'),
(2, 'Bob', 'Bobbert', 'bbobbert@greenhill.org', 'peacocksrockmysocks'),
(3, 'Monica', 'Lee', 'leemo@hockaday.edu', 'k1tt3nm1tt3n$'),
(4, 'Harrison', 'Fields', 'hfields@smu.edu', 'f13ld0fdr3@m$'),
(11, 'Pauline', 'Woodson', 'pawoodson@smu.edu', 'd@@@mns0n'),
(12, 'Langston', 'Kuiper', 'thelangman@gmail.com', 'r0m@nc3l@ngu@age'),
(14, 'Marshall', 'Mathers', 'eminem@gmail.com', 'Mathers'),
(17, 'victoria', 'isgettingsick', 'soconfused@gmail.com', 'help'),
(18, 'victoria', 'isgettingsick', 'soconfused@gmail.com', 'help'),
(19, 'victoria', 'isgettingsick', 'soconfused@gmail.com', 'help'),
(20, 'victoria', 'isgettingsick', 'soconfused@gmail.com', '$1$C4j66Qv1$ON6pKm8ieAhKNodH6rrZ0/'),
(21, 'Adam', 'Apple', 'applesandoranges@gmail.com', 'whoops'),
(22, 'Adam', 'Apple', 'applesandoranges@gmail.com', 'whoops'),
(23, 'victoria', 'isgettingsick', 'soconfused@gmail.com', 'help'),
(24, 'does', 'thiswork', 'hopefully@gmail.com', '$1$19bzep6c$269kTgdi7UvNpfoW/WfY//'),
(25, 'victoria', 'villanova', 'sotiredofthis@gmail.com', 'thissucks'),
(26, 'victoria', 'villanova', 'sotiredofthis@gmail.com', 'thissucks'),
(27, 'test1', 'test1', 'test1@gmail.com', 'testing123'),
(28, 'test2', 'test2', 'test2@gmail.com', '$1$ldFSWWTv$0TBlIrcj8t1Ic6wNpr4Oa.'),
(29, 'Kitty', 'Kat', 'meow@gmail.com', '$1$2DNcOJZs$wBlRmqjuN.nsIe0qrnp740'),
(30, 'Maya', 'Playa', 'playamaya@gmail.com', 'password1'),
(31, 'Test', 'User', 'testuser', 'testpass'),
(32, 'Test2', 'User2', 'testuser2', '$2y$15$ewl6lxHQmjXueI1grIJ9/.v70jHAn6cladsrjpMBInf.18NS91g.G');

-- --------------------------------------------------------

--
-- Table structure for table `Web Sessions`
--

CREATE TABLE `Web Sessions` (
  `tutor_id` int(11) NOT NULL,
  `authorization` text,
  `login_time` datetime DEFAULT NULL,
  `logout_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `Tutors`
--
ALTER TABLE `Tutors`
  ADD PRIMARY KEY (`tutor_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Web Sessions`
--
ALTER TABLE `Web Sessions`
  ADD PRIMARY KEY (`tutor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Students`
--
ALTER TABLE `Students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
