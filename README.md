#  TransferVault

TransferVault is a full-stack football club marketplace web application built as a CRUD exercise, allowing football fans and enthusiasts to explore, collect, and trade iconic football clubs from the world’s top leagues including the Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Championship, Champions League, Eredivisie, Primeira Liga, and MLS.

---

#  Live Deployment

### Frontend (Vercel)
https://transfervault-frontend.vercel.app

### Backend API (Railway)
https://crud-production-7dc3.up.railway.app

---

#  What The App Does

Users can create an account and securely log in using JWT authentication. Once logged in, users can browse football clubs by league, explore detailed club information, add clubs to cart, and create their own football club listings.

TransferVault simulates a modern football transfer marketplace while practicing real-world full-stack development concepts.

---

#  Features

- User registration and login
- JWT authentication
- Protected routes
- League-based filtering
- Full CRUD operations
- Add and delete football clubs
- Duplicate club validation
- Cart management
- Responsive UI
- Secure password hashing with Bcrypt
- RESTful API architecture
- Error handling with proper HTTP status codes

---

#  Club Details Include

- Club history
- Number of titles won
- Current star players
- Estimated club worth
- Transfer market price
- League information

---

#  Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Context API
- Vite

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Bcrypt
- Dotenv

## Deployment
- Vercel
- Railway

---

#  Backend Concepts Used

- REST API architecture
- CRUD operations
- JWT authentication
- Middleware route protection
- Query parameter filtering
- Request validation
- Duplicate club prevention
- Environment variables with dotenv
- Error handling and status codes
- MongoDB schema modeling with Mongoose

---

#  Frontend Concepts Used

- React Router navigation
- Protected pages
- Context API state management
- JWT token handling
- Dynamic league filtering
- Responsive UI design
- Form validation
- Dynamic football club rendering
- Reusable React components

---

#  Database

TransferVault uses MongoDB Atlas as its cloud-hosted NoSQL database.

## Collections
- Users Collection
- Clubs Collection

## Security & Optimization
- Passwords hashed using Bcrypt
- JWT secured authentication
- League-based filtering optimization
- Mongoose ODM for efficient database queries

---

#  Folder Structure

```bash
TransferVault/
│
├── Client-Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── Server-Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

#  How To Use TransferVault

1. Create an account using the Sign Up page
2. Log in with your credentials
3. Browse clubs by selecting a league
4. View detailed information about each club
5. Add clubs to your cart
6. Create your own football club listings
7. Delete clubs you no longer want listed
8. Manage your account in the Settings page
9. Log out securely when finished

---

#  Getting Started

## Prerequisites

Before running the project locally, make sure you have:

- Node.js v18+
- npm
- MongoDB Atlas account
- Git

---

#  Clone Repository

```bash
git clone https://github.com/your-username/TransferVault.git
cd TransferVault
```

---

#  Backend Setup

```bash
cd Server-Backend
npm install
```

## Create `.env` File

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run Backend Server

```bash
npm run dev
```

---

#  Frontend Setup

```bash
cd Client-Frontend
npm install
```

## Create `.env` File

```env
VITE_API_URL=https://crud-production-7dc3.up.railway.app
```

## Run Frontend

```bash
npm run dev
```

---

#  Available API Routes

## Users

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| POST | /users | Register new user | No |
| POST | /users/login | Login user | No |
| DELETE | /users/me | Delete authenticated user | Yes |

## Clubs

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| GET | /clubs | Get all clubs | No |
| GET | /clubs?league=premier-league | Filter clubs by league | No |
| POST | /clubs | Create new club | Yes |
| DELETE | /clubs/:id | Delete club | Yes |

---

#  Leagues Available

| League | Country |
|---|---|
| Premier League | England |
| La Liga | Spain |
| Bundesliga | Germany |
| Serie A | Italy |
| Ligue 1 | France |
| Championship | England |
| Champions League | Europe |
| Eredivisie | Netherlands |
| Primeira Liga | Portugal |
| MLS | USA |

---

#  Dependencies

## Backend Dependencies

| Package | Purpose |
|---|---|
| express | Web framework |
| mongoose | MongoDB ODM |
| bcrypt | Password hashing |
| jsonwebtoken | JWT authentication |
| dotenv | Environment variables |
| cors | Cross-origin requests |
| morgan | Request logging |
| nodemon | Development server restart |

## Frontend Dependencies

| Package | Purpose |
|---|---|
| react | Frontend library |
| react-router-dom | Routing |
| tailwindcss | Styling |
| vite | Development server |
| axios/fetch | API requests |

---

#  Key Highlights

- Full-stack CRUD application
- JWT authentication system
- Protected frontend and backend routes
- MongoDB Atlas cloud database integration
- League-based filtering system
- Duplicate football club prevention
- Responsive football marketplace UI
- Production deployment with Railway and Vercel

---

#  Future Improvements

- Real-time transfer bidding system
- User profile customization
- Club ratings and reviews
- Admin dashboard
- Dark mode support
- Search and sorting functionality
- Image uploads for football clubs
- Real-time notifications

---

#  Project Goal

TransferVault was built to simulate a modern football club marketplace while practicing:

- Full-stack development
- CRUD operations
- Authentication systems
- API integration
- Deployment workflows
- State management
- Database architecture
- Secure backend development

Whether you're a die-hard football fan wanting to virtually own your favorite club or simply explore legendary clubs from leagues around the world — TransferVault is your home for football club ownership.
