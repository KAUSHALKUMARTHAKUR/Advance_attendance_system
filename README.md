# 🎯 Advanced Face Recognition Attendance System

A full-stack attendance management system using **Face Recognition** with anti-spoofing detection.  
Built with **Python (Flask)** for backend, **HTML/CSS/JavaScript** for frontend, and **MongoDB Atlas** as the database.  
Integrates **YOLOv5s-face** for detection, **dlib ResNet-v1** for recognition, and an **ONNX anti-spoofing model** for security.

---

## 📸 Demo

### Login Page
![Login Page](https://github.com/user-attachments/assets/dd991983-0a52-4603-8e00-59b4edd7ac4b)

### Registration Page
![Registration Page](https://github.com/user-attachments/assets/65815782-88f2-458e-9afa-0a7fd5274aab)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/a2a59238-f829-4845-8203-36892b819c5c)

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
.
└── Advance_attendance_system/
    ├── app/
    │   └── static/
    │       ├── css/
    │       │   └── style.css
    │       ├── templates/
    │       │   ├── login.html
    │       │   ├── register.html
    │       │   └── dashboard.html
    │       └── js/
    │           ├── camera.js
    │           └── validation.js
    ├── database
    ├── venv
    ├── .env
    ├── models/
    │   ├── shape_predictor_68_face_landmarks.dat
    │   ├── dlib_face_recognition_resnet_model_v1.dat
    │   ├── yolov5s-face.onnx
    │   └── anti-spoof-detector.onnx
    ├── app.py
    └── requirements.txt  
