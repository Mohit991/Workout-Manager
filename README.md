# Workout Manager

Workout Manager is a full-stack web application for tracking and managing your workout routines. You can easily create, view, edit, and delete workout routines to help you stay on track with your fitness goals. This README provides information about both the frontend and backend components of the project.
The app can be accessed and used at: [https://workout-manager-bwj3.vercel.app/](https://workout-manager-bwj3.vercel.app/).

![image](https://github.com/Mohit991/Workout-Manager/assets/36065945/0b8b3f2f-bbd9-4d62-b153-a9109e433022)

## Frontend

The frontend of Workout Manager is built using React and the Context API provided by React. It offers the user interface for creating, viewing, and managing workout routines. The frontend communicates with the backend API to perform CRUD operations on workout data.

### Frontend Repository

- GitHub Repository: [Workout Manager Backend](https://github.com/Mohit991/Workout-Manager/tree/main/Frontend)

## Backend

The backend of Workout Manager serves as the API responsible for storing and retrieving workout routine data. It is built using Node.js, Express.js, and MongoDB. The backend offers RESTful endpoints for managing workout routines, which are consumed by the frontend.

### Backend Repository

- GitHub Repository: [Workout Manager Backend](https://github.com/Mohit991/Workout-Manager/tree/main/Backend)

### Technologies Used

- **Node.js**: The runtime environment for running the backend server.
- **Express.js**: A web application framework for building APIs.
- **MongoDB**: A NoSQL database for storing workout routine data.
- **Mongoose**: A library for simplifying MongoDB operations.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.

### Getting Started with Backend

To run the backend of the project on your local machine, follow these steps:

1. Clone the backend repository to your local machine:

  git clone https://github.com/Mohit991/Workout-Manager.git
  
Navigate to the backend directory:


cd Backend

Install the project dependencies:


npm install

Start the backend server:


npm start

The backend server will start running on a specified port.

User Accounts
You can create your own user account by providing a username and password. Once logged in, you can:

Create new workout routines
Edit existing workout routines
Delete workout routines
View your workout routines
Log out
The project does not use Redux for state management; instead, it utilizes the Context API provided by React.

Usage
The frontend communicates with the backend API to manage workout routines.
The frontend uses the following API endpoints to interact with the backend:
GET /workouts: Fetch all workout routines.
POST /workouts: Create a new workout routine.
GET /workouts/:id: Fetch a specific workout routine.
PUT /workouts/:id: Update a workout routine.
DELETE /workouts/:id: Delete a workout routine.
Project Structure
The project structure includes both the frontend and backend components. The frontend files are located in the project root, while the backend files are in the Backend directory.

Contributing
Contributions to this project are welcome! If you would like to contribute to the frontend or backend, please follow the instructions provided in their respective repositories.


Author
Mohit991
Feel free to reach out if you have any questions or suggestions!


