**TransferVault (CRUD Exercise)**    
TransferVault is a football club marketplace web application built as a CRUD exercise, allowing football fans and enthusiasts to explore, collect, and trade the world's most iconic football clubs from top leagues including the Premier League, La Liga, Bundesliga, Serie A and Ligue 1.   

**What The App Does**   
Users can create an account and securely log in using JWT authentication. Once logged in they can browse clubs by league, view detailed information about each club including the club's history, number of titles won, current star players, estimated club worth and listed price. Users can also list their own football clubs on the platform with full validation to ensure no duplicate clubs are ever added — keeping the marketplace clean and unique.   

**Database**     

MongoDB — NoSQL database hosted on MongoDB Atlas   
Data is stored in collections — one for users and one for clubs  
Clubs are organized by league making filtering fast and efficient  
Passwords are hashed using Bcrypt before being stored   


**Backend**  
Language: Node.js   
**Framework**: Express.js   
**Deployment**: Railway   

**Concepts Used:**   

REST API design with full CRUD operations   
JWT Authentication — users get a token on login to access protected routes   
Password hashing with Bcrypt for security  
Mongoose ODM for modeling and querying MongoDB  
Middleware for route protection and request validation  
Duplicate club validation — no two clubs can share the same name  
Query params for league filtering (/clubs?league=La Liga)  
Environment variables with dotenv for securing sensitive data  
Cart system — users can add and remove clubs from their cart  
Error handling with appropriate HTTP status codes (200, 201, 400, 401, 404, 500)  

 
**Frontend**   
**Language**: JavaScript/ TypeScript  
**Library**: React.js/.ts  
**Styling**: Tailwind CSS  
**Deployment**: Vercel  

**Tools & Libraries Used:**  

React Router — for page navigation between leagues, clubs and cart  
Context API — for managing global state like auth and cart  
JWT decode — for reading the token on the frontend   
League images — displayed based on the club's league field from the database   
Protected routes — pages only accessible when logged in  


Whether you're a die-hard fan wanting to virtually own your favorite club or an explorer wanting to discover clubs from leagues around the world — TransferVault is your home for football club ownership.  
