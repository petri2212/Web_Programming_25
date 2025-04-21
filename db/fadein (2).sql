-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Apr 17, 2025 alle 14:31
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fadein`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `autore`
--

CREATE TABLE `autore` (
  `codice` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `nazione` varchar(50) NOT NULL,
  `dataNascita` date NOT NULL,
  `tipo` enum('vivo','morto') NOT NULL,
  `dataMorte` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `autore`
--

INSERT INTO `autore` (`codice`, `nome`, `cognome`, `nazione`, `dataNascita`, `tipo`, `dataMorte`) VALUES
(1, 'Sofia', 'Rinaldi', 'Italia', '1980-04-12', 'vivo', NULL),
(2, 'Lucas', 'Moreau', 'Francia', '1972-09-25', 'vivo', NULL),
(3, 'Anna', 'Fischer', 'Germania', '1955-03-10', 'morto', '2020-06-14'),
(4, 'Miguel', 'Santos', 'Spagna', '1938-11-02', 'morto', '2005-01-20'),
(5, 'Emily', 'Carter', 'Stati Uniti', '1990-08-30', 'vivo', NULL),
(6, 'Kenji', 'Takahashi', 'Giappone', '1944-02-17', 'morto', '2010-12-09'),
(7, 'Ali', 'Hassan', 'Egitto', '1985-06-21', 'vivo', NULL),
(8, 'Nina', 'Kovač', 'Croazia', '1978-07-15', 'vivo', NULL),
(9, 'Robert', 'Müller', 'Germania', '1930-05-03', 'morto', '1998-04-17'),
(10, 'Chiara', 'Bianchi', 'Italia', '1992-01-05', 'vivo', NULL),
(11, 'Jorge', 'Ramírez', 'Argentina', '1960-09-11', 'morto', '2018-07-22'),
(12, 'Helena', 'Novak', 'Repubblica Ceca', '1983-10-19', 'vivo', NULL),
(13, 'Tom', 'Anderson', 'Regno Unito', '1948-06-08', 'morto', '2012-03-03'),
(14, 'Léa', 'Dubois', 'Francia', '1995-12-28', 'vivo', NULL),
(15, 'Omar', 'Farouk', 'Marocco', '1975-05-14', 'vivo', NULL),
(16, 'Irina', 'Petrova', 'Russia', '1935-02-02', 'morto', '2000-09-01'),
(17, 'Daniel', 'Smith', 'Canada', '1969-11-26', 'vivo', NULL),
(18, 'Sara', 'Moretti', 'Italia', '1920-07-19', 'morto', '1995-05-30'),
(19, 'João', 'Pereira', 'Portogallo', '1987-03-03', 'vivo', NULL),
(20, 'Aisha', 'Al-Fulan', 'Emirati Arabi', '1952-10-10', 'morto', '2015-08-18'),
(21, 'Luca', 'Ferrari', 'Italia', '1971-09-22', 'morto', '2015-03-10'),
(22, 'Giulia', 'Rossi', 'Italia', '1986-11-14', 'vivo', NULL),
(23, 'John', 'Doe', 'Stati Uniti', '1960-05-25', 'morto', '2009-12-18'),
(24, 'Maria', 'Martínez', 'Spagna', '1994-02-03', 'vivo', NULL),
(25, 'James', 'Smith', 'Regno Unito', '1980-08-12', 'vivo', NULL),
(26, 'Emma', 'Johnson', 'Australia', '1992-03-06', 'vivo', NULL),
(27, 'Carlos', 'García', 'Messico', '1965-07-29', 'morto', '2021-11-05'),
(28, 'Laura', 'Miller', 'Canada', '1990-04-14', 'vivo', NULL),
(29, 'David', 'Taylor', 'Stati Uniti', '1982-01-18', 'morto', '2016-08-22'),
(30, 'Sophie', 'Davies', 'Regno Unito', '1978-11-29', 'vivo', NULL),
(31, 'Nina', 'Li', 'Cina', '1998-02-01', 'vivo', NULL),
(32, 'Yusuf', 'Khan', 'India', '1945-10-17', 'morto', '2012-05-06'),
(33, 'Olivia', 'Wilson', 'Canada', '1989-12-04', 'vivo', NULL),
(34, 'Hiroshi', 'Tanaka', 'Giappone', '1963-09-21', 'vivo', NULL),
(35, 'Isabella', 'Martins', 'Brasile', '1974-04-30', 'morto', '2018-10-11'),
(36, 'William', 'Brown', 'Stati Uniti', '1973-06-18', 'morto', '2010-03-27'),
(37, 'Alexander', 'King', 'Canada', '1995-01-23', 'vivo', NULL),
(38, 'Marta', 'Kowalski', 'Polonia', '1981-12-14', 'morto', '2020-02-17'),
(39, 'Richard', 'Anderson', 'Australia', '1983-11-04', 'vivo', NULL),
(40, 'Ewa', 'Zielińska', 'Polonia', '1987-09-09', 'morto', '2022-05-12'),
(41, 'Marco', 'Bianchi', 'Italia', '1970-07-19', 'morto', '2014-02-22'),
(42, 'Alice', 'Taylor', 'Stati Uniti', '1990-10-25', 'vivo', NULL),
(43, 'Miguel', 'Sánchez', 'Spagna', '1967-01-10', 'vivo', NULL),
(44, 'Sophia', 'Harris', 'Canada', '1993-04-20', 'morto', '2020-11-08'),
(45, 'Ethan', 'Davis', 'Stati Uniti', '1988-06-15', 'vivo', NULL),
(46, 'Nadia', 'Nguyen', 'Vietnam', '1985-03-12', 'morto', '2019-07-09'),
(47, 'Liam', 'Lopez', 'Messico', '1982-11-23', 'vivo', NULL),
(48, 'Catherine', 'Wilson', 'Australia', '1995-02-01', 'morto', '2022-05-20'),
(49, 'Noah', 'Moore', 'Regno Unito', '1989-09-07', 'morto', '2017-03-11'),
(50, 'Charlotte', 'Martin', 'Francia', '1977-08-09', 'vivo', NULL),
(51, 'Lucas', 'Perez', 'Spagna', '1983-01-30', 'morto', '2016-06-15'),
(52, 'Eva', 'Thompson', 'Stati Uniti', '1997-11-12', 'vivo', NULL),
(53, 'Antonio', 'Garcia', 'Messico', '1962-06-26', 'vivo', NULL),
(54, 'Amira', 'Sayed', 'Egitto', '1990-05-18', 'morto', '2021-01-22'),
(55, 'John', 'Scott', 'Canada', '1992-03-03', 'vivo', NULL),
(56, 'Sara', 'Adams', 'Regno Unito', '1980-09-28', 'morto', '2015-04-18'),
(57, 'George', 'Baker', 'Australia', '1974-12-02', 'vivo', NULL),
(58, 'Linda', 'Walker', 'Stati Uniti', '1985-08-21', 'vivo', NULL),
(59, 'David', 'Hernandez', 'Spagna', '1981-06-04', 'morto', '2019-09-30'),
(60, 'Clara', 'White', 'Canada', '1993-11-13', 'vivo', NULL),
(61, 'Amos', 'Brown', 'Stati Uniti', '1970-02-25', 'morto', '2015-08-04'),
(62, 'Olga', 'Müller', 'Germania', '1980-12-10', 'vivo', NULL),
(63, 'Michael', 'Davis', 'Australia', '1994-04-19', 'morto', '2020-10-12'),
(64, 'Jessica', 'Martinez', 'Spagna', '1990-07-03', 'vivo', NULL),
(65, 'Robert', 'Harris', 'Regno Unito', '1985-02-22', 'vivo', NULL),
(66, 'Emily', 'White', 'Stati Uniti', '1982-01-11', 'morto', '2017-11-05'),
(67, 'Leo', 'Garcia', 'Messico', '1978-08-16', 'vivo', NULL),
(68, 'Claire', 'Wilson', 'Francia', '1992-04-29', 'morto', '2021-02-17'),
(69, 'Gabriel', 'Sanchez', 'Colombia', '1971-10-30', 'vivo', NULL),
(70, 'Barbara', 'Taylor', 'Australia', '1989-01-03', 'vivo', NULL),
(71, 'Rachel', 'Anderson', 'Canada', '1993-11-12', 'morto', '2021-06-30'),
(72, 'Hugo', 'Morales', 'Messico', '1980-09-13', 'vivo', NULL),
(73, 'Lucas', 'Harris', 'Stati Uniti', '1997-06-22', 'morto', '2022-05-09'),
(74, 'Adriana', 'Bianchi', 'Italia', '1986-07-05', 'vivo', NULL),
(75, 'Max', 'Mitchell', 'Regno Unito', '1979-10-20', 'morto', '2016-12-28'),
(76, 'Oliver', 'Martinez', 'Spagna', '1990-11-11', 'vivo', NULL),
(77, 'Alicia', 'Roberts', 'Canada', '1983-04-06', 'morto', '2019-03-10'),
(78, 'Luis', 'Perez', 'Argentina', '1975-12-18', 'vivo', NULL),
(79, 'Daniela', 'Evans', 'Australia', '1995-01-21', 'morto', '2019-07-30'),
(80, 'Lorenzo', 'Garcia', 'Italia', '1980-05-24', 'morto', '2016-10-14'),
(81, 'Sophia', 'Clark', 'Stati Uniti', '1991-10-02', 'vivo', NULL),
(82, 'Carmen', 'Lopez', 'Spagna', '1985-03-11', 'vivo', NULL),
(83, 'William', 'Young', 'Regno Unito', '1974-08-23', 'morto', '2020-11-09'),
(84, 'Leonardo', 'Martínez', 'Argentina', '1980-06-14', 'vivo', NULL),
(85, 'Oscar', 'Pérez', 'Cile', '1982-11-28', 'morto', '2018-05-11'),
(86, 'Carla', 'Rodríguez', 'Spagna', '1977-01-03', 'vivo', NULL),
(87, 'Victoria', 'Miller', 'Australia', '1986-09-14', 'vivo', NULL),
(88, 'Marcelo', 'González', 'Colombia', '1991-04-27', 'morto', '2015-01-22'),
(89, 'Amelia', 'Kim', 'Corea del Sud', '1993-05-16', 'vivo', NULL),
(90, 'Eva', 'Brown', 'Stati Uniti', '1984-02-12', 'morto', '2021-10-03'),
(91, 'Christopher', 'White', 'Canada', '1978-10-08', 'vivo', NULL),
(92, 'Emilia', 'González', 'Messico', '1991-08-22', 'vivo', NULL),
(93, 'Joshua', 'Evans', 'Stati Uniti', '1989-05-18', 'vivo', NULL),
(94, 'Isabella', 'Lopez', 'Spagna', '1980-07-26', 'morto', '2016-06-09'),
(95, 'David', 'Brown', 'Regno Unito', '1992-04-16', 'vivo', NULL),
(96, 'Charlotte', 'Miller', 'Francia', '1990-12-21', 'morto', '2019-03-05'),
(97, 'Gabrielle', 'Rodríguez', 'Messico', '1983-10-12', 'morto', '2021-05-18'),
(98, 'Aiden', 'Taylor', 'Canada', '1991-01-30', 'vivo', NULL),
(99, 'Santiago', 'Morales', 'Cile', '1981-07-04', 'morto', '2017-12-14'),
(100, 'Maya', 'Johnson', 'Australia', '1984-03-13', 'vivo', NULL),
(101, 'Luca', 'Verdi', 'Italia', '1973-05-05', 'morto', '2020-11-10'),
(102, 'Emily', 'Robinson', 'Stati Uniti', '1990-03-14', 'vivo', NULL),
(103, 'Antonio', 'Santos', 'Spagna', '1987-09-09', 'morto', '2021-02-23'),
(104, 'Sophie', 'Taylor', 'Australia', '1993-06-27', 'vivo', NULL),
(105, 'Maxim', 'Ivanov', 'Russia', '1982-01-16', 'morto', '2017-06-10'),
(106, 'Lucas', 'González', 'Messico', '1979-04-10', 'vivo', NULL),
(107, 'Nina', 'Hernandez', 'Colombia', '1994-11-12', 'morto', '2021-01-15'),
(108, 'Katherine', 'Johnson', 'Stati Uniti', '1981-02-05', 'vivo', NULL),
(109, 'Oliver', 'Baker', 'Regno Unito', '1986-08-23', 'vivo', NULL),
(110, 'Santiago', 'Rojas', 'Argentina', '1983-09-18', 'vivo', NULL),
(111, 'Laura', 'Miller', 'Canada', '1976-07-11', 'morto', '2019-11-01'),
(112, 'Javier', 'Perez', 'Spagna', '1991-10-04', 'vivo', NULL),
(113, 'Emma', 'Khan', 'Pakistan', '1984-05-19', 'morto', '2020-04-06'),
(114, 'Daniel', 'Moore', 'Australia', '1990-08-30', 'morto', '2021-03-12'),
(115, 'Alicia', 'White', 'Stati Uniti', '1995-07-03', 'vivo', NULL),
(116, 'Giovanni', 'Costa', 'Italia', '1990-01-14', 'vivo', NULL),
(117, 'Clara', 'Martinez', 'Spagna', '1977-03-27', 'vivo', NULL),
(118, 'David', 'Lopez', 'Messico', '1988-06-20', 'morto', '2018-01-11'),
(119, 'Jessica', 'Williams', 'Regno Unito', '1992-11-13', 'vivo', NULL),
(120, 'Samuel', 'Adams', 'Stati Uniti', '1981-04-15', 'morto', '2015-09-17');

--
-- Trigger `autore`
--
DELIMITER $$
CREATE TRIGGER `check_autore_before_insert` BEFORE INSERT ON `autore` FOR EACH ROW BEGIN
  IF NEW.tipo = 'vivo' AND NEW.dataMorte IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Errore: un autore vivo non può avere una data di morte';
  END IF;

  IF NEW.tipo = 'morto' AND NEW.dataMorte IS NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Errore: un autore morto deve avere una data di morte';
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `check_autore_before_update` BEFORE UPDATE ON `autore` FOR EACH ROW BEGIN
  IF NEW.tipo = 'vivo' AND NEW.dataMorte IS NOT NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Errore: un autore vivo non può avere una data di morte';
  END IF;

  IF NEW.tipo = 'morto' AND NEW.dataMorte IS NULL THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Errore: un autore morto deve avere una data di morte';
  END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `opera`
--

CREATE TABLE `opera` (
  `codice` int(11) NOT NULL,
  `autore` int(11) NOT NULL,
  `titolo` varchar(30) NOT NULL,
  `annoAcquisto` year(4) NOT NULL,
  `annoRealizzazione` year(4) NOT NULL,
  `tipo` enum('quadro','scultura') NOT NULL,
  `espostaInSala` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `opera`
--

INSERT INTO `opera` (`codice`, `autore`, `titolo`, `annoAcquisto`, `annoRealizzazione`, `tipo`, `espostaInSala`) VALUES
(1, 1, 'Il viaggio dell\'anima', '2020', '2018', 'quadro', 1),
(2, 2, 'La forza della natura', '2019', '2016', 'quadro', 2),
(3, 3, 'Fugace bellezza', '2017', '2015', 'scultura', 3),
(4, 4, 'Luce e ombra', '2021', '2003', 'quadro', 4),
(5, 5, 'Visioni perdute', '2019', '2017', 'quadro', 5),
(6, 6, 'Ritratto di una generazione', '2018', '2009', 'scultura', 6),
(7, 7, 'Nella quiete', '2020', '2019', 'quadro', 7),
(8, 8, 'Il volto del futuro', '2021', '2021', 'quadro', 8),
(9, 9, 'Nel cuore della terra', '2019', '1990', 'scultura', 9),
(10, 10, 'Momenti di luce', '2020', '2018', 'quadro', 10),
(11, 11, 'L\'ultimo respiro', '2021', '2000', 'scultura', 11),
(12, 12, 'Mistero e bellezza', '2018', '2017', 'quadro', 12),
(13, 13, 'La pace interiore', '2019', '2010', 'quadro', 13),
(14, 14, 'Ritorno al passato', '2020', '2019', 'scultura', 14),
(15, 15, 'Il tempo che scorre', '2021', '2020', 'quadro', 15),
(16, 16, 'Le radici della mente', '2020', '1999', 'quadro', 16),
(17, 17, 'Sogno senza fine', '2018', '2016', 'scultura', 17),
(18, 18, 'Il cammino della vita', '2021', '1992', 'quadro', 18),
(19, 19, 'Sotto la superficie', '2019', '2015', 'scultura', 19),
(20, 20, 'La fuga della mente', '2020', '2012', 'quadro', 20),
(21, 1, 'Sfumature dell\'infinito', '2021', '2020', 'quadro', 2),
(22, 2, 'Ricordi di un\'era passata', '2021', '2019', 'scultura', 3),
(23, 3, 'Riflessi di luce', '2021', '2020', 'quadro', 4),
(24, 4, 'Oltre l\'orizzonte', '2019', '2003', 'quadro', 5),
(25, 5, 'La bellezza del caos', '2021', '2020', 'scultura', 6),
(26, 6, 'Esplorazione della forma', '2019', '2009', 'quadro', 7),
(27, 7, 'Profondità silenziose', '2021', '2020', 'scultura', 8),
(28, 8, 'La mente in fiamme', '2021', '2020', 'quadro', 9),
(29, 9, 'Ritorno alle origini', '2019', '1990', 'scultura', 10),
(30, 10, 'L\'essenza del movimento', '2020', '2021', 'quadro', 11),
(31, 31, 'Il respiro del cielo', '2021', '2020', 'quadro', 1),
(32, 32, 'Sogno di una notte estiva', '2020', '2007', 'scultura', 2),
(33, 33, 'Abisso e luce', '2021', '2020', 'quadro', 3),
(34, 34, 'La città eterna', '2019', '2018', 'quadro', 4),
(35, 35, 'Luce di luna', '2020', '2015', 'scultura', 5),
(36, 36, 'Il silenzio delle stelle', '2021', '2000', 'quadro', 6),
(37, 37, 'L\'onda del tempo', '2019', '2018', 'scultura', 7),
(38, 38, 'Sfumature di dolore', '2020', '2020', 'quadro', 8),
(39, 39, 'Riflessi dell\'anima', '2021', '2019', 'scultura', 9),
(40, 40, 'Le mani del creatore', '2019', '2017', 'quadro', 10),
(41, 41, 'La via dell\'equilibrio', '2020', '2013', 'quadro', 11),
(42, 42, 'Sulle ali del vento', '2021', '2020', 'scultura', 12),
(43, 43, 'Fiamme nella notte', '2019', '2018', 'quadro', 13),
(44, 44, 'L\'unione dei mondi', '2021', '2020', 'quadro', 14),
(45, 45, 'L\'alba del futuro', '2020', '2019', 'scultura', 15),
(46, 46, 'L\'eco del passato', '2021', '2005', 'quadro', 16),
(47, 47, 'Il giardino nascosto', '2021', '2018', 'scultura', 17),
(48, 48, 'Onde di luce', '2019', '2017', 'quadro', 18),
(49, 49, 'Il cuore del deserto', '2021', '2013', 'scultura', 19),
(50, 50, 'Cieli senza confini', '2020', '2019', 'quadro', 20),
(51, 51, 'Danza delle ombre', '2021', '2014', 'scultura', 1),
(52, 52, 'Ritorno alla pace', '2020', '2021', 'quadro', 2),
(53, 53, 'Verso l\'infinito', '2019', '2018', 'scultura', 3),
(54, 54, 'Sogno ad occhi aperti', '2021', '2019', 'quadro', 4),
(55, 55, 'Vento di speranza', '2020', '2020', 'scultura', 5),
(56, 56, 'Il respiro dell\'oceano', '2021', '2014', 'quadro', 6),
(57, 57, 'L\'eterno ritorno', '2019', '2017', 'scultura', 7),
(58, 58, 'Le ombre della mente', '2021', '2020', 'quadro', 8),
(59, 59, 'L\'essenza della vita', '2020', '2019', 'scultura', 9),
(60, 60, 'Il battito del cuore', '2021', '2021', 'quadro', 10),
(61, 61, 'L\'ombra della solitudine', '2020', '2008', 'quadro', 1),
(62, 62, 'Danzando tra le stelle', '2019', '2018', 'scultura', 2),
(63, 63, 'La forza della terra', '2021', '2020', 'quadro', 3),
(64, 64, 'Risveglio dell\'anima', '2020', '2019', 'scultura', 4),
(65, 65, 'Un cammino solitario', '2021', '2020', 'quadro', 5),
(66, 66, 'Nel cuore del caos', '2019', '2006', 'scultura', 6),
(67, 67, 'Tra il cielo e la terra', '2021', '2020', 'quadro', 7),
(68, 68, 'Luce di luna sull\'oceano', '2020', '2021', 'scultura', 8),
(69, 69, 'Nel profondo dell\'universo', '2021', '2020', 'quadro', 9),
(70, 70, 'Fiamme di passione', '2019', '2017', 'scultura', 10),
(71, 71, 'Onde di cambiamento', '2020', '2020', 'quadro', 11),
(72, 72, 'Il giardino incantato', '2021', '2021', 'scultura', 12),
(73, 73, 'Un altro mondo', '2021', '2020', 'quadro', 13),
(74, 74, 'Riflessi nel buio', '2019', '2018', 'scultura', 14),
(75, 75, 'Passaggi segreti', '2020', '2014', 'quadro', 15),
(76, 76, 'Alla ricerca della verità', '2021', '2020', 'scultura', 16),
(77, 77, 'Abbraccio del vento', '2020', '2019', 'quadro', 17),
(78, 78, 'L\'infinito dentro di noi', '2021', '2021', 'scultura', 18),
(79, 79, 'Ritorno alle radici', '2019', '2017', 'quadro', 19),
(80, 80, 'L\'ultimo respiro del giorno', '2020', '2011', 'scultura', 20),
(81, 81, 'Il colore della speranza', '2021', '2020', 'quadro', 1),
(82, 82, 'Il destino tra le mani', '2019', '2018', 'scultura', 2),
(83, 83, 'Nel cuore della tempesta', '2021', '2020', 'quadro', 3),
(84, 84, 'Momenti di luce', '2020', '2019', 'scultura', 4),
(85, 85, 'Fiori nel deserto', '2021', '2012', 'quadro', 5),
(86, 86, 'Tra il bianco e il nero', '2020', '2021', 'scultura', 6),
(87, 87, 'Le radici del cambiamento', '2021', '2019', 'quadro', 7),
(88, 88, 'Riflessi d\'infinito', '2020', '2014', 'scultura', 8),
(89, 89, 'Il peso dell\'anima', '2021', '2021', 'quadro', 9),
(90, 90, 'La luce oltre il buio', '2019', '2018', 'scultura', 10),
(91, 91, 'Il volo della mente', '2021', '2020', 'quadro', 1),
(92, 92, 'Fuga nel sogno', '2020', '2021', 'scultura', 2),
(93, 93, 'L\'orizzonte senza fine', '2021', '2020', 'quadro', 3),
(94, 94, 'Riflessi sulla superficie', '2020', '2000', 'scultura', 4),
(95, 95, 'Il ritorno alla natura', '2021', '2020', 'quadro', 5),
(96, 96, 'Silenzio tra le ombre', '2020', '2018', 'scultura', 6),
(97, 97, 'Passi nell\'infinito', '2021', '2019', 'quadro', 7),
(98, 98, 'Nel cuore del mare', '2021', '2020', 'scultura', 8),
(99, 99, 'La via dei sogni', '2020', '2002', 'quadro', 9),
(100, 100, 'Sfumature di caos', '2021', '2020', 'scultura', 10),
(101, 101, 'Il battito della vita', '2020', '2018', 'quadro', 11),
(102, 102, 'Ricordi di un altro mondo', '2021', '2020', 'scultura', 12),
(103, 103, 'La luce dell\'anima', '2020', '2019', 'quadro', 13),
(104, 104, 'Le stelle nel cuore', '2021', '2021', 'scultura', 14),
(105, 105, 'Fiamme di speranza', '2020', '2015', 'quadro', 15),
(106, 106, 'Riflessi dell\'universo', '2021', '2020', 'scultura', 16),
(107, 107, 'Il cerchio della vita', '2020', '2021', 'quadro', 17),
(108, 108, 'Sogni lontani', '2021', '2020', 'scultura', 18),
(109, 109, 'Alla ricerca di sé', '2020', '2019', 'quadro', 19),
(110, 110, 'Sotto il cielo stellato', '2021', '2021', 'scultura', 20),
(111, 111, 'Il silenzio dei colori', '2020', '2013', 'quadro', 1),
(112, 112, 'Ritorno alla vita', '2021', '2020', 'scultura', 2),
(113, 113, 'Mondi paralleli', '2020', '2019', 'quadro', 3),
(114, 114, 'Dentro l\'oceano', '2021', '2020', 'scultura', 4),
(115, 115, 'L\'universo nascosto', '2020', '2021', 'quadro', 5),
(116, 116, 'Il respiro dell\'universo', '2021', '2020', 'scultura', 6),
(117, 117, 'Sfumature di un sogno', '2020', '2019', 'quadro', 7),
(118, 118, 'Oltre la luce', '2021', '2014', 'scultura', 8),
(119, 119, 'Il cammino della speranza', '2020', '2021', 'quadro', 9),
(120, 120, 'Nel cuore della tempesta', '2021', '2010', 'scultura', 10),
(121, 21, 'L\'alba di un nuovo giorno', '2021', '2010', 'quadro', 1),
(122, 22, 'La forza della natura', '2020', '2019', 'scultura', 2),
(123, 23, 'Viaggio verso l\'ignoto', '2021', '2003', 'quadro', 3),
(124, 24, 'Riflessioni nell\'acqua', '2020', '2018', 'scultura', 4),
(125, 25, 'Nel cuore della tempesta', '2021', '2020', 'quadro', 5),
(126, 26, 'Echi di lontani ricordi', '2020', '2019', 'scultura', 6),
(127, 27, 'Il respiro della terra', '2021', '2021', 'quadro', 7),
(128, 28, 'Oltre il confine', '2020', '2020', 'scultura', 8),
(129, 29, 'Sogni tra le stelle', '2021', '2011', 'quadro', 9),
(130, 30, 'Riflessi nell\'infinito', '2021', '2021', 'scultura', 10),
(131, 21, 'Vento e sabbia', '2021', '2011', 'quadro', 11),
(132, 22, 'Danza di luci', '2020', '2019', 'scultura', 12),
(133, 23, 'Tra sogno e realtà', '2021', '1986', 'quadro', 13),
(134, 24, 'Il passo del guerriero', '2020', '2018', 'scultura', 14),
(135, 25, 'La via dell\'equilibrio', '2021', '2020', 'quadro', 15),
(136, 26, 'Sotto la luna', '2020', '2021', 'scultura', 16),
(137, 27, 'Il volto del tempo', '2021', '2020', 'quadro', 17),
(138, 28, 'Momenti di silenzio', '2020', '2019', 'scultura', 18),
(139, 29, 'Nel buio della notte', '2021', '1999', 'quadro', 19),
(140, 30, 'Il cammino dei sogni', '2021', '2021', 'scultura', 20),
(141, 41, 'Oltre la nebbia', '2021', '1992', 'quadro', 1),
(142, 42, 'Sfumature di luce', '2020', '2019', 'scultura', 2),
(143, 43, 'Riflessi nel cuore', '2021', '2020', 'quadro', 3),
(144, 44, 'Il respiro del vento', '2020', '2018', 'scultura', 4),
(145, 45, 'Cieli senza confini', '2021', '2020', 'quadro', 5),
(146, 46, 'Voci nel silenzio', '2020', '2019', 'scultura', 6),
(147, 47, 'Viaggio tra le stelle', '2021', '2020', 'quadro', 7),
(148, 48, 'Passi nell\'ombra', '2020', '2021', 'scultura', 8),
(149, 49, 'Nel cuore della montagna', '2021', '2010', 'quadro', 9),
(150, 50, 'Luce nell\'oscurità', '2020', '2019', 'scultura', 10),
(151, 51, 'Echi del passato', '2021', '2009', 'quadro', 11),
(152, 52, 'Danza di fuoco', '2020', '2018', 'scultura', 12),
(153, 53, 'Sogni nel vento', '2021', '2020', 'quadro', 13),
(154, 54, 'La pace della notte', '2020', '2021', 'scultura', 14),
(155, 55, 'Onda di emozioni', '2021', '2020', 'quadro', 15),
(156, 56, 'Il volto della natura', '2020', '2013', 'scultura', 16),
(157, 57, 'Tra cielo e terra', '2021', '2020', 'quadro', 17),
(158, 58, 'Il respiro dell\'oceano', '2020', '2018', 'scultura', 18),
(159, 59, 'L\'energia del movimento', '2021', '2013', 'quadro', 19),
(160, 60, 'La forza dell\'equilibrio', '2020', '2021', 'scultura', 20),
(161, 61, 'Il respiro della libertà', '2021', '2012', 'quadro', 1),
(162, 62, 'Tra luce e ombra', '2020', '2019', 'scultura', 2),
(163, 63, 'Nel cuore dell\'ignoto', '2021', '2020', 'quadro', 3),
(164, 64, 'Sogno di primavera', '2020', '2018', 'scultura', 4),
(165, 65, 'Il cammino dei sogni', '2021', '2020', 'quadro', 5),
(166, 66, 'Onde di silenzio', '2020', '2016', 'scultura', 6),
(167, 67, 'Riflessi di pace', '2021', '2020', 'quadro', 7),
(168, 68, 'Sfumature di sogno', '2020', '2021', 'scultura', 8),
(169, 69, 'Il volto dell\'anima', '2021', '2020', 'quadro', 9),
(170, 70, 'Il viaggio del cuore', '2020', '2019', 'scultura', 10),
(171, 71, 'Sotto il cielo aperto', '2021', '2020', 'quadro', 11),
(172, 72, 'I segreti del vento', '2020', '2018', 'scultura', 12),
(173, 73, 'Nel cuore dell\'infinito', '2021', '2020', 'quadro', 13),
(174, 74, 'Il respiro della natura', '2020', '2021', 'scultura', 14),
(175, 75, 'Oltre i confini del mondo', '2021', '2001', 'quadro', 15),
(176, 76, 'Luce di luna', '2020', '2019', 'scultura', 16),
(177, 77, 'Nel vento dell\'anima', '2021', '2009', 'quadro', 17),
(178, 78, 'La danza della vita', '2020', '2021', 'scultura', 18),
(179, 79, 'Il silenzio dell\'ombra', '2021', '2009', 'quadro', 19),
(180, 80, 'Alla ricerca di sé', '2020', '2006', 'scultura', 20),
(181, 81, 'Fiori nel vento', '2021', '2020', 'quadro', 1),
(182, 82, 'Sotto la superficie', '2020', '2019', 'scultura', 2),
(183, 83, 'Nel cuore dell\'infinito', '2021', '2020', 'quadro', 3),
(184, 84, 'Riflessi del passato', '2020', '2018', 'scultura', 4),
(185, 85, 'Il canto della terra', '2021', '2006', 'quadro', 5),
(186, 86, 'Sogni di fumo', '2020', '2019', 'scultura', 6),
(187, 87, 'Il cielo sopra di me', '2021', '2020', 'quadro', 7),
(188, 88, 'Sfumature di cielo', '2020', '2012', 'scultura', 8),
(189, 89, 'Il tempo dell\'anima', '2021', '2020', 'quadro', 9),
(190, 90, 'Alla ricerca dell\'eternità', '2020', '2019', 'scultura', 10),
(191, 91, 'Luce nella notte', '2021', '2020', 'quadro', 11),
(192, 92, 'Le ombre del silenzio', '2020', '2018', 'scultura', 12),
(193, 93, 'Oltre il cielo', '2021', '2020', 'quadro', 13),
(194, 94, 'Nella tempesta', '2020', '2014', 'scultura', 14),
(195, 95, 'Il respiro del cosmo', '2021', '2020', 'quadro', 15),
(196, 96, 'Un passo nel vuoto', '2020', '2019', 'scultura', 16),
(197, 97, 'L\'abisso dell\'anima', '2021', '2020', 'quadro', 17),
(198, 98, 'Sotto il cielo stellato', '2020', '2021', 'scultura', 18),
(199, 99, 'Tra le luci e le ombre', '2021', '2010', 'quadro', 19),
(200, 100, 'Sogni d\'argento', '2020', '2019', 'scultura', 20),
(201, 101, 'La danza del vento', '2021', '2020', 'quadro', 1),
(202, 102, 'Ombre di luce', '2020', '2019', 'scultura', 2),
(203, 103, 'Vita nell\'oceano', '2021', '2020', 'quadro', 3),
(204, 104, 'Sogni di cristallo', '2020', '2018', 'scultura', 4),
(205, 105, 'Oltre il confine', '2021', '2011', 'quadro', 5),
(206, 106, 'Fuga verso la libertà', '2020', '2019', 'scultura', 6),
(207, 107, 'Sotto le stelle', '2021', '2020', 'quadro', 7),
(208, 108, 'La rivelazione', '2020', '2021', 'scultura', 8),
(209, 109, 'Nel cuore della tempesta', '2021', '2020', 'quadro', 9),
(210, 110, 'Tra il cielo e la terra', '2020', '2019', 'scultura', 10),
(211, 111, 'Sogni d\'infinito', '2021', '2016', 'quadro', 11),
(212, 112, 'Il respiro del mare', '2020', '2018', 'scultura', 12),
(213, 113, 'Nel cuore della notte', '2021', '2020', 'quadro', 13),
(214, 114, 'Oltre il buio', '2020', '2021', 'scultura', 14),
(215, 115, 'Luce di luna', '2021', '2020', 'quadro', 15),
(216, 116, 'Viaggio nell\'ignoto', '2020', '2019', 'scultura', 16),
(217, 117, 'Riflessi sulla superficie', '2021', '2020', 'quadro', 17),
(218, 118, 'Nel vuoto dell\'universo', '2020', '2016', 'scultura', 18),
(219, 119, 'Sotto il cielo azzurro', '2021', '2020', 'quadro', 19),
(220, 120, 'Il cammino della speranza', '2020', '2014', 'scultura', 20),
(221, 101, 'Cielo senza confini', '2021', '2020', 'quadro', 1),
(222, 102, 'Sogno di tempesta', '2020', '2019', 'scultura', 2),
(223, 103, 'Tra le luci dell\'anima', '2021', '2020', 'quadro', 3),
(224, 104, 'Il volto della speranza', '2020', '2018', 'scultura', 4),
(225, 105, 'Nel giardino segreto', '2021', '2013', 'quadro', 5),
(226, 106, 'Il volo del pensiero', '2020', '2019', 'scultura', 6),
(227, 107, 'L\'infinito dentro di noi', '2021', '2020', 'quadro', 7),
(228, 108, 'Passaggi tra mondi', '2020', '2021', 'scultura', 8),
(229, 109, 'Nel respiro dell\'universo', '2021', '2020', 'quadro', 9),
(230, 110, 'Riflessi dell\'infinito', '2020', '2019', 'scultura', 10),
(231, 111, 'Vento e sabbia', '2021', '2011', 'quadro', 11),
(232, 112, 'L\'alba dei sogni', '2020', '2018', 'scultura', 12),
(233, 113, 'Il sentiero della verità', '2021', '2020', 'quadro', 13),
(234, 114, 'Dentro l\'oscurità', '2020', '2021', 'scultura', 14),
(235, 115, 'Sogni tra le nuvole', '2021', '2020', 'quadro', 15),
(236, 116, 'La forza dell\'essere', '2020', '2019', 'scultura', 16),
(237, 117, 'Il respiro della luce', '2021', '2020', 'quadro', 17),
(238, 118, 'Sotto l\'occhio della luna', '2020', '2017', 'scultura', 18),
(239, 119, 'L\'odore della terra', '2021', '2020', 'quadro', 19),
(240, 120, 'L\'essenza dell\'amore', '2020', '2012', 'scultura', 20),
(241, 1, 'Sogno di fuoco', '2021', '2015', 'quadro', 1),
(242, 2, 'Ombre tra le luci', '2020', '2018', 'scultura', 2),
(243, 3, 'Viaggio tra i mondi', '2021', '2020', 'quadro', 3),
(244, 4, 'Il silenzio dell\'oceano', '2020', '1979', 'scultura', 4),
(245, 5, 'Riflessi nell\'anima', '2021', '2019', 'quadro', 5),
(246, 6, 'Passaggi nell\'infinito', '2020', '1988', 'scultura', 6),
(247, 7, 'Danza di ombre', '2021', '2020', 'quadro', 7),
(248, 8, 'Sotto il cielo di fuoco', '2020', '2015', 'scultura', 8),
(249, 9, 'Il volto dell\'immortalità', '2021', '1971', 'quadro', 9),
(250, 10, 'Vento e mare', '2020', '2019', 'scultura', 10),
(251, 11, 'Riflessi nel cuore', '2021', '2017', 'quadro', 11),
(252, 12, 'Il mistero del silenzio', '2020', '2016', 'scultura', 12),
(253, 13, 'Nel cammino del vento', '2021', '2000', 'quadro', 13),
(254, 14, 'Onde di luce', '2020', '2018', 'scultura', 14),
(255, 15, 'Sogni tra le stelle', '2021', '2019', 'quadro', 15),
(256, 16, 'Sotto il manto del cielo', '2020', '1959', 'scultura', 16),
(257, 17, 'La voce del deserto', '2021', '2020', 'quadro', 17),
(258, 18, 'Nel cuore della terra', '2020', '1969', 'scultura', 18),
(259, 19, 'Luce nelle tenebre', '2021', '2019', 'quadro', 19),
(260, 20, 'Echi nel vento', '2020', '1986', 'scultura', 20),
(261, 21, 'Fiumi di luce', '2021', '2009', 'quadro', 1),
(262, 22, 'Riflessi di pietra', '2020', '2020', 'scultura', 2),
(263, 23, 'La danza dell\'infinito', '2021', '2003', 'quadro', 3),
(264, 24, 'Onde di sabbia', '2020', '2018', 'scultura', 4),
(265, 25, 'Il respiro del cosmo', '2021', '2021', 'quadro', 5),
(266, 26, 'Nel cuore del silenzio', '2020', '2016', 'scultura', 6),
(267, 27, 'Vita tra le stelle', '2021', '2017', 'quadro', 7),
(268, 28, 'Sotto il cielo azzurro', '2020', '2019', 'scultura', 8),
(269, 29, 'La voce del mare', '2021', '2010', 'quadro', 9),
(270, 30, 'Sotto le onde', '2020', '2020', 'scultura', 10),
(271, 31, 'Nel giardino segreto', '2021', '2015', 'quadro', 11),
(272, 32, 'Il volto dell\'invisibile', '2020', '1995', 'scultura', 12),
(273, 33, 'Sogni nella nebbia', '2021', '2017', 'quadro', 13),
(274, 34, 'Nel silenzio della notte', '2020', '2016', 'scultura', 14),
(275, 35, 'Luce oltre il buio', '2021', '2018', 'quadro', 15),
(276, 36, 'Il respiro della terra', '2020', '1998', 'scultura', 16),
(277, 37, 'La ricerca dell\'anima', '2021', '2020', 'quadro', 17),
(278, 38, 'Nel cuore del mondo', '2020', '2016', 'scultura', 18),
(279, 39, 'Sogni di pietra', '2021', '2017', 'quadro', 19),
(280, 40, 'Luce nelle profondità', '2020', '2018', 'scultura', 20),
(281, 40, 'Tracce nel deserto', '2021', '2019', 'quadro', 1),
(282, 41, 'Riflessi nell\'acqua', '2020', '2003', 'scultura', 2),
(283, 42, 'Voci lontane', '2021', '2017', 'quadro', 3),
(284, 43, 'Nel cuore della tempesta', '2020', '2021', 'scultura', 4),
(285, 44, 'Sogno di pietra', '2021', '2015', 'quadro', 5),
(286, 45, 'Tra i colori del vento', '2020', '2019', 'scultura', 6),
(287, 46, 'Fughe nell\'infinito', '2021', '2002', 'quadro', 7),
(288, 47, 'Onde e sabbia', '2020', '2018', 'scultura', 8),
(289, 48, 'Luce tra le ombre', '2021', '2017', 'quadro', 9),
(290, 49, 'Riflessi d\'infinito', '2020', '2012', 'scultura', 10),
(291, 50, 'Sotto il cielo di fuoco', '2021', '2016', 'quadro', 11),
(292, 51, 'Vento e silenzio', '2020', '2011', 'scultura', 12),
(293, 52, 'Sogni di vetro', '2021', '2015', 'quadro', 13),
(294, 53, 'Riflessi di luna', '2020', '2020', 'scultura', 14),
(295, 54, 'Tra le stelle', '2021', '2018', 'quadro', 15),
(296, 55, 'Nel cuore della terra', '2020', '2017', 'scultura', 16),
(297, 56, 'Il respiro dell\'oceano', '2021', '2014', 'quadro', 17),
(298, 57, 'Sogni in movimento', '2020', '2021', 'scultura', 18),
(299, 58, 'L\'anima del vento', '2021', '2019', 'quadro', 19),
(300, 59, 'Il volto della tempesta', '2020', '2008', 'scultura', 20),
(301, 60, 'Onde nella mente', '2021', '2018', 'quadro', 1),
(302, 40, 'Echi nel buio', '2020', '2017', 'scultura', 2),
(303, 41, 'Luce senza fine', '2021', '2004', 'quadro', 3),
(304, 42, 'Tra le ombre del tempo', '2020', '2015', 'scultura', 4),
(305, 43, 'Sotto il cielo d\'argento', '2021', '2019', 'quadro', 5),
(306, 44, 'Il cammino dell\'infinito', '2020', '2016', 'scultura', 6),
(307, 45, 'Onde di speranza', '2021', '2016', 'quadro', 7),
(308, 46, 'Fughe nell\'oscurità', '2020', '2017', 'scultura', 8),
(309, 47, 'Riflessi di pietra', '2021', '2015', 'quadro', 9),
(310, 48, 'Sogni nel vento', '2020', '2020', 'scultura', 10),
(311, 49, 'Tra i segreti dell\'oceano', '2021', '2016', 'quadro', 11),
(312, 50, 'Nel cuore della notte', '2020', '2019', 'scultura', 12),
(313, 51, 'Sotto la superficie', '2021', '2013', 'quadro', 13),
(314, 52, 'Il respiro della luna', '2020', '2017', 'scultura', 14),
(315, 53, 'Riflessi nel cosmo', '2021', '2020', 'quadro', 15),
(316, 54, 'Sogno di cristallo', '2020', '2019', 'scultura', 16),
(317, 55, 'La danza delle stelle', '2021', '2018', 'quadro', 17),
(318, 56, 'Onde nell\'abisso', '2020', '2011', 'scultura', 18),
(319, 57, 'Nel cuore dell\'infinito', '2021', '2016', 'quadro', 19),
(320, 58, 'Sotto il cielo di fuoco', '2020', '2015', 'scultura', 20),
(321, 1, 'Il volo della fantasia', '2021', '2004', 'quadro', 1),
(322, 2, 'Sogni di luce', '2020', '2010', 'scultura', 2),
(323, 3, 'Il respiro del vento', '2021', '2008', 'quadro', 3),
(324, 4, 'Echi di un passato', '2020', '2005', 'scultura', 4),
(325, 5, 'La danza delle ombre', '2021', '2012', 'quadro', 5),
(326, 6, 'Nel cuore del mare', '2020', '1985', 'scultura', 6),
(327, 7, 'Luce nel buio', '2021', '2007', 'quadro', 7),
(328, 8, 'Riflessi di pietra', '2020', '2009', 'scultura', 8),
(329, 9, 'Danza di spiriti', '2021', '1993', 'quadro', 9),
(330, 10, 'Sotto il cielo d\'argento', '2020', '2014', 'scultura', 10),
(331, 11, 'Il segreto dell\'infinito', '2021', '2006', 'quadro', 11),
(332, 12, 'Fiori nell\'ombra', '2020', '2002', 'scultura', 12),
(333, 13, 'Riflessi nell\'acqua', '2021', '2007', 'quadro', 13),
(334, 14, 'Nel giardino della memoria', '2020', '2011', 'scultura', 14),
(335, 15, 'Dove il cielo incontra la terr', '2021', '2004', 'quadro', 15),
(336, 16, 'Il canto delle stelle', '2020', '1970', 'scultura', 16),
(337, 17, 'Vento d\'infinito', '2021', '2009', 'quadro', 17),
(338, 18, 'Nel cuore del silenzio', '2020', '1980', 'scultura', 18),
(339, 19, 'Sogni di pietra', '2021', '2006', 'quadro', 19),
(340, 20, 'Riflessi di cristallo', '2020', '2010', 'scultura', 20),
(341, 21, 'Il respiro del cosmo', '2021', '2003', 'quadro', 1),
(342, 22, 'Sotto la luna', '2020', '2008', 'scultura', 2),
(343, 23, 'Onde nel cuore', '2021', '2001', 'quadro', 3),
(344, 24, 'Il segreto del mare', '2020', '2016', 'scultura', 4),
(345, 25, 'Sogni tra le stelle', '2021', '2007', 'quadro', 5),
(346, 26, 'Il mistero dell\'oscurità', '2020', '2010', 'scultura', 6),
(347, 27, 'Danza di luci', '2021', '2005', 'quadro', 7),
(348, 28, 'Nel cuore della notte', '2020', '2014', 'scultura', 8),
(349, 29, 'Il sogno delle onde', '2021', '2006', 'quadro', 9),
(350, 30, 'Tra le ombre', '2020', '2015', 'scultura', 10),
(351, 31, 'Voci nell\'aria', '2021', '2004', 'quadro', 11),
(352, 32, 'Il volto del vento', '2020', '2002', 'scultura', 12),
(353, 33, 'Dove il cielo si spezza', '2021', '2009', 'quadro', 13),
(354, 34, 'Il mistero del silenzio', '2020', '2011', 'scultura', 14),
(355, 35, 'Tra i sogni di pietra', '2021', '2008', 'quadro', 15),
(356, 36, 'Riflessi nell\'anima', '2020', '2003', 'scultura', 16),
(357, 37, 'Nel cuore dell\'abisso', '2021', '2007', 'quadro', 17),
(358, 38, 'Sogni tra le onde', '2020', '2013', 'scultura', 18),
(359, 39, 'Danza di luce', '2021', '2005', 'quadro', 19),
(360, 40, 'Nel giardino dell\'anima', '2020', '2009', 'scultura', 20),
(361, 100, 'Sogno di fuoco', '2021', '2015', 'quadro', 1),
(362, 101, 'Riflessi nell\'ombra', '2020', '2013', 'scultura', 2),
(363, 102, 'Nel cuore della tempesta', '2021', '2016', 'quadro', 3),
(364, 103, 'Onde e silenzio', '2020', '2018', 'scultura', 4),
(365, 104, 'Sogni nel deserto', '2021', '2004', 'quadro', 5),
(366, 105, 'Voci nel vento', '2020', '2012', 'scultura', 6),
(367, 106, 'Luce di cristallo', '2021', '2007', 'quadro', 7),
(368, 107, 'Danza di pietra', '2020', '2003', 'scultura', 8),
(369, 108, 'Sotto il cielo d\'argento', '2021', '2010', 'quadro', 9),
(370, 109, 'Il respiro dell\'oceano', '2020', '2015', 'scultura', 10),
(371, 110, 'Nel cuore del mare', '2021', '2008', 'quadro', 11),
(372, 111, 'Sogni tra le stelle', '2020', '2002', 'scultura', 12),
(373, 112, 'Riflessi di luce', '2021', '2009', 'quadro', 13),
(374, 113, 'Sotto la luna', '2020', '2011', 'scultura', 14),
(375, 114, 'Nel giardino dell\'anima', '2021', '2006', 'quadro', 15),
(376, 115, 'Il respiro della terra', '2020', '2004', 'scultura', 16),
(377, 116, 'Riflessi d\'infinito', '2021', '2017', 'quadro', 17),
(378, 117, 'Il canto della notte', '2020', '2019', 'scultura', 18),
(379, 118, 'Sogni di pietra', '2021', '2014', 'quadro', 19),
(380, 119, 'Onde di cristallo', '2020', '2020', 'scultura', 20),
(381, 100, 'Nel cuore del silenzio', '2021', '2005', 'quadro', 1),
(382, 101, 'La danza delle ombre', '2020', '2007', 'scultura', 2),
(383, 102, 'Sogni di sabbia', '2021', '2006', 'quadro', 3),
(384, 103, 'Tra i colori del vento', '2020', '2012', 'scultura', 4),
(385, 104, 'Danza nell\'abisso', '2021', '2008', 'quadro', 5),
(386, 105, 'Sotto il cielo di fuoco', '2020', '2014', 'scultura', 6),
(387, 106, 'Riflessi nel cosmo', '2021', '2011', 'quadro', 7),
(388, 107, 'Luce nel buio', '2020', '2010', 'scultura', 8),
(389, 108, 'Vento d\'infinito', '2021', '2009', 'quadro', 9),
(390, 109, 'Onde di pietra', '2020', '2004', 'scultura', 10),
(391, 110, 'Il respiro del vento', '2021', '2013', 'quadro', 11),
(392, 111, 'Nel cuore della notte', '2020', '2016', 'scultura', 12),
(393, 112, 'Sogni di luce', '2021', '2007', 'quadro', 13),
(394, 113, 'Sotto la luna', '2020', '2003', 'scultura', 14),
(395, 114, 'Danza nell\'infinito', '2021', '2012', 'quadro', 15),
(396, 115, 'Tra i sogni di pietra', '2020', '2005', 'scultura', 16),
(397, 116, 'Voci nell\'aria', '2021', '2015', 'quadro', 17),
(398, 117, 'Il respiro della luce', '2020', '2006', 'scultura', 18),
(399, 118, 'Riflessi d\'acqua', '2021', '2006', 'quadro', 19),
(400, 119, 'Sogni di cristallo', '2020', '2011', 'scultura', 20),
(401, 80, 'Riflessi del passato', '2021', '2005', 'quadro', 1),
(402, 81, 'Tra le stelle', '2020', '2007', 'scultura', 2),
(403, 82, 'Sogni nell\'oscurità', '2021', '2010', 'quadro', 3),
(404, 83, 'Vento di luce', '2020', '2009', 'scultura', 4),
(405, 84, 'Danza di cristallo', '2021', '2013', 'quadro', 5),
(406, 85, 'Sotto il cielo di fuoco', '2020', '2015', 'scultura', 6),
(407, 86, 'Riflessi nel cuore', '2021', '2006', 'quadro', 7),
(408, 87, 'Sogni tra le onde', '2020', '2012', 'scultura', 8),
(409, 88, 'Nel giardino dei sogni', '2021', '2004', 'quadro', 9),
(410, 89, 'Sotto la luce del sole', '2020', '2008', 'scultura', 10),
(411, 90, 'Voci nell\'aria', '2021', '2016', 'quadro', 11),
(412, 91, 'Luce di speranza', '2020', '2014', 'scultura', 12),
(413, 92, 'Riflessi di silenzio', '2021', '2007', 'quadro', 13),
(414, 93, 'Tra le ombre', '2020', '2011', 'scultura', 14),
(415, 94, 'Sogni nell\'anima', '2021', '2015', 'quadro', 15),
(416, 95, 'Il respiro del mare', '2020', '2013', 'scultura', 16),
(417, 96, 'Danza di sogni', '2021', '2012', 'quadro', 17),
(418, 97, 'Il cuore del silenzio', '2020', '2006', 'scultura', 18),
(419, 98, 'Riflessi di luna', '2021', '2010', 'quadro', 19),
(420, 99, 'Nel vuoto dell\'anima', '2020', '2004', 'scultura', 20),
(421, 80, 'Sogni di sabbia', '2021', '2003', 'quadro', 1),
(422, 81, 'Il respiro della luce', '2020', '2007', 'scultura', 2),
(423, 82, 'Riflessi nel tempo', '2021', '2009', 'quadro', 3),
(424, 83, 'Sogno d\'infinito', '2020', '2015', 'scultura', 4),
(425, 84, 'Il segreto della pietra', '2021', '2016', 'quadro', 5),
(426, 85, 'Vento tra le rocce', '2020', '2005', 'scultura', 6),
(427, 86, 'Danza nell\'ombra', '2021', '2010', 'quadro', 7),
(428, 87, 'Riflessi nell\'oceano', '2020', '2008', 'scultura', 8),
(429, 88, 'Sotto il cielo grigio', '2021', '2014', 'quadro', 9),
(430, 89, 'Luce di cristallo', '2020', '2006', 'scultura', 10),
(431, 90, 'Riflessi nell\'acqua', '2021', '2003', 'quadro', 11),
(432, 91, 'Nel cuore dell\'anima', '2020', '2004', 'scultura', 12),
(433, 92, 'Il sogno del vento', '2021', '2017', 'quadro', 13),
(434, 93, 'Onde nel cuore', '2020', '2011', 'scultura', 14),
(435, 94, 'Sotto il cielo azzurro', '2021', '2010', 'quadro', 15),
(436, 95, 'Il canto delle stelle', '2020', '2009', 'scultura', 16),
(437, 96, 'Nel giardino dei riflessi', '2021', '2005', 'quadro', 17),
(438, 97, 'Voci nell\'universo', '2020', '2007', 'scultura', 18),
(439, 98, 'Riflessi di pietra', '2021', '2002', 'quadro', 19),
(440, 99, 'Sogni d\'acqua', '2020', '2008', 'scultura', 20);

--
-- Trigger `opera`
--
DELIMITER $$
CREATE TRIGGER `check_annoRealizzazione_vs_dataMorte_insert` BEFORE INSERT ON `opera` FOR EACH ROW BEGIN
    DECLARE data_morte DATE;

    SELECT dataMorte INTO data_morte
    FROM Autore
    WHERE codice = NEW.autore;

    IF data_morte IS NOT NULL AND NEW.annoRealizzazione > YEAR(data_morte) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Errore: l''anno di realizzazione dell''opera è successivo alla data di morte dell''autore.';
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `check_annoRealizzazione_vs_dataMorte_update` BEFORE UPDATE ON `opera` FOR EACH ROW BEGIN
    DECLARE data_morte DATE;

    SELECT dataMorte INTO data_morte
    FROM Autore
    WHERE codice = NEW.autore;

    IF data_morte IS NOT NULL AND NEW.annoRealizzazione > YEAR(data_morte) THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Errore: l''anno di realizzazione dell''opera è successivo alla data di morte dell''autore.';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `sala`
--

CREATE TABLE `sala` (
  `numero` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `superficie` int(11) NOT NULL,
  `temaSala` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `sala`
--

INSERT INTO `sala` (`numero`, `nome`, `superficie`, `temaSala`) VALUES
(1, 'Galleria Aurora', 250, 1),
(2, 'Sala Ovest', 70, 2),
(3, 'Sala delle Colonne', 400, 3),
(4, 'Padiglione Est', 90, 4),
(5, 'Sala Riflessi', 310, 5),
(6, 'Galleria Centrale', 160, 6),
(7, 'Sala delle Ombre', 120, 7),
(8, 'Atrio Armonia', 730, 8),
(9, 'Sala Infinito', 230, 9),
(10, 'Corte Interna', 35, 10),
(11, 'Galleria Nuova', 480, 11),
(12, 'Sala Altavista', 280, 12),
(13, 'Padiglione Nord', 130, 13),
(14, 'Sala Luminosa', 620, 14),
(15, 'Spazio Contemporaneo', 50, 15),
(16, 'Sala del Vento', 180, 1),
(17, 'Galleria Sud', 360, 2),
(18, 'Sala delle Proporzio', 200, 5),
(19, 'Corte delle Idee', 410, 9),
(20, 'Atrio Secondario', 85, 7);

-- --------------------------------------------------------

--
-- Struttura della tabella `tema`
--

CREATE TABLE `tema` (
  `codice` int(11) NOT NULL,
  `descrizione` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tema`
