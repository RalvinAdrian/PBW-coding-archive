-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2022 at 03:06 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ide`
--

-- --------------------------------------------------------

--
-- Table structure for table `usergroups`
--

CREATE TABLE `usergroups` (
  `ID_UG` int(11) NOT NULL,
  `name` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usergroups`
--

INSERT INTO `usergroups` (`ID_UG`, `name`) VALUES
(1, 'lecturer'),
(2, 'student'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID_U` int(11) NOT NULL,
  `userID` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(9) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `ID_UG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID_U`, `userID`, `name`, `username`, `pass`, `ID_UG`) VALUES
(1, '20160065', 'Maria Veronica Claudia', '16065', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 1),
(2, '20130053', 'Husnul Hakim', '13053', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 1),
(3, '2011730053', 'MARIA VERONICA', '7311053', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(4, '2011730103', 'JOHANES MARIO ADRIANO', '7311103', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(5, '2012730027', 'NICHOLAS MARTIN PRIBADI', '7312027', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(6, '2012730078', 'RIZQI PUTRA PRATAMA', '7312078', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(7, '2012730093', 'YOHAN STURE ENANDER', '7312093', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(8, '2013730001', 'ALVIN IRAWAN', '7313001', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(9, '2013730002', 'CHERIA', '7313002', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(10, '2013730003', 'FADHIL AHSAN', '7313003', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(11, '2013730004', 'CLARA', '7313004', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(12, '2013730005', 'ALDY MARCELLINO CHRISTIAN', '7313005', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(13, '2013730006', 'ANTONIUS', '7313006', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(14, '2013730008', 'ENRICOFINDLEY', '7313008', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(15, '2013730009', 'ROMMY KURNIAWAN WIJAYA', '7313009', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(16, '2013730010', 'YOSUA YUUTA BIMA PRAMANA', '7313010', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(17, '2013730011', 'RICKY SLAMAT PUTRA', '7313011', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(18, '2013730012', 'CLAUDIA VERONICA HANURAWAN', '7313012', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(19, '2013730013', 'AXEL RAHARJA', '7313013', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(20, '2013730019', 'IGNASIUS DAVID YULIANUS', '7313019', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(21, '2013730021', 'ERLANGGA LAIMENA', '7313021', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(22, '2013730024', 'MARKUS EDWIN SOEGIANTO', '7313024', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(23, '2013730025', 'GAVRILA TIOMINAR', '7313025', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(24, '2013730029', 'KEVIN RIZKHY TANUJAYA', '7313029', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(25, '2013730033', 'JACINTA DELORA', '7313033', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(26, '2013730046', 'ANDRIANTO SUGIARTO', '7313046', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(27, '2013730052', 'FRANSISCUS EVAN KRISTIAN', '7313052', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(28, '2013730053', 'SOHUTURON FERNANDO', '7313053', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(29, '2013730054', 'MICHAEL WILLIAM KINSEY', '7313054', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(30, '2013730057', 'MAUDY NUR AVIANTI', '7313057', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(31, '2013730058', 'ADRIAN REYNALDI', '7313058', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(32, '2013730060', 'HARSETO PANDITYO', '7313060', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(33, '2013730065', 'JONATHAN SURYA', '7313065', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(34, '2013730068', 'REZA ZACKY RAMADAN', '7313068', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2),
(35, '2013730069', 'RICKY WAHYUDI', '7313069', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 2);

-- --------------------------------------------------------

--
-- Stand-in structure for view `user_data`
-- (See below for the actual view)
--
CREATE TABLE `user_data` (
`userID` varchar(10)
,`name` varchar(50)
,`role` varchar(8)
);

-- --------------------------------------------------------

--
-- Structure for view `user_data`
--
DROP TABLE IF EXISTS `user_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_data`  AS  select `users`.`userID` AS `userID`,`users`.`name` AS `name`,`usergroups`.`name` AS `role` from (`usergroups` join `users` on((`usergroups`.`ID_UG` = `users`.`ID_UG`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usergroups`
--
ALTER TABLE `usergroups`
  ADD PRIMARY KEY (`ID_UG`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_U`),
  ADD UNIQUE KEY `userID` (`userID`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `ID_UG` (`ID_UG`),
  ADD KEY `ID_UG_2` (`ID_UG`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usergroups`
--
ALTER TABLE `usergroups`
  MODIFY `ID_UG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID_U` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `ID_UG` FOREIGN KEY (`ID_UG`) REFERENCES `usergroups` (`ID_UG`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
