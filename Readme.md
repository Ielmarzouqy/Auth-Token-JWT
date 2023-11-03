# AlloMedia-API
This is the backend API for AlloMedia, a restaurant delivery application. Itfirst part of application  user management.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Installation Backend](#1-installation)
  - [2. Configuration](#2-configuration)
  - [3. Database Setup](#3-database-setup)
  - [4. Running the Application Backend](#4-running-the-application)
## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- MongoDB: You need a MongoDB instance as the database for the application. You can install it locally or use a cloud-hosted solution like MongoDB Atlas.
- Docker: If you want to containerize your application, make sure Docker is installed. You can download it from [httpsnbnb://www.docker.com/](https://www.docker.com/).

## Getting Started
These instructions will help you set up and run the AlloMedia API on your local machine for development and testing purposes.

### 1. installation
- Clone this repository:
  ```bash
  git clone https://github.com/Ielmarzouqy/Auth-Token-JWT
  ```
- Navigate to the project directory:
  ```bash
  cd server
  ```
- Install the required dependencies:
  ```bash
  npm install
  ```

### 2. Configuration
Duplicate the .env.example file and rename it to .env
```bash
cp .env.example .env
```
Update the environment variables in the .env file as needed for your local setup.

### 3. Database Setup
- Ensure that your MongoDB server is up and running.

### 4. Running the Application Backend
To start the AlloMedia API, run the following command:
```bash
npm run dev
```
By default, the server will run on http://localhost:5000. 


### 5. installation Frontend

- Navigate to the project directory:
  ```bash
  cd client
  ```
- Install the required dependencies:
  ```bash
  npm install
  ```

### 6. Running the Application  Frontend
To start the AlloMedia API, run the following command:
```bash
npm start
```
By default, the server will run on http://localhost:3000. 

### 7. Technologies using:


Front-End: Reactjs is a frreamwork js engine for interface-side .

Back-End: Node.js and Express.js for the server-side logic.

Database: We use mongoDb database to store user information.

User Autorization : using JWT to autorize the application  .

Version Control: Git for code management and collaboration. Docker for Dockrize the application