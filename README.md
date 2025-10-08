🏋️‍♂️ Fitness Tracker Dashboard
<p align="center"> <img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue?style=for-the-badge&logo=javascript" /> <img src="https://img.shields.io/badge/Framework-Bootstrap_5-purple?style=for-the-badge&logo=bootstrap" /> <img src="https://img.shields.io/badge/Charts-Chart.js-orange?style=for-the-badge&logo=chartdotjs" /> <img src="https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb" /> <img src="https://img.shields.io/badge/Auth-Firebase-yellow?style=for-the-badge&logo=firebase" /> <img src="https://img.shields.io/badge/AI-Chatbot-red?style=for-the-badge&logo=openai" /> </p> <p align="center"><sub>✨ Modern 3D-inspired fitness tracker with analytics, themes, AI, and database support ✨</sub></p>
✨ Features
<p align="center"> ✔️ Log workouts <br> ✔️ Auto-update stats <br> ✔️ Interactive history & charts <br> ✔️ Motivational AI tips <br> ✔️ Dark/Light mode toggle <br> ✔️ Offline (localStorage) + Online (MongoDB/Firebase) <br> </p>
📊 System Architecture
<p align="center">
graph TD;
    U[👤 User] -->|Logs Data| F[🌐 Frontend];
    F -->|CRUD| API[⚡ Node.js API];
    API --> DB[(🟢 MongoDB Atlas)];
    F -->|Auth| Firebase[(🔥 Firebase)];
    F --> AI[🤖 AI Chatbot];

</p>
🛠️ Getting Started
<details> <summary>🔽 Setup & Run Locally</summary>
# 1. Clone repository
git clone https://github.com/your-username/fitness-tracker-dashboard.git
cd fitness-tracker-dashboard

# 2. Open directly in browser
open index.html

# OR run with live-server
npm install -g live-server
live-server

</details>
📦 Project Structure
fitness-tracker-dashboard/
│── index.html     # 🏠 Main HTML
│── style.css      # 🎨 Custom styles
│── script.js      # ⚡ Core logic
└── assets/        # 🖼️ Images, icons, etc.

🔧 Database & Auth Config
<details> <summary>🟢 MongoDB Integration</summary>
async function saveWorkouts() {
  await fetch("/api/workouts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workouts)
  })
}

</details> <details> <summary>🔥 Firebase Authentication</summary>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(user => console.log("✅ Logged in", user))
  .catch(err => console.error("❌ Error", err));

</details>
📊 Data Model
// Workout Object
{
  "id": 1696754829157,
  "type": "Cardio",
  "date": "2025-10-08",
  "duration": 45,
  "calories": 320,
  "notes": "Felt great today!"
}

// User Object (with Firebase)
{
  "uid": "firebase-unique-id",
  "email": "user@example.com",
  "name": "Prince Garg",
  "createdAt": "2025-10-08T14:32:00Z"
}

🔮 Roadmap

✅ LocalStorage (offline mode)

🔜 MongoDB (persistent backend)

🔜 Firebase Auth (secure login)

🔜 AI Chatbot (fitness coach 🤖)

🔜 Export history (CSV/Excel/PDF)

🔜 Social sharing features

👨‍💻 Author
<p align="center"> <b>Prince Garg</b> <br> 🌐 <a href="https://github.com/your-username">GitHub</a> • 💼 <a href="https://linkedin.com/in/your-profile">LinkedIn</a> • 📧 your.email@example.com </p>
