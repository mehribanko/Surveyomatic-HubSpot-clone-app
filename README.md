# Surveyomatic

Surveyomatic is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows business owners to create and send surveys to their customers, collecting valuable feedback to enhance their products and services.

## Features

- **Survey Creation:** Craft surveys effortlessly with an intuitive drag-and-drop interface. No coding skills required.

- **Customizable Templates:** Save time using a range of customizable templates tailored to various industries. Start collecting feedback in minutes.

- **Real-time Analytics:** Access real-time analytics and actionable insights to adapt and respond quickly to market trends.

- **User Authentication:** Implemented Google OAuth for secure and convenient user authentication.

- **Payment System:** Integrated Stripe API for a seamless and secure payment experience.

## App Architecture

### Frontend (React)

The frontend is built using React, providing a dynamic and responsive user interface. Components are modularized for maintainability, and state management is handled through React hooks and context.

### Backend (Node.js, Express.js)

The backend is powered by Node.js and Express.js, handling API requests from the frontend. It communicates with the MongoDB database to store and retrieve survey data.

### Database (MongoDB)

MongoDB is used as the database to store user and survey data. Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js, is employed to interact with the database, making it easier to work with MongoDB documents.

### Authentication (Google OAuth)

User authentication is implemented using Google OAuth, providing a secure and efficient way for users to log in and access the platform.

### Payment System (Stripe API)

To facilitate payments within the platform, the Stripe API is integrated, allowing users to make transactions securely.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mehribanko/SurveyScape.git](https://github.com/mehribanko/Surveyomatic-HubSpot-clone-app.git

2. **Install dependencies for both the frontend and backend**
3. **Set up environment variables**
4.  **Run the application**

   ```bash
   npm run dev

