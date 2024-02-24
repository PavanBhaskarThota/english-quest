# English Quest

English Quest is a web application designed to facilitate exploration and interaction with a library of English books. Users can sign up, log in, and access different features based on their role. The project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

![English Quest](english-quest.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [File Structure](#file-structure)
4. [Styling](#styling)
5. [Responsive Design](#responsive-design)
6. [Functionality](#functionality)
7. [Fonts](#fonts)
8. [Links](#links)

## Introduction

English Quest is a solo project aimed at creating an interactive platform for users to explore and engage with English books. The application provides features such as user authentication, role-based access control, and a curated library of books.

## Technologies Used

- **MongoDB**: NoSQL database for storing user information and book data.
- **Express.js**: Web application framework for Node.js, used for routing and handling HTTP requests.
- **React.js**: JavaScript library for building user interfaces, used for the frontend.
- **Node.js**: JavaScript runtime environment, used for the backend.
- **bcrypt**: Library for password hashing during user signup.
- **JSON Web Tokens (JWT)**: Used for user authorization upon login.

## File Structure

The project follows a structured file organization:

- **frontend/**: Contains the frontend React application.
- **backend/**: Contains the backend Node.js application.
- **public/**: Static assets and HTML file for React app.
- **README.md**: Documentation for the project.

## Below are screenshots of the website ( English Quest ):

- ## Home page:

  ![Site Preview](https://i.ibb.co/GM2MvHF/Screenshot-2024-02-24-141222.png)

- ## Login and Signup:

<div style="display: flex; justify-content: space-between;" >
   <img src="https://i.ibb.co/Yhrxhnj/Screenshot-2024-02-24-141249.png" alt="Mobile View 1" width="300" style="display:block; margin-right:20px"/>
   <img src="https://i.ibb.co/FHCxT1Z/Screenshot-2024-02-24-141307.png" alt="Mobile View 2" width="300" style="display:block;"/>
 </div>

- ## Book Library:
  ![Site Preview](https://i.ibb.co/s55gP2S/Screenshot-2024-02-24-141530.png)
- ## Add Book:
  ![Site Preview](https://i.ibb.co/q1tr7PM/Screenshot-2024-02-24-141618.png)

## Styling

The frontend of English Quest utilizes modern design principles with a clean and intuitive user interface. Styling features include:

- Responsive layout for optimal viewing on different devices.
- Minimalist design with focus on readability and usability.
- Consistent color scheme and typography for cohesive branding.

## Responsive Design

English Quest is designed to be responsive across various screen sizes and devices. The responsive design ensures that users have a seamless experience whether they access the application on desktop, tablet, or mobile devices.

## Functionality

Key functionalities of English Quest include:

- ## 1. User Signup and Login:
  Users can create an account and securely log in.
- ## 2. Private Routes:
  Access to the books library is restricted, and only logged-in users can access it (private routes implemented in React).
- ## 3. Password Hashing:
  User passwords are securely hashed using bcrypt during signup for enhanced security.
- ## 4. JWT Authorization:
  Upon successful login, a JSON Web Token (JWT) is generated for user authorization.
- ## 5. User Roles:
  During signup, users can choose their role as either a viewer or a creator.
- ## 6. Creator Features:
  Users with the creator role have additional privileges, such as creating and deleting books.
- ## 7. Viewer Features:
  Users with the viewer role can only see books created by creators. They do not have access to book creation or deletion.
- ## 8. User Profile:
  After logging in, users can view their profile details and logout through the navbar.

## Fonts

The project utilizes standard system fonts for simplicity and performance. However, custom fonts can be easily integrated if desired.

## Links

- [GitHub Repository](https://github.com/PavanBhaskarThota/english-quest): Repository containing the source code for English Quest.
- [Live Demo](https://english-quest-lilac.vercel.app/): (Optional) Hosted version of the application for demonstration purposes.

---

This documentation provides an overview of English Quest, its features, technologies used, and file structure. For detailed implementation and customization instructions, refer to the source code in the GitHub repository.
