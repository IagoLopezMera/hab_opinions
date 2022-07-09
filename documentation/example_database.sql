-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: opinionsForumDB
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Opinion`
--

DROP TABLE IF EXISTS `Opinion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Opinion` (
  `idOpinion` int NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `idTopic` int NOT NULL,
  `idUser` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idOpinion`),
  KEY `fk_Opinion_User_idx` (`idUser`),
  KEY `fk_Opinion_Topic_idx` (`idTopic`),
  CONSTRAINT `fk_Opinion_Topic` FOREIGN KEY (`idTopic`) REFERENCES `Topic` (`idTopic`),
  CONSTRAINT `fk_Opinion_User` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Opinion`
--

LOCK TABLES `Opinion` WRITE;
/*!40000 ALTER TABLE `Opinion` DISABLE KEYS */;
INSERT INTO `Opinion` VALUES (18,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.\n\nPellentesque sit amet vulputate arcu. Aenean sollicitudin, elit nec aliquet feugiat, ex lorem imperdiet lectus, a bibendum tellus purus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rhoncus dignissim euismod. Sed a ullamcorper mi, vel imperdiet sem. Phasellus sed augue eget sem imperdiet facilisis. Vestibulum lacinia laoreet mauris, eget iaculis orci fermentum sit amet. Pellentesque mollis felis eu libero fermentum rhoncus. Sed et metus nibh. Integer laoreet nulla quis tortor luctus cursus. Etiam tincidunt odio in libero sodales ultricies. ',2,4,'2022-06-16 18:33:32'),(19,' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.\n\nPellentesque sit amet vulputate arcu. Aenean sollicitudin, elit nec aliquet feugiat, ex lorem imperdiet lectus, a bibendum tellus purus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rhoncus dignissim euismod. Sed a ullamcorper mi, vel imperdiet sem. Phasellus sed augue eget sem imperdiet facilisis. Vestibulum lacinia laoreet mauris, eget iaculis orci fermentum sit amet. Pellentesque mollis felis eu libero fermentum rhoncus. Sed et metus nibh. Integer laoreet nulla quis tortor luctus cursus. Etiam tincidunt odio in libero sodales ultricies. ',3,4,'2022-06-16 18:34:03'),(20,' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.',4,4,'2022-06-16 18:34:13'),(21,' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.\n\nPellentesque sit amet vulputate arcu. Aenean sollicitudin, elit nec aliquet feugiat, ex lorem imperdiet lectus, a bibendum tellus purus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rhoncus dignissim euismod. Sed a ullamcorper mi, vel imperdiet sem. Phasellus sed augue eget sem imperdiet facilisis. Vestibulum lacinia laoreet mauris, eget iaculis orci fermentum sit amet. Pellentesque mollis felis eu libero fermentum rhoncus. Sed et metus nibh. Integer laoreet nulla quis tortor luctus cursus. Etiam tincidunt odio in libero sodales ultricies. ',6,4,'2022-06-16 18:34:24'),(22,' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.\n\nPellentesque sit amet vulputate arcu. Aenean sollicitudin, elit nec aliquet feugiat, ex lorem imperdiet lectus, a bibendum tellus purus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rhoncus dignissim euismod. Sed a ullamcorper mi, vel imperdiet sem. Phasellus sed augue eget sem imperdiet facilisis. Vestibulum lacinia laoreet mauris, eget iaculis orci fermentum sit amet. Pellentesque mollis felis eu libero fermentum rhoncus. Sed et metus nibh. Integer laoreet nulla quis tortor luctus cursus. Etiam tincidunt odio in libero sodales ultricies. ',6,4,'2022-06-16 18:34:33'),(23,' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat venenatis diam. Integer et dolor finibus lorem mattis pellentesque placerat eu leo. Donec at pretium nisl, et pellentesque purus. Suspendisse varius vulputate ex, id volutpat nisl sodales nec. Nulla facilisi. Suspendisse bibendum non ex in vulputate. Aliquam imperdiet leo sed ante semper dapibus. Fusce egestas id ligula et varius. Proin dapibus urna at vulputate varius.\n\nPellentesque sit amet vulputate arcu. Aenean sollicitudin, elit nec aliquet feugiat, ex lorem imperdiet lectus, a bibendum tellus purus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rhoncus dignissim euismod. Sed a ullamcorper mi, vel imperdiet sem. Phasellus sed augue eget sem imperdiet facilisis. Vestibulum lacinia laoreet mauris, eget iaculis orci fermentum sit amet. Pellentesque mollis felis eu libero fermentum rhoncus. Sed et metus nibh. Integer laoreet nulla quis tortor luctus cursus. Etiam tincidunt odio in libero sodales ultricies. ',4,7,'2022-06-16 18:35:21');
/*!40000 ALTER TABLE `Opinion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rating`
--

DROP TABLE IF EXISTS `Rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rating` (
  `idUser` int NOT NULL,
  `idOpinion` int NOT NULL,
  `ratingType` bit(1) NOT NULL,
  PRIMARY KEY (`idUser`,`idOpinion`),
  KEY `fk_Rating_Opinion_idx` (`idOpinion`),
  CONSTRAINT `fk_Rating_Opinion` FOREIGN KEY (`idOpinion`) REFERENCES `Opinion` (`idOpinion`),
  CONSTRAINT `fk_Rating_User` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rating`
