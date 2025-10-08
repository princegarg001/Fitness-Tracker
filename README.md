🏋️‍♂️ Fitness Tracker Dashboard

A modern, responsive fitness tracking web application built with HTML, CSS, JavaScript, Bootstrap 5, and Chart.js.
This dashboard lets you log workouts, track progress, analyze history with interactive charts, and toggle dark/light themes — all in a clean and user-friendly interface.

✨ Features

✅ Workout Logging

Add workouts with type, date, duration, calories, and notes

Form validation to ensure required fields are filled

✅ Progress Tracking

View total number of workouts, total minutes, and total calories burned

Auto-updating statistics

✅ Workout History

Organized workout history in a sortable table

Delete workouts instantly with confirmation

Empty state UI when no workouts are logged

✅ Analytics & Charts (Chart.js)

Workout trend over the last 7 days (line chart)

Workout type distribution (doughnut chart)

Duration & calories burned over time (bar charts)

Fully responsive and auto-updating when theme changes

✅ Motivational System

Success alerts on workout logging

Random motivational quotes after adding a workout

✅ Themes

One-click Dark/Light mode toggle

Theme preference saved in localStorage

✅ Persistent Storage

Data stored in localStorage (works offline)

Ready for integration with MongoDB / other databases

🚀 Tech Stack

Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5

Charts & Analytics: Chart.js v4

Icons: Bootstrap Icons

Storage: LocalStorage (default) / extendable to MongoDB or Firebase

📸 Screenshots
Dashboard View

Stats + Workout logging form


History & Analytics

Interactive charts + Workout history table


⚡ Getting Started
1. Clone Repository
git clone https://github.com/your-username/fitness-tracker-dashboard.git
cd fitness-tracker-dashboard

2. Run Locally

Simply open index.html in your browser.

3. Optional: Serve with Live Server

For hot-reload during development:

# Install live-server globally
npm install -g live-server

# Run in project folder
live-server

🛠 Project Structure
fitness-tracker-dashboard/
│
├── index.html        # Main HTML structure
├── style.css         # Custom styles
├── script.js         # Core JavaScript logic
└── assets/           # (Optional) Images, icons, extra resources

🔧 Configuration
Storage Options

Default: LocalStorage (offline & browser-based)

Advanced: Replace loadWorkouts() & saveWorkouts() in script.js to use MongoDB / Firebase / REST API

Example (MongoDB + Node.js backend):

async function saveWorkouts() {
  await fetch("/api/workouts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workouts)
  })
}

📊 Data Model

Each workout is stored as an object:

{
  "id": 1696754829157,
  "type": "Cardio",
  "date": "2025-10-08",
  "duration": 45,
  "calories": 320,
  "notes": "Felt great today!"
}

🌙 Theming

Uses data-bs-theme="light|dark" for instant Bootstrap theming

Theme toggle button updates icon (moon 🌙 / sun ☀️)

Saves preference in localStorage

🔮 Future Enhancements

 MongoDB / Firebase integration (real backend)

 User authentication & profiles

 Export workout history (CSV / Excel / PDF)

 Social sharing of progress

 AI-based workout recommendations 💡

🤝 Contributing

Fork the repository

Create a feature branch (git checkout -b feature/my-feature)

Commit changes (git commit -m "Add my feature")

Push branch (git push origin feature/my-feature)

Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute this project.
