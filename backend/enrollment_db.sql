-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 22, 2024 at 07:01 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enrollment_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `application_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `program_id` int(11) DEFAULT NULL,
  `student_type` tinyint(4) NOT NULL,
  `application_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `application_status` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`application_id`, `student_id`, `program_id`, `student_type`, `application_date`, `application_status`) VALUES
(14, 30, 6, 0, '2024-06-18 11:14:53', 3),
(15, 31, 5, 0, '2024-06-19 04:52:47', 0),
(16, 32, 1, 0, '2024-06-19 05:47:39', 0),
(17, 33, 3, 1, '2024-06-19 06:09:22', 1),
(18, 34, 8, 0, '2024-06-19 13:34:22', 0),
(19, 35, 5, 2, '2024-06-19 13:34:22', 0),
(20, 36, 1, 0, '2024-06-19 13:34:22', 0),
(21, 37, 7, 3, '2024-06-19 13:34:22', 0),
(22, 38, 4, 4, '2024-06-19 13:34:22', 0),
(23, 39, 6, 2, '2024-06-19 13:34:22', 0),
(24, 40, 2, 1, '2024-06-19 13:34:22', 0),
(25, 41, 8, 0, '2024-06-19 13:34:22', 0),
(26, 42, 1, 3, '2024-06-19 13:34:22', 0),
(27, 43, 7, 4, '2024-06-19 13:34:22', 0),
(28, 44, 3, 2, '2024-06-19 13:34:22', 0),
(29, 45, 5, 0, '2024-06-19 13:34:22', 0),
(30, 46, 2, 1, '2024-06-19 13:34:22', 0),
(31, 47, 6, 3, '2024-06-19 13:34:22', 0),
(32, 48, 4, 4, '2024-06-19 13:34:22', 0),
(33, 49, 8, 0, '2024-06-19 13:34:22', 0),
(34, 50, 3, 2, '2024-06-19 13:34:22', 0),
(35, 51, 1, 1, '2024-06-19 13:34:22', 0),
(36, 52, 7, 0, '2024-06-19 13:34:22', 0),
(37, 53, 5, 4, '2024-06-19 13:34:22', 0),
(39, 55, 4, 0, '2024-06-20 13:44:43', 0);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `department_head` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `NAME`, `location`, `contact_number`, `email_address`, `department_head`) VALUES
(1, 'College of Information Technology and Computing', 'Building A', '123-456-7890', 'citc@example.edu', NULL),
(2, 'College of Engineering and Architecture', 'Building B', '234-567-8901', 'cea@example.edu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `enrollment_id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `enrollment_status` tinyint(4) NOT NULL DEFAULT 0,
  `enrollment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enrollments`
--

INSERT INTO `enrollments` (`enrollment_id`, `application_id`, `enrollment_status`, `enrollment_date`) VALUES
(1, 14, 1, '2024-06-21 14:04:16'),
(2, 15, 1, '2024-06-21 14:04:16');

-- --------------------------------------------------------

--
-- Table structure for table `instructors`
--

CREATE TABLE `instructors` (
  `instructor_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructors`
--

INSERT INTO `instructors` (`instructor_id`, `first_name`, `last_name`, `email`, `contact_number`) VALUES
(1, 'Alice', 'Smith', 'alice.smith@example.edu', '09123456789'),
(2, 'Bob', 'Johnson', 'bob.johnson@example.edu', '09123456790'),
(3, 'Michael', 'Jordan', 'michael.jordan@example.edu', '09123456781'),
(4, 'Sarah', 'Connor', 'sarah.connor@example.edu', '09123456782'),
(5, 'James', 'Smith', 'james.smith@example.edu', '09123456783'),
(6, 'Emily', 'Davis', 'emily.davis@example.edu', '09123456784'),
(7, 'David', 'Wilson', 'david.wilson@example.edu', '09123456785');

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `program_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `program_code` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `dept_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`program_id`, `name`, `program_code`, `description`, `dept_id`) VALUES
(1, 'Information Technology', 'IT', 'Program focused on IT', 1),
(2, 'Computer Science', 'CS', 'Program focused on Computer Science', 1),
(3, 'Data Science', 'DS', 'Program focused on Data Science', 1),
(4, 'Technology Communications Management', 'TCM', 'Program focused on Technology Communications Management', 1),
(5, 'Civil Engineering', 'CE', 'Program focused on Civil Engineering', 2),
(6, 'Electrical Engineering', 'EE', 'Program focused on Electrical Engineering', 2),
(7, 'Mechanical Engineering', 'ME', 'Program focused on Mechanical Engineering', 2),
(8, 'Architecture', 'ARCH', 'Program focused on Architecture', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `section_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `section` varchar(10) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `room` varchar(50) NOT NULL,
  `instructor_id` int(11) NOT NULL,
  `year_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`section_id`, `subject_id`, `section`, `schedule`, `room`, `instructor_id`, `year_level`) VALUES
(1, 1, 'A', 'MWF 8:00-9:00', 'Room 101', 1, 1),
(2, 2, 'B', 'TTh 10:00-12:00', 'Room 102', 2, 1),
(3, 1, 'A', 'MWF 8:00-9:00', 'Room 201', 1, 1),
(4, 1, 'B', 'TTh 10:00-12:00', 'Room 202', 2, 1),
(5, 2, 'A', 'MWF 9:00-10:00', 'Room 203', 3, 1),
(6, 2, 'B', 'TTh 1:00-3:00', 'Room 204', 4, 1),
(7, 3, 'A', 'MWF 10:00-11:00', 'Room 205', 5, 1),
(8, 4, 'A', 'MWF 1:00-2:00', 'Room 301', 1, 1),
(9, 5, 'A', 'MWF 2:00-3:00', 'Room 302', 2, 1),
(10, 6, 'A', 'MWF 3:00-4:00', 'Room 303', 3, 1),
(11, 7, 'A', 'MWF 4:00-5:00', 'Room 304', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `suffix` varchar(10) DEFAULT NULL,
  `date_of_birth` varchar(15) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `home_address` text DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `first_name`, `last_name`, `middle_name`, `suffix`, `date_of_birth`, `gender`, `contact_number`, `email_address`, `home_address`, `status`, `user_id`) VALUES
(30, 'Dave Lester', 'Ramos', 'Paclar', 'Jr.', '2024-06-05', 'Male', '09265579718', 'dlramos1031@gmail.com', 'Zone 3 Lower Bulua, Cagayan de Oro city, Philippines 9000', 2, 14),
(31, '1111', '11', '11', '11', '0001-01-01', 'Female', '11111111111', '1@1', '111111', 0, 19),
(32, 'Test2222', 'Icles', NULL, NULL, '2001-01-01', 'Female', '123-456-7890', 'citc@example.edu', 'Zone 3 Lower Bulua, Cagayan de Oro city, Philippines 9000', 0, 20),
(33, 'aa', 'a', 'a', 'a', '2024-05-28', 'Other', '123-456-7890', 'dlramos1031@asd.asd', 'Zone 3 Lower Bulua, Cag', 1, 21),
(34, 'John', 'Doe', 'Michael', 'Jr.', '1990-01-15', 'Male', '09123456701', 'john.doe@example.com', '123 Main St, Quezon City', 0, 27),
(35, 'Jane', 'Smith', 'Anne', NULL, '1992-05-23', 'Female', '09123456702', 'jane.smith@example.com', '456 Elm St, Makati', 0, 28),
(36, 'Mike', 'Johnson', 'William', NULL, '1988-11-30', 'Male', '09123456703', 'mike.johnson@example.com', '789 Pine St, Pasig', 0, 29),
(37, 'Emily', 'Davis', 'Rose', NULL, '1995-02-14', 'Female', '09123456704', 'emily.davis@example.com', '101 Maple St, Taguig', 0, 30),
(38, 'Will', 'Brown', 'James', 'II', '1991-07-19', 'Male', '09123456705', 'will.brown@example.com', '202 Oak St, Marikina', 0, 31),
(39, 'Sarah', 'Wilson', 'Marie', NULL, '1993-03-22', 'Female', '09123456706', 'sarah.wilson@example.com', '303 Cedar St, Baguio', 0, 32),
(40, 'David', 'Moore', 'Alexander', 'III', '1987-09-10', 'Male', '09123456707', 'david.moore@example.com', '404 Birch St, Antipolo', 0, 33),
(41, 'Laura', 'Taylor', 'Grace', NULL, '1994-12-05', 'Female', '09123456708', 'laura.taylor@example.com', '505 Willow St, Caloocan', 0, 34),
(42, 'Chris', 'Anderson', 'Paul', NULL, '1990-08-25', 'Male', '09123456709', 'chris.anderson@example.com', '606 Aspen St, Valenzuela', 0, 35),
(43, 'Amanda', 'Thomas', 'Claire', NULL, '1996-06-15', 'Female', '09123456710', 'amanda.thomas@example.com', '707 Redwood St, Las Piñas', 0, 36),
(44, 'Josh', 'Martin', 'Daniel', NULL, '1989-04-12', 'Male', '09123456711', 'josh.martin@example.com', '808 Magnolia St, Parañaque', 0, 37),
(45, 'Megan', 'Lee', 'Renee', NULL, '1992-10-01', 'Female', '09123456712', 'megan.lee@example.com', '909 Poplar St, Cavite', 0, 38),
(46, 'Ryan', 'Clark', 'Henry', NULL, '1991-11-22', 'Male', '09123456713', 'ryan.clark@example.com', '1010 Cypress St, Laguna', 0, 39),
(47, 'Olivia', 'Rodriguez', 'Hope', NULL, '1994-03-29', 'Female', '09123456714', 'olivia.rodriguez@example.com', '1111 Palm St, Batangas', 0, 40),
(48, 'Brandon', 'Walker', 'Evan', NULL, '1988-07-08', 'Male', '09123456715', 'brandon.walker@example.com', '1212 Oakwood St, Pampanga', 0, 41),
(49, 'Rebecca', 'Hall', 'Faith', NULL, '1993-02-18', 'Female', '09123456716', 'rebecca.hall@example.com', '1313 Pinewood St, Bulacan', 0, 42),
(50, 'Kevin', 'Young', 'Samuel', NULL, '1990-05-05', 'Male', '09123456717', 'kevin.young@example.com', '1414 Maplewood St, Rizal', 0, 43),
(51, 'Ashley', 'King', 'Joy', NULL, '1995-09-09', 'Female', '09123456718', 'ashley.king@example.com', '1515 Birchwood St, Nueva Ecija', 0, 44),
(52, 'Steven', 'Wright', 'Jack', 'Jr.', '1987-12-25', 'Male', '09123456719', 'steven.wright@example.com', '1616 Cedarwood St, Tarlac', 0, 45),
(53, 'Rachel', 'Green', 'Sophia', NULL, '1991-06-07', 'Female', '09123456720', 'rachel.green@example.com', '1717 Willowwood St, Zambales', 0, 46),
(55, 'asd', 'asd', 'asd', 'asd', '1111-01-01', 'Female', '11111111111', 'asdsad@sadas', 'afadffddfafadfadadffadfadfdfads', 0, 47);

-- --------------------------------------------------------

--
-- Table structure for table `student_subjects`
--

CREATE TABLE `student_subjects` (
  `student_subject_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_subjects`
--

INSERT INTO `student_subjects` (`student_subject_id`, `student_id`, `subject_id`, `section_id`) VALUES
(1, 30, 1, 1),
(2, 31, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `subject_code` varchar(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `units` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_id`, `subject_code`, `title`, `units`) VALUES
(1, 'IT111', 'Introduction to IT', 3),
(2, 'CS102', 'Programming Basics', 4),
(3, 'IT101', 'Introduction to Information Technology', 3),
(4, 'CS101', 'Fundamentals of Computer Science', 4),
(5, 'DS101', 'Introduction to Data Science', 3),
(6, 'CE101', 'Basic Civil Engineering', 4),
(7, 'EE101', 'Electrical Engineering Principles', 4),
(8, 'ME101', 'Introduction to Mechanical Engineering', 3),
(9, 'ARCH101', 'Basics of Architecture', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `username`, `password`, `role`, `created_at`) VALUES
(14, 'dlramos1031@gmail.com', 'dlramos1031', '$2b$10$JyWyu51DU8Hy2TpP4bDcY.OLaFZN.TtRYaRee0zqpUdZJ3s.GUAcS', 1, '2024-06-16 12:56:48'),
(15, '', '', '$2b$10$vm11WtM10ek6jvY6X8sfIemO6l93XiDMOjPRIYfTL5g1SnjGtr1JC', 0, '2024-06-16 13:28:16'),
(16, 'dlramos1031@gmail.com', 'dlramos1031', '$2b$10$Fz6O6XJDa.Hj4PClg6AeHOclop1otzAuQOvl68dSu1Ezry1gtGk5.', 0, '2024-06-18 05:20:11'),
(17, 'dlramos1031@gmail.com', 'dlramos103', '$2b$10$CcnHJTdbeJNPw.oDHOsmpONNpgonNkcsflCuLGKR3L6WWScgxZ1x.', 0, '2024-06-18 06:08:00'),
(18, 'dlramos1031@gmail.co', 'dlramos10', '$2b$10$.e6o9ZpxtDc0gkGntZpcnegsmkQAIRung6LI.vV8brp2ZFTKLU/vG', 0, '2024-06-18 06:18:22'),
(19, '1@1', '1', '$2b$10$8tah8JzQk2vRGl6.svsS3eXCBXIMKbxU/D/fnUmQswD6RgJAC03XW', 0, '2024-06-19 03:20:29'),
(20, 'test1@example.edu', 'test1', '$2b$10$pWtVpktHALNVC9GmMHvuhO5Tk94j7hU.OEKPPJYlQbJ7MegVN/Iw2', 1, '2024-06-19 05:46:34'),
(21, 'a@sda', 'a', '$2b$10$bB8wRz37EPS530SbX84p3.StRefkLYdoXgArgNWfO1ttRIXCXiz.S', 1, '2024-06-19 06:08:56'),
(22, 'adminstaff@example.edu', 'admin_staff', '$2b$10$1PLNVcBd0m7hRtfMZPOS3Ob4VCoOtRFk8wNHf/qttBWrpsksCHzqK', 2, '2024-06-19 06:30:11'),
(23, 'registrar@example.edu', 'registrar', '$2b$10$7gjxTJN2fAm.a6nOnA9m.elR6lRbU9jAQBgcTdLGHYzNKY4UKpPNC', 4, '2024-06-19 12:14:14'),
(24, 'citc@example.edu', 'citc_head', '$2b$10$3G.3DlJ5.KeSN6QCNiXcWeBH1AHtQg8TkF2AbbJ611d//y9DwTWju', 3, '2024-06-19 12:15:13'),
(25, 'cea@example.edu', 'cea_head', '$2b$10$UlMTtlsJf1CwcFNt3qODoORSdqiDcvAY.tFgVss0LQHZyQVw1UhgG', 3, '2024-06-19 12:15:30'),
(26, 'facultystaff@example.edu', 'faculty_staff', '$2b$10$FgYzGUlW3lqcT1NFqo6qJuAD/yrdWmRc.AbsqK97o5zaatSO8wdXG', 5, '2024-06-19 12:16:52'),
(27, 'john.doe@example.com', 'john_doe', '$2b$10$mbCuYqBOM73JEjkvGaq.seMSt8g6TfTVSErUbvs.YzeIXiLihaPzC', 0, '2024-06-19 13:08:31'),
(28, 'jane.smith@example.com', 'jane_smith', '$2b$10$VmZ/0tZtkTzzJxqSKtnp9eWyov0caQNaqCZxYrqzk20OtDKXKEyme', 0, '2024-06-19 13:08:45'),
(29, 'mike.johnson@example.com', 'mike_johnson', '$2b$10$YRjxurUihyNqpNgsaVJRmupRlsnJGqea0Zx.ZnXypF9lFr1msqgfm', 0, '2024-06-19 13:08:57'),
(30, 'emily.davis@example.com', 'emily_davis', '$2b$10$fzixDTESVXXFLN4G4fi96e4rUo/9EoO8lbrOEQuELbC.tUVTNOMue', 0, '2024-06-19 13:09:08'),
(31, 'will.brown@example.com', 'will_brown', '$2b$10$wDjIx4i5TolPt22Z7o3I2.ZXzCS6jq1WG4W5lMkbyb/dPyzFEj2jK', 0, '2024-06-19 13:09:15'),
(32, 'sarah.wilson@example.com', 'sarah_wilson', '$2b$10$mEkiQz0turyBNLgAzwKvAOSPDPyYgcVUytfshBah9VRG7HhwEa4dO', 0, '2024-06-19 13:09:24'),
(33, 'david.moore@example.com', 'david_moore', '$2b$10$KE13bSdDr1LB29bFIX3XZ.hb6q53nlVAXbnzZvE0EaVFmJXx0rEqW', 0, '2024-06-19 13:09:37'),
(34, 'laura.taylor@example.com', 'laura_taylor', '$2b$10$6VCeV3GwC8AeMcc2j5869uun6d86rOPkr8I2cqxJDLpv5U2hlFyIC', 0, '2024-06-19 13:09:48'),
(35, 'chris.anderson@example.com', 'chris_anderson', '$2b$10$n.eUwiqNKulAT5ualujUNee2b1k19ukKq8z4o5eQLEN29wvXaVxeu', 0, '2024-06-19 13:09:54'),
(36, 'amanda.thomas@example.com', 'amanda_thomas', '$2b$10$cWP4jMzWUqyKInJdB9ogiO1dWftTksqPrFMW79EPO7xpV4kaQu2WW', 0, '2024-06-19 13:10:00'),
(37, 'josh.martin@example.com', 'josh_martin', '$2b$10$H3Kv4t8wxspp1l8zQvgHcuY/7syrO17ASggCx7S6mYm9gI5CzE03e', 0, '2024-06-19 13:10:07'),
(38, 'megan.lee@example.com', 'megan_lee', '$2b$10$rPFriVlD34DFOxTFnXB9dOvQaDHaDfy/XAdSG.LD9dTWNLuXMIyQG', 0, '2024-06-19 13:10:15'),
(39, 'ryan.clark@example.com', 'ryan_clark', '$2b$10$A3wyTkQqXEdPa4/prBr7Y.ygISc.B8cf63ezfZhknBMFzOvwHNaEi', 0, '2024-06-19 13:10:24'),
(40, 'olivia.rodriguez@example.com', 'olivia_rodriguez', '$2b$10$/GLoLHobwwFnXqvMBriBo.IFWkYQcy9lbUCJOZUrmzdlUyYeJkNpi', 0, '2024-06-19 13:10:32'),
(41, 'brandon.walker@example.com', 'brandon_walker', '$2b$10$AlVi4wV6Wy3Q5dP2NtnH.uTalT16vgvCCuj4tgHhbyochTQL.9Sxi', 0, '2024-06-19 13:10:42'),
(42, 'rebecca.hall@example.com', 'rebecca_hall', '$2b$10$AMtVu7EfCbNhhcl7RfI6NuXB9IeYwQ2wDODIqISLcEwJ5i.wByvka', 0, '2024-06-19 13:10:50'),
(43, 'kevin.young@example.com', 'kevin_young', '$2b$10$f/faKm6V1c46usFac37MQ.kOuwZK394rESl7/fE2JO.u04PecWC1K', 0, '2024-06-19 13:10:58'),
(44, 'ashley.king@example.com', 'ashley_king', '$2b$10$pU2/ilIbv9qHCUMZ4tYhFOzREpfVHSMCMCTmpHo5gQj6fPBc.46y.', 0, '2024-06-19 13:11:05'),
(45, 'steven.wright@example.com', 'steven_wright', '$2b$10$foN3UgV8kKzLFSWR/DSEAe08hYtJxLkhz4Nb8lsFlv.rt7qFrW7dW', 0, '2024-06-19 13:11:14'),
(46, 'rachel.green@example.com', 'rachel_green', '$2b$10$W6aKl4q7bSlmyBknp1fBAehF7JVARGbeL6iGveJwI3yeZl3oVQxaa', 0, '2024-06-19 13:11:23'),
(47, '2@2', '2', '$2b$10$xKk6nWVVMBeXgUHWzZL7yuQ8ZED9ETxvlLYT09nnapXLNklKTuxAm', 0, '2024-06-20 13:37:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`application_id`),
  ADD KEY `application_ibfk_1` (`student_id`),
  ADD KEY `application_ibfk_2` (`program_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`),
  ADD KEY `department_head` (`department_head`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`enrollment_id`),
  ADD KEY `application_id` (`application_id`);

--
-- Indexes for table `instructors`
--
ALTER TABLE `instructors`
  ADD PRIMARY KEY (`instructor_id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`section_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `student_subjects`
--
ALTER TABLE `student_subjects`
  ADD PRIMARY KEY (`student_subject_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `enrollments`
--
ALTER TABLE `enrollments`
  MODIFY `enrollment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `instructors`
--
ALTER TABLE `instructors`
  MODIFY `instructor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `program_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `section_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `student_subjects`
--
ALTER TABLE `student_subjects`
  MODIFY `student_subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `application_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `application_ibfk_2` FOREIGN KEY (`program_id`) REFERENCES `program` (`program_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`department_head`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `application` (`application_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `program_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);

--
-- Constraints for table `sections`
--
ALTER TABLE `sections`
  ADD CONSTRAINT `sections_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sections_ibfk_2` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`instructor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_subjects`
--
ALTER TABLE `student_subjects`
  ADD CONSTRAINT `student_subjects_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_subjects_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_subjects_ibfk_3` FOREIGN KEY (`section_id`) REFERENCES `sections` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
