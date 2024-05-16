-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Erstellungszeit: 15. Mai 2024 um 08:59
-- Server-Version: 8.0.37
-- PHP-Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `tcldb`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `TCL_count`
--

DROP TABLE IF EXISTS `TCL_count`;
CREATE TABLE `TCL_count` (
  `Count` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `TCL_count`
--

INSERT INTO `TCL_count` (`Count`) VALUES
(0);
