# 🎯 Advanced Face Recognition Attendance System

A full-stack attendance management system using **Face Recognition** with anti-spoofing detection.  
Built with **Python (Flask)** for backend, **HTML/CSS/JavaScript** for frontend, and **MongoDB Atlas** as the database.  
Integrates **YOLOv5s-face** for detection, **dlib ResNet-v1** for recognition, and an **ONNX anti-spoofing model** for security.

---

## 📸 Demo

### Login Page
![Login Page](<img width="1374" height="825" alt="Screenshot 2025-05-16 004747" src="https://github.com/user-attachments/assets/dd991983-0a52-4603-8e00-59b4edd7ac4b" />)

### Registration Page
![Registration Page](<img width="628" height="825" alt="Screenshot 2025-05-16 004905" src="https://github.com/user-attachments/assets/65815782-88f2-458e-9afa-0a7fd5274aab"/>)

### Dashboard
![Dashboard](<img width="958" height="825" alt="Screenshot 2025-05-16 014922" src="https://github.com/user-attachments/assets/a2a59238-f829-4845-8203-36892b819c5c"/>)

### Demo Video
[▶ Watch the Demo](https://drive.google.com/file/d/14qV4HA2Ne9sjvqemmxPlpjlJyV_Kl3C5/view?usp=sharing)  

---

## 🚀 Features
- **Secure Login & Registration** with face recognition.
- **YOLOv5s-face** for fast face detection.
- **dlib ResNet-v1** for accurate face recognition.
- **Anti-Spoofing Detection** to prevent photo/video attacks.
- **MongoDB Atlas Integration** for cloud-based attendance storage.
- Responsive frontend with **HTML/CSS/JavaScript**.
- Real-time camera feed integration.
- Role-based dashboard (admin & user).

---

## 📂 Project Structure
Advance_attendance_system/
│
├── app/
│ ├── static/
│ │ ├── css/ # Stylesheets
│ │ ├── js/ # Frontend scripts
│ │ └── templates/ # HTML pages
│ └── ...
├── models/ # ML models for detection & recognition
├── database # Database-related files/configs
├── .env # Environment variables (Mongo URI, secrets)
├── app.py # Flask app entry point
├── requirements.txt # Python dependencies
└── venv # Virtual environment (ignored in Git)
