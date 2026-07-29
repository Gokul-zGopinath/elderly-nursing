Elderly Nursing & Healthcare Assistance Platform

A full-stack MERN application developed to simplify elderly healthcare management. The system enables healthcare providers to manage patients, caregivers, healthcare services, medications, and appointment bookings through a secure and user-friendly interface.

---

## 🚀 Live Demo

Frontend: https://elderly-nursing.vercel.app/

Backend: https://elderly-nursing.onrender.com/

---

## 📌 Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🏥 Patient Management
- 👨‍⚕️ Caregiver Management
- 🩺 Healthcare Services Management
- 💊 Medication Management
- 📅 Appointment Booking
- 🛡️ Protected Routes
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JWT
- bcrypt.js

### Deployment
- Vercel
- Render
- GitHub

---

## 📂 Project Structure

```
elderly-nursing/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## 📚 Modules

- Authentication
- Patients
- Caregivers
- Healthcare Services
- Medications
- Bookings

---

## 🔗 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Patients

```
GET    /api/patients
POST   /api/patients
PUT    /api/patients/:id
DELETE /api/patients/:id
```

### Caregivers

```
GET    /api/caregivers
POST   /api/caregivers
PUT    /api/caregivers/:id
DELETE /api/caregivers/:id
```

### Services

```
GET    /api/services
POST   /api/services
PUT    /api/services/:id
DELETE /api/services/:id
```

### Medications

```
GET    /api/medications
POST   /api/medications
PUT    /api/medications/:id
DELETE /api/medications/:id
```

### Bookings

```
GET    /api/bookings
POST   /api/bookings
PUT    /api/bookings/:id
DELETE /api/bookings/:id
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Gokul-zGopinath/elderly-nursing.git
```

Backend

```bash
cd backend
npm install
npm run dev
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 👨‍💻 Author

**Gokul Gopinath**

GitHub: https://github.com/Gokul-zGopinath

---

## ⭐ Acknowledgement

This project was developed as part of a Full Stack MERN Internship to demonstrate practical implementation of authentication, REST APIs, CRUD operations, and cloud deployment.
