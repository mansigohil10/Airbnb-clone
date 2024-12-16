# Airbnb Clone Backend

This is a backend implementation of an Airbnb clone using Node.js, Express, and MongoDB. It features user authentication, property management, and booking management.

## Features

- User registration and login
- Create, read, update, and delete properties
- Create, read, update, and delete bookings
- User authentication with JWT
- Data validation and error handling

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- dotenv
- Cors

## Installation


1. Install dependencies:

    ```bash
    npm install

2. .env file

     ```
    PORT=5000
    MONGODB_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

3. Start the development server:

   ```bash
   npm start
   ```

## API Endpoints

### User Authentication
1. Register User (Post) :- localhost:5000/api/auth/register
2. Login User (Post) :- localhost:5000/api/auth/login

### Property Management
1. Post :- localhost:5000/api/properties
2. Get :- localhost:5000/api/properties/
3. Update :- localhost:5000/api/properties/<property_id>
4. Delete :- localhost:5000/api/properties/<property_id>

### Booking Management
1. Post :- localhost:5000/api/bookings
2. Get :- localhost:5000/api/bookings
3. Update :- localhost:5000/api/bookings/<booking_id>
4. Delete :- localhost:5000/api/bookings/<booking_id>

## Environment Variables
- PORT: The port for the server to listen on.
- MONGODB_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for signing JWT tokens.
