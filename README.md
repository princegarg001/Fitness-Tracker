<h1 align="center">🏋️‍♂️ Fitness Tracker Dashboard</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Framework-Bootstrap_5-purple?style=for-the-badge&logo=bootstrap" />
  <img src="https://img.shields.io/badge/Charts-Chart.js-orange?style=for-the-badge&logo=chartdotjs" />
  <img src="https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Auth-Firebase-yellow?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/AI-Chatbot-red?style=for-the-badge&logo=openai" />
</p>

<p align="center">
  <sub>✨ Modern 3D-inspired fitness tracker with analytics, themes, AI, and database support ✨</sub>
</p>

---

## ✨ Features

<div align="center">

| 🏃‍♂️ Activity Tracking | 📊 Analytics & Insights | 🎨 User Experience |
|----------------------|-------------------------|---------------------|
| ✔️ Log workouts with details | ✔️ Auto-update stats & progress | ✔️ Dark/Light mode toggle |
| ✔️ Multiple exercise types | ✔️ Interactive charts & history | ✔️ Responsive design |
| ✔️ Duration & calorie tracking | ✔️ Progress visualization | ✔️ Smooth animations |

| 🤖 Smart Features | 🔒 Security & Data | 🔄 Sync & Storage |
|-------------------|---------------------|-------------------|
| ✔️ Motivational AI tips | ✔️ Firebase Authentication | ✔️ Offline (localStorage) |
| ✔️ AI Chatbot coach | ✔️ Secure data handling | ✔️ Online (MongoDB) sync |
| ✔️ Personalized recommendations | ✔️ User profiles | ✔️ Data export ready |

</div>

---

## 📊 System Architecture

```mermaid
graph TD;
    U[👤 User] -->|Logs Data| F[🌐 Frontend];
    F -->|CRUD Operations| API[⚡ Node.js API];
    API --> DB[(🟢 MongoDB Atlas)];
    F -->|Authentication| Firebase[(🔥 Firebase)];
    F -->|AI Interactions| AI[🤖 AI Chatbot];
    
    style U fill:#e1f5fe
    style F fill:#f3e5f5
    style API fill:#e8f5e8
    style DB fill:#e1f5e1
    style Firebase fill:#fff3e0
    style AI fill:#ffebee
```
🛠️ Getting Started
🔽 Setup & Run Locally
<details> <summary><b>Click to expand setup instructions</b></summary>
bash
# 1. Clone repository
git clone https://github.com/your-username/fitness-tracker-dashboard.git
cd fitness-tracker-dashboard

# 2. Open directly in browser
open index.html

# OR run with live-server for better development experience
npm install -g live-server
live-server

# For full setup with backend:
cd backend
npm install
npm start
</details>
📦 Project Structure
text
fitness-tracker-dashboard/
│
├── 🏠 index.html          # Main application entry point
├── 🎨 style.css           # Custom styles and 3D effects
├── ⚡ script.js           # Core application logic
├── 🔧 config/             # Configuration files
│   ├── firebase-config.js
│   └── database-config.js
├── 🖼️ assets/             # Images, icons, and media
│   ├── icons/
│   ├── images/
│   └── fonts/
├── 📱 components/         # Reusable UI components
│   ├── workout-form.js
│   ├── charts.js
│   └── ai-chatbot.js
└── 🔒 backend/            # Node.js API (if applicable)
    ├── server.js
    ├── routes/
    └── models/
🔧 Configuration
🟢 MongoDB Integration
<details> <summary><b>Database Operations</b></summary>
javascript
// Save workouts to MongoDB
async function saveWorkouts(workouts) {
  try {
    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workouts)
    });
    
    if (!response.ok) throw new Error('Failed to save workouts');
    return await response.json();
  } catch (error) {
    console.error("❌ Database error:", error);
    // Fallback to localStorage
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}

// Fetch workout history
async function loadWorkouts() {
  try {
    const response = await fetch("/api/workouts");
    return await response.json();
  } catch (error) {
    console.warn("⚠️ Using cached data");
    return JSON.parse(localStorage.getItem('workouts') || '[]');
  }
}
</details>
🔥 Firebase Authentication
<details> <summary><b>User Management</b></summary>
javascript
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase Auth
const auth = getAuth();

// User Sign Up
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Account created", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("❌ Signup error", error);
    throw error;
  }
}

// User Sign In
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Logged in successfully", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("❌ Login error", error);
    throw error;
  }
}
</details>
📊 Data Models
Workout Object Schema
json
{
  "id": 1696754829157,
  "type": "Cardio",
  "date": "2025-10-08",
  "duration": 45,
  "calories": 320,
  "notes": "Felt great today!",
  "userId": "firebase-unique-id",
  "createdAt": "2025-10-08T14:32:00Z",
  "updatedAt": "2025-10-08T14:32:00Z"
}
User Profile Schema
json
{
  "uid": "firebase-unique-id",
  "email": "user@example.com",
  "name": "Prince Garg",
  "preferences": {
    "theme": "dark",
    "measurementUnit": "metric",
    "weeklyGoal": 5
  },
  "fitnessStats": {
    "totalWorkouts": 47,
    "totalCalories": 12500,
    "streak": 12
  },
  "createdAt": "2025-10-08T14:32:00Z",
  "lastLogin": "2025-10-15T09:45:00Z"
}
🔮 Development Roadmap
✅ Completed
LocalStorage offline functionality

Basic workout logging

Responsive UI with Bootstrap 5

Chart.js integration for analytics

🔄 In Progress
MongoDB backend integration

Firebase Authentication system

Real-time data synchronization

🚧 Planned Features
AI Chatbot fitness coach 🤖

Advanced analytics & insights

Social sharing capabilities

Mobile app development

Export functionality (CSV/Excel/PDF)

Workout templates & plans

Integration with wearable devices

🎯 Future Vision
Machine learning recommendations

Virtual personal trainer

Community challenges

Nutrition tracking integration

🎨 UI/UX Features
<div align="center">
Feature	Description	Status
3D Card Effects	Modern glassmorphism design	✅ Implemented
Dark/Light Theme	User preference persistence	✅ Implemented
Smooth Animations	CSS transitions & keyframes	✅ Implemented
Progress Visualizations	Interactive charts & graphs	✅ Implemented
Responsive Design	Mobile-first approach	✅ Implemented
</div>
🤝 Contributing
We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

👨‍💻 Author
<div align="center">
Prince Garg
🌐 GitHub •
💼 LinkedIn •
📧 your.email@example.com
"Building innovative solutions to help people achieve their fitness goals"

</div>
<div align="center">
📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