--

INSERT INTO `tema` (`codice`, `descrizione`) VALUES
(1, 'Arte classica'),
(2, 'Espressionismo astratto'),
(3, 'Rinascimento'),
(4, 'Romanticismo'),
(5, 'Arte contemporanea'),
(6, 'Pop art'),
(7, 'Post-impressionismo'),
(8, 'Arte leonardesca'),
(9, 'Surrealismo'),
(10, 'Umanesimo'),
(11, 'Moderno europeo'),
(12, 'Realismo americano'),
(13, 'Color field'),
(14, 'Cubismo'),
(15, 'Impressionismo');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `autore`
--
ALTER TABLE `autore`
  ADD PRIMARY KEY (`codice`);

--
-- Indici per le tabelle `opera`
--
ALTER TABLE `opera`
  ADD PRIMARY KEY (`codice`),
  ADD KEY `autore` (`autore`),
  ADD KEY `espostaInSala` (`espostaInSala`);

--
-- Indici per le tabelle `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`numero`),
  ADD KEY `temaSala` (`temaSala`);

--
-- Indici per le tabelle `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`codice`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `opera`
--
ALTER TABLE `opera`
  MODIFY `codice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=441;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `opera`
--
ALTER TABLE `opera`
  ADD CONSTRAINT `opera_ibfk_1` FOREIGN KEY (`autore`) REFERENCES `autore` (`codice`),
  ADD CONSTRAINT `opera_ibfk_2` FOREIGN KEY (`espostaInSala`) REFERENCES `sala` (`numero`);

--
-- Limiti per la tabella `sala`
--
ALTER TABLE `sala`
  ADD CONSTRAINT `sala_ibfk_1` FOREIGN KEY (`temaSala`) REFERENCES `tema` (`codice`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
