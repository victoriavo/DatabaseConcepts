-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 19, 2017 at 10:03 PM
-- Server version: 5.5.54-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `DallasTutors`
--

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE IF NOT EXISTS `Courses` (
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

CREATE TABLE IF NOT EXISTS `Courses Taught` (
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

CREATE TABLE IF NOT EXISTS `Course Subjects` (
  `subject_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `High Schools`
--

CREATE TABLE IF NOT EXISTS `High Schools` (
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
('St Mark''s School of Texas', 4326, 75230),
('Hockaday School', 4235, 75229);

-- --------------------------------------------------------

--
-- Table structure for table `High School Subjects`
--

CREATE TABLE IF NOT EXISTS `High School Subjects` (
  `high_school_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Photos`
--

CREATE TABLE IF NOT EXISTS `Photos` (
  `id` int(11) NOT NULL,
  `photo` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Ratings`
--

CREATE TABLE IF NOT EXISTS `Ratings` (
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

CREATE TABLE IF NOT EXISTS `Sessions` (
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

CREATE TABLE IF NOT EXISTS `Students` (
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `student_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `high_school` text NOT NULL,
  `graduation_year` text NOT NULL,
  `bio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Students`
--

INSERT INTO `Students` (`first_name`, `last_name`, `student_id`, `email`, `password`, `high_school`, `graduation_year`, `bio`) VALUES
('Bob', 'Bobbert', 2, 'bbobbert@greenhill.org', 'peacocksrockmysocks', 'Greenhill School', '2020', 'Hello, my name is Bob.  I am looking for a tutor to help me with APES and AB Calculus.'),
('Monica', 'Lee', 3, 'leemo@hockaday.edu', 'k1tt3nm1tt3n$', 'The Hockaday School', '2018', 'Hi!  I''m Monica and I go to Hockaday.  I need help with the ACT, specifically in the Science section.  I would greatly appreciate your help!');

-- --------------------------------------------------------

--
-- Table structure for table `Subjects`
--

CREATE TABLE IF NOT EXISTS `Subjects` (
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

CREATE TABLE IF NOT EXISTS `Tutors` (
  `first_name` longtext NOT NULL,
  `last_name` text NOT NULL,
  `tutor_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `past_high_school` text NOT NULL,
  `bio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tutors`
--

INSERT INTO `Tutors` (`first_name`, `last_name`, `tutor_id`, `email`, `password`, `past_high_school`, `bio`) VALUES
('Maya', 'Playa', 1, 'mayaplayalovesmargs@gmail.com', 'margs', 'Some High School In Dallas', 'Hi, I go to Some High School In Dallas. I am looking for help. '),
('Maya', 'Playa', 1, 'mayaplayalovesmargs@gmail.com', 'margs', 'Some High School In Dallas', 'Hi, I go to Some High School In Dallas. I am looking for help. '),
('Harrison', 'Fields', 4, 'hfields@smu.edu', 'f13ld0fdr3@m$', 'St. Mark''s School of Texas', 'Howdy!  I''m Harrison, I''m a Mechanical Engineering Major at SMU who specializes in Calculus and Physics tutoring.  Let me know if you need any help!'),
('Pauline', 'Woodson', 11, 'pawoodson@smu.edu', 'd@@@mns0n', 'Hockaday School', 'I''m Pauline, I graduated from Hockaday in 2015 and I can help you with any of the AP History classes!'),
('Langston', 'Kuiper', 12, 'thelangman@gmail.com', 'r0m@nc3l@ngu@age', 'Parish Episcopal School', 'Yo!  Langston here, need help with programming?  I''m your man!');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
