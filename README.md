TransferVault (CRUD Exercise)

TransferVault is a full-stack football club marketplace web application built as a CRUD exercise, allowing football fans and enthusiasts to explore, collect, and trade iconic football clubs from the world’s top leagues including the Premier League, La Liga, Bundesliga, Serie A, and Ligue 1.

Live Deployment

* Frontend (Vercel):   
    [https://your-vercel-app.vercel.app](https://transfervault-frontend.vercel.app)    
* Backend API (Railway):    
    https://crud-production-7dc3.up.railway.app    

⸻

Features

* User registration and login with JWT authentication
* Protected routes accessible only to authenticated users
* Browse football clubs by league
* View detailed club information
* Add and remove clubs from cart
* Create and manage football club listings
* Duplicate club validation
* League-based filtering using query parameters
* Secure password hashing with Bcrypt
* RESTful API with full CRUD functionality
* Error handling with proper HTTP status codes

⸻

Club Details Include

* Club history
* Number of titles won
* Current star players
* Estimated club worth
* Listed market price
* League information

⸻

Database

MongoDB Atlas

TransferVault uses MongoDB Atlas as its cloud-hosted NoSQL database.

Collections

* Users Collection
* Clubs Collection

Security & Optimization

* Passwords hashed using Bcrypt
* Clubs organized by league for efficient filtering
* Mongoose ODM used for schema modeling and database queries

⸻

Backend

* Runtime: Node.js
* Framework: Express.js
* Database: MongoDB Atlas
* Deployment: Railway

Backend Concepts Used

* REST API architecture
* CRUD operations
* JWT Authentication
* Middleware route protection
* Query parameter filtering
* Request validation
* Duplicate club prevention
* Environment variables with dotenv
* Error handling and status codes

⸻

Frontend

* Library: React.js
* Styling: Tailwind CSS
* Routing: React Router
* State Management: Context API
* Deployment: Vercel

Frontend Features

* Dynamic league filtering
* Protected pages
* JWT token handling
* Cart state management
* Responsive UI design
* League-based visuals and club rendering

⸻

Technologies Used

Frontend

* React.js
* Tailwind CSS
* React Router
* Context API

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Bcrypt

Deployment

* Vercel
* Railway

⸻

Project Goal

TransferVault was built to simulate a modern football club marketplace while practicing full-stack CRUD development, authentication, API integration, deployment, state management, and secure backend architecture.

Whether you’re a die-hard football fan wanting to virtually own your favorite club or simply explore legendary clubs from leagues around the world — TransferVault is your home for football club ownership.
