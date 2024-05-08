Password-Reset

The "Password Reset" project is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack that facilitates user authentication functionalities such as signup, login, and a password reset mechanism.

OverView: The project focuses on providing a secure and user-friendly system for managing user accounts and passwords. It includes the following key functionalities:

Signup Page: Allows users to create new accounts by providing necessary details like username, email, and password.

Login Page: Provides authentication for registered users to access their accounts securely.

Forgot Password Request via Email: Allows users who have forgotten their passwords to request a password reset. An email with a unique reset link is sent to their registered email address for verification.

Password Reset: Once the user clicks on the reset link received via email, they're directed to a page where they can securely reset their password.

USAGE OF ENDPOINTS:

FrontEnd github Link-https://github.com/vinoth9598/reset_password_FE.git

FrontEnd Deployment Link-https://password-reset-f.netlify.app

BackEnd github Link- https://github.com/vinoth9598/password_reset_BE.git

BackEnd Deployment Link-https://reset-pass-be.onrender.com

Endpoint Api's: GET- http://reset-pass-be.onrender.com

GET-    http://reset-pass-be.onrender.com/user/getAllUser

POST-   http://reset-pass-be.onrender.com/user/signup

POST-   http://reset-pass-be.onrender.com/user/login

POST-   http://reset-pass-be.onrender.com/user/forget-password

POST-   http://reset-pass-be.onrender.com/user/reset-password/:randomstring/:expitationTimeStamp

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
