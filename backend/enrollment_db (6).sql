-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2024 at 05:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
(9, 2, 1, 0, '2024-06-11 14:16:33', 3);

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
(1, 'College of Information Technology and Computing', 'Building A', '123-456-7890', 'citc@example.edu', 7),
(2, 'College of Engineering and Architecture', 'Building B', '234-567-8901', 'cea@example.edu', 8);

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
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `suffix` varchar(10) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
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
(1, '', '', NULL, NULL, NULL, 'male', NULL, NULL, NULL, 0, 2),
(2, 'Dave Lester', 'Ramos', 'Paclar', 'Jr.', '2024-06-19', 'male', '09265579718', 'dlramos1031@gmail.com', 'Somewhere over the rainbow', 2, 1),
(3, 'John', 'Doe', NULL, NULL, '2001-01-01', 'male', '09265579718', 'john.doe@gmail.com', 'Somewhere over the rainbow', 0, 3),
(4, 'James ', 'Jameson', 'Jones', 'Jr.', '2002-01-01', 'male', '09111111111', 'jamesson@email.com', 'street over there', 0, 5),
(5, 'Mary', 'Jane', NULL, NULL, '2024-06-05', 'female', '0987321321', 'maryjane@email.com', 'OASIDNSAUIODBNUCYAS IDIUYASBC DIUYABSIUYDBI UCSAYBDCIU Y', 0, 6),
(6, 'Davee Lesterr', 'Ramoss', 'Paclarr', 'Jr.s', '2024-05-29', 'other', '09265579718', 'dlramos1031@gmail.com', 'OASIDNSAUIODBNUCYAS IDIUYASBC DIUYABSIUYDBI UCSAYBDCIU Y', 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'dlramos1031', '$2y$10$wDL3FN86fnXUHeE22Eif8.tUk8ug0lNHMsgIxpjoH024weo60kDXO', 1, '2024-06-09 07:41:00'),
(2, 'redgorila1035', '$2y$10$D.gG3G7l3/AP5adYwFv9K.D3kuZwJhdNEFQpLDyCjuiAco9d9LkCe', 1, '2024-06-09 07:42:26'),
(3, 'johndoe', '$2y$10$9iv1jH1uRR1BGIboZ8ZQeOnZH.LVTQQsqgrtUUeVC9FmJrXQ8IfNa', 2, '2024-06-10 01:39:10'),
(5, '1', '$2y$10$CDXzZ5/tKD5eRC4nunKMD.eCO0zIh6geWB7oR3Ld709i.67mLh91m', 4, '2024-06-10 04:01:29'),
(6, 'maryjane', '$2y$10$BxQOXigNvRn2vM3A1synAeOv52wrYDBtfJphVRyihJzKDD1BlMrli', 1, '2024-06-10 23:53:12'),
(7, 'head_citc', '$2y$10$5KeENdJZ9Hek21sSTcxQh.D2ZDdti3LJET48wwB19XZQcNE8oHq3S', 3, '2024-06-11 00:44:52'),
(8, 'head_cea', '$2y$10$RZrOFwmQEdJkJre9NMWeBeBWqk8.5fOGpFj3XU/SiLRk8psNCvL.S', 3, '2024-06-11 00:45:39'),
(9, 'admin_staff', '$2y$10$LQ7esT8a0uuu6BVtuA2aU.30x7ot/KqbbQfaurVfslpgjNtqkx15u', 2, '2024-06-11 13:24:31'),
(10, 'registrar', '$2y$10$ia8J0t6qZMcW.8caEmcQruEZhkFdz49/aGb1.zx09zXe3Z.8ZTn4m', 4, '2024-06-11 15:06:41'),
(11, 'd', '$2y$10$f9jWiMU1BavBe38rDqdH1eH.JkENx1sACPIj6C9Phe3FAkccbW7ZW', 1, '2024-06-11 15:10:42');

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
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`program_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `program_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`department_head`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `program_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
