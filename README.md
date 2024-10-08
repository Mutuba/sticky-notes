### Notes App

- A simple note-taking application built with React. The application allows users to create, manage, and store their notes securely, featuring user authentication, session management, and a responsive user interface.

### Features

- User Registration and Authentication
- Secure Session Management
- Create, Read, Update, and Delete (CRUD) notes
- Persistent storage of user data
- Responsive UI with navigation
- Toast notifications for user feedback
- Error handling and loading states

### Tech Stack

#### Frontend: React, React Router, Context API, Tailwind CSS, React Toastify

#### Backend: Node.js with Express (if applicable)

#### Authentication: JSON Web Tokens (JWT)

#### API Communication: Fetch API

### Setup

#### Prerequisites

- Node.js (v14 or later)
  -npm or yarn

#### Installation

- Clone the repository:

```javascript
git clone https://github.com/yourusername/notes-app.git
cd notes-app
```

- Install dependencies:

```javascript
 npm install
```

- Start the application
  `npm run start` to start both the backend and frontend

- To run tests, run `npm tests` after cd into frontend directory

- Live app at [link](https://favorite-sticky-notes.netlify.app/)

### Usage

- Register a new user account.
- Log in using the registered credentials.
- Create, edit, or delete notes.
- View your notes on the homepage.
- Log out to end the session.

### API Endpoints

- If you're using a separate backend server, here are some example endpoints:

#### Authentication

- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in and retrieve an authentication token.
- GET /api/auth/session: Check if a user session is valid.

#### Notes

- GET /api/notes: Retrieve all notes for the authenticated user.
- POST /api/notes: Create a new note.
- PUT /api/notes/:id: Update an existing note.
- DELETE `/api/notes

### Screenshots

<img width="1440" alt="Screenshot 2024-09-09 at 15 25 43" src="https://github.com/user-attachments/assets/3f64e93d-e780-4b9c-b725-8d4f45ff25b8">
