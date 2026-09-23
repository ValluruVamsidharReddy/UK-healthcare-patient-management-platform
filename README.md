# UK Healthcare Patient Management Platform

A modern **JWT Authentication and Role-Based Authorization** system built with **Spring Boot**, **React (Vite)**, **Spring Security**, and **H2 Database**. The project simulates a secure UK healthcare portal with a professional login interface and role-based dashboard access.

---

## Login Page

The portal features a modern healthcare-themed login interface with secure authentication, a professional NHS-style UI, and responsive design.

![Login Page](screenshots/login-page.png)
<img width="1402" height="836" alt="image" src="https://github.com/user-attachments/assets/621aa701-af1f-49f1-89f0-e64845cf96e2" />

---

## Admin Dashboard

After successful authentication, administrators can access a protected dashboard displaying healthcare statistics and management features.

![Admin Dashboard](screenshots/admin-dashboard.png)
<img width="1407" height="835" alt="image" src="https://github.com/user-attachments/assets/38e8be0a-aa47-4fb9-9cdf-4158c5ce686e" />

---

## Features

* JWT Authentication
* Role-Based Authorization (ADMIN & USER)
* Spring Security Integration
* BCrypt Password Encryption
* Secure Login with JWT Token
* Responsive React (Vite) Frontend
* Professional Healthcare UI
* Protected Dashboard Access
* REST API Communication
* H2 Database Integration

---

## Technology Stack

| Frontend     | Backend     | Database        | Security        |
| ------------ | ----------- | --------------- | --------------- |
| React (Vite) | Spring Boot | H2 Database     | Spring Security |
| CSS          | Java        | Spring Data JPA | JWT             |

---

## Authentication Flow

1. User enters username and password.
2. React sends credentials to `/auth/login`.
3. Spring Boot validates the user.
4. JWT token is generated.
5. Token is stored securely.
6. Protected APIs require `Bearer Token`.
7. Spring Security validates the token.
8. User receives role-based access.

---

## API Endpoints

| Method | Endpoint               | Access       |
| ------ | ---------------------- | ------------ |
| POST   | `/auth/register`       | Public       |
| POST   | `/auth/login`          | Public       |
| GET    | `/api/user/profile`    | USER / ADMIN |
| GET    | `/api/admin/dashboard` | ADMIN        |

---

## Project Structure

```text
UK-healthcare-patient-management-platform
│── screenshots
│   ├── login-page.png
│   └── admin-dashboard.png
│
│── src
│   ├── assets
│   ├── components
│   ├── services
│   ├── App.jsx
│   └── App.css
│
│── public
│── package.json
│── vite.config.js
│── README.md
```

---

## Installation

### Backend

```bash
mvn spring-boot:run
```

Runs on:

```text
http://localhost:8081
```

### Frontend

```bash
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Security Features

* BCrypt Password Hashing
* Stateless JWT Authentication
* Spring Security Filter Chain
* Protected API Endpoints
* Role-Based Authorization
* Secure Login Session

---

## Future Enhancements

* Patient Registration
* Appointment Scheduling
* Doctor Dashboard
* Medical Records Management
* Email Notifications
* MySQL Integration
* Docker Deployment

---

## Author

**Valluru Vamsidhar Reddy**

* GitHub: `ValluruVamsidharReddy`
* Project: **UK Healthcare Patient Management Platform**