--

LOCK TABLES `Rating` WRITE;
/*!40000 ALTER TABLE `Rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `Rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Topic`
--

DROP TABLE IF EXISTS `Topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Topic` (
  `idTopic` int NOT NULL AUTO_INCREMENT,
  `description` varchar(32) NOT NULL,
  PRIMARY KEY (`idTopic`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Topic`
--

LOCK TABLES `Topic` WRITE;
/*!40000 ALTER TABLE `Topic` DISABLE KEYS */;
INSERT INTO `Topic` VALUES (2,'ProgrammerHummor'),(3,'Programming'),(4,'Linux'),(5,'JavaScript'),(6,'NodeJs'),(7,'SQL');
/*!40000 ALTER TABLE `Topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `password` varchar(60) NOT NULL,
  `email` varchar(64) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'$2b$08$wKqy.la2A7NtZWwxI143au/MjobbV2N8S1g8CuroAlLQC.Pq8KYWq','example@example.com','example1'),(2,'$2b$08$wKqy.la2A7NtZWwxI143au/MjobbV2N8S1g8CuroAlLQC.Pq8KYWq','example2@example.com','example2'),(3,'$2b$08$wKqy.la2A7NtZWwxI143au/MjobbV2N8S1g8CuroAlLQC.Pq8KYWq','example100@example.com','example100'),(4,'$2b$08$kl8RFxXfSFUiRBsmzmodRuVXQ2IcscizEdQHkUecej5bN8uKPmoPy','example313@example.com','example313'),(5,'$2b$08$j7pOFA4LCEL8um82vXIICu12TtiJ2F/etBFeyTDMMEVVLJofq32ra','jaimito@example.com','jaimito'),(6,'$2b$08$Ldg0A23xu6aOrly9t0g0iu59cE9QPsonoyvFF6cUYpkowTbZkXVty','example12@example.com','example12'),(7,'$2b$08$BEnmYNjOgnjvufTHRSNLjebv6bArSXV5JqSzvgJcUJVr/T7AXPH6.','example13@example.com','example13'),(8,'$2b$08$99sKAtzKTAtP8EojQJmpjOa57AVXnTp7IiCDRQmOi4vJjDWE7OjH.','example14@example.com','example14'),(9,'$2b$08$aTEIXrlxAI1uIZ22Knj7gOi6bpBcjsRgMchReR9A6a0jBv9bTMHKO','example15@example.com','example15');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-16 18:36:17
