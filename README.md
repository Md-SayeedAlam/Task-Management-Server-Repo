# Project Name is : Task Management Server

## Introduction
This project is built using Node.js and Express, with MongoDB as the database. It includes environment-based configuration using `dotenv` and supports CORS for cross-origin requests.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Features](#features)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation
To set up this project, follow these steps:

1. **Clone the repository**  
   ```sh
   git clone https://github.com/Md-SayeedAlam/Task-Management-Server-Repo
   cd <project_directory>
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root of your project and add the following:
   ```env
   DB_USER=<your_database_username>
   DB_PASS=<your_database_password>
   ```

4. **Run the application**  
   ```sh
   npm start
   ```

## Configuration
This project uses environment variables to manage database credentials. Update the `.env` file with your database details.

## Usage
- Start the server with `npm start`
- The backend API runs on the specified port
- Use an API testing tool like Postman to interact with the server

## Dependencies
The project uses the following dependencies:
- **cors** (`^2.8.5`) - Enables Cross-Origin Resource Sharing
- **dotenv** (`^16.4.7`) - Loads environment variables
- **express** (`^4.21.2`) - Web framework for Node.js
- **mongodb** (`^6.13.0`) - MongoDB driver for Node.js

## Features
- Secure environment variable management
- Express-based API server
- MongoDB integration
- CORS support for handling cross-origin requests

## Troubleshooting
- **Issue: Server not starting**  
  _Solution_: Check if all dependencies are installed using `npm install`.

- **Issue: Database connection fails**  
  _Solution_: Ensure `.env` contains the correct `DB_USER` and `DB_PASS` values.

## License
This project is licensed under [MIT License](LICENSE).




## GITHUB REPOSITORY LINK (CLIENT SIDE) : https://github.com/Md-SayeedAlam/Task_Management_Client_Repo

## GITHUB REPOSITORY LINK (SERVER SIDE) : https://github.com/Md-SayeedAlam/Task-Management-Server-Repo

## LIVE LINK : FIREBASE : https://restaurant-management-9fcba.web.app/

## LIVE lINK: NETLIFY:  https://sayeed-task-management.netlify.app/

## LIVE lINK (SERVER): Vercel: https://task-management-application-server-theta.vercel.app/

---


