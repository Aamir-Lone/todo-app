Todo App with Node.js and MongoDB
Project Description
This is a simple To-Do application built with Node.js and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on to-do items. The to-do items include a title, description, and a completion status. The application exposes a set of RESTful APIs that allow interacting with the to-do list.

Features:
Create a To-Do: Allows users to create a new to-do item with a title, description, and completion status.
Get All To-Dos: Retrieve all the to-do items stored in the database.
Get a Single To-Do by ID: Retrieve a specific to-do item by its unique ID.
Update a To-Do: Modify an existing to-do item (title, description, completion status).
Delete a To-Do: Remove a specific to-do item from the database.
Tech Stack
Backend: Node.js with Express.js
Database: MongoDB (using Mongoose for database interactions)
Environment Variables: dotenv (for managing configuration)
CORS: Enabled to allow cross-origin requests
Getting Started
To get this project up and running on your local machine, follow the steps below:

Prerequisites:
Node.js: Make sure Node.js is installed on your machine.
MongoDB: You need a running MongoDB instance. You can either set up a local MongoDB server or use a cloud database provider like MongoDB Atlas.
Installation Steps:
Clone the repository:
git clone https://github.com/Aamir-Lone/todo-app
cd todo-app
Install the dependencies:
npm install
Set up environment variables:
Create a .env file in the root of the project and add your MongoDB connection string. You can get it from your MongoDB Atlas account or use a local MongoDB instance:

MONGO_URI=mongodb+srv://<Aam***>:<*****>@cluster0.1zwiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000

NOTE: replace <Aam***> and <*****> with your actual MongoDB credentials

Start the application:


API Endpoints
1. POST /api/todos: Create a new To-Do
Request Body:
{
  "title": "Complete assignment",
  "description": "Submit before deadline"
}

Response:

{
  "_id": "5fdfb9d6c1f23a29b080c5d0",
  "title": "Complete assignment",
  "description": "Submit before deadline",
  "completed": false,
  "createdAt": "2025-02-13T11:51:54.730Z",
  "__v": 0
}


2. GET /api/todos: Get All To-Dos
Response:
[
  {
    "_id": "5fdfb9d6c1f23a29b080c5d0",
    "title": "Complete assignment",
    "description": "Submit before deadline",
    "completed": false,
    "createdAt": "2025-02-13T11:51:54.730Z",
    "__v": 0
  },
  ...
]



3. GET /api/todos/:id: Get a single To-Do by ID
Request Example: /api/todos/5fdfb9d6c1f23a29b080c5d0

Response:
{
  "_id": "5fdfb9d6c1f23a29b080c5d0",
  "title": "Complete assignment",
  "description": "Submit before deadline",
  "completed": false,
  "createdAt": "2025-02-13T11:51:54.730Z",
  "__v": 0
}

4. PUT /api/todos/:id: Update a To-Do
Request Body:

{
  "title": "Complete assignment",
  "description": "Submit before deadline",
  "completed": true
}
Response:

{
  "_id": "5fdfb9d6c1f23a29b080c5d0",
  "title": "Complete assignment",
  "description": "Submit before deadline",
  "completed": true,
  "createdAt": "2025-02-13T11:51:54.730Z",
  "__v": 0
}


5. DELETE /api/todos/:id: Delete a To-Do
Response:

{
  "message": "To-Do deleted successfully"
}



Dependencies
Required Dependencies:
express: Web framework for Node.js.
mongoose: MongoDB object modeling for Node.js.
dotenv: For managing environment variables.
cors: For enabling Cross-Origin Request Sharing.
Install these dependencies by running:

npm install express mongoose dotenv cors