// Global variables
let workouts = []
let charts = {}
const motivationalTips = [
  "💪 Great job! Consistency is the key to success!",
  "🔥 You're on fire! Keep pushing your limits!",
  "⭐ Every workout counts! You're doing amazing!",
  "🎯 Stay focused on your goals! You've got this!",
  "🏆 Champions are made in the gym! Keep going!",
  "💯 Your dedication is inspiring! Don't stop now!",
  "🚀 You're stronger than you think! Keep it up!",
  "✨ Progress, not perfection! You're doing great!"
]

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadWorkouts()
  updateStats()
  loadTheme()
  setTodayDate()
  setupEventListeners()
})

function setTodayDate() {
  document.getElementById("workoutDate").value = new Date().toISOString().split("T")[0]
}

function setupEventListeners() {
  document.getElementById("workoutForm").addEventListener("submit", handleFormSubmit)
  document.getElementById("viewHistoryBtn").addEventListener("click", showHistoryView)
  document.getElementById("backToDashboard").addEventListener("click", showDashboardView)
  document.getElementById("themeToggle").addEventListener("click", toggleTheme)
}

// Form submission
async function handleFormSubmit(e) {
  e.preventDefault()
  const workout = {
    id: Date.now(),
    type: document.getElementById("workoutType").value,
    date: document.getElementById("workoutDate").value,
    duration: parseInt(document.getElementById("workoutDuration").value),
    calories: parseInt(document.getElementById("workoutCalories").value),
    notes: document.getElementById("workoutNotes").value
  }
  workouts.push(workout)
  saveWorkouts()
  updateStats()
  showSuccessMessage(workout)
  await showMotivationalTip()
  document.getElementById("workoutForm").reset()
  setTodayDate()
}

// Success message
function showSuccessMessage(workout) {
  const container = document.getElementById("successMessage")
  container.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong><i class="bi bi-check-circle me-2"></i>Workout Added Successfully!</strong>
      <p class="mb-0 mt-2">${workout.type} - ${workout.duration} min - ${workout.calories} cal</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`
  setTimeout(() => {
    const alert = container.querySelector(".alert")
    if (alert) { alert.classList.remove("show"); setTimeout(() => (container.innerHTML = ""), 150) }
  }, 5000)
}

// Motivational tip
async function showMotivationalTip() {
  await new Promise(r => setTimeout(r, 2000))
  const tip = motivationalTips[Math.floor(Math.random() * motivationalTips.length)]
  const container = document.getElementById("motivationalTipContainer")
  container.innerHTML = `
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      <strong>${tip}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`
  setTimeout(() => {
    const alert = container.querySelector(".alert")
    if (alert) { alert.classList.remove("show"); setTimeout(() => (container.innerHTML = ""), 150) }
  }, 5000)
}

// Storage
function loadWorkouts() {
  const stored = localStorage.getItem("fitnessWorkouts")
  if (stored) workouts = JSON.parse(stored)
}
function saveWorkouts() {
  localStorage.setItem("fitnessWorkouts", JSON.stringify(workouts))
}

// Statistics
function updateStats() {
  const totalTime = workouts.reduce((sum, w) => sum + w.duration, 0)
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0)
  document.getElementById("totalWorkouts").textContent = workouts.length
  document.getElementById("totalTime").textContent = totalTime
  document.getElementById("totalCalories").textContent = totalCalories
}

// View toggles
function showHistoryView() {
  document.getElementById("dashboardView").style.display = "none"
  document.getElementById("historyView").style.display = "block"
  renderHistoryTable()
  renderCharts()
}
function showDashboardView() {
  document.getElementById("historyView").style.display = "none"
  document.getElementById("dashboardView").style.display = "block"
  destroyCharts()
}

// History table
function renderHistoryTable() {
  const tbody = document.getElementById("workoutHistoryTable")
  const empty = document.getElementById("emptyHistoryState")
  if (!workouts.length) { tbody.innerHTML = ""; empty.style.display = "block"; return }
  empty.style.display = "none"
  const sorted = [...workouts].sort((a,b)=>new Date(b.date)-new Date(a.date))
  tbody.innerHTML = sorted.map(w => `
    <tr>
      <td>${new Date(w.date).toLocaleDateString()}</td>
      <td><span class="badge bg-primary">${w.type}</span></td>
      <td>${w.duration} min</td>
      <td>${w.calories} cal</td>
      <td>${w.notes || "-"}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteWorkout(${w.id})"><i class="bi bi-trash"></i></button></td>
    </tr>`).join("")
}

function deleteWorkout(id) {
  if (!confirm("Are you sure you want to delete this workout?")) return
  workouts = workouts.filter(w => w.id !== id)
  saveWorkouts(); updateStats(); renderHistoryTable(); renderCharts()
}

// Charts
function renderCharts() { if (!workouts.length) return; destroyCharts(); renderWorkoutTrendChart(); renderWorkoutTypeChart(); renderDurationChart(); renderCaloriesChart() }
function destroyCharts() { Object.values(charts).forEach(c=>c?.destroy()); charts={} }

function renderWorkoutTrendChart() { renderLineChart("workoutTrendChart", "Workouts", "#667eea", w=>w.length) }
function renderWorkoutTypeChart() {
  const counts = {}; workouts.forEach(w => counts[w.type] = (counts[w.type] || 0) + 1)
  const ctx = document.getElementById("workoutTypeChart")
  charts.type = new Chart(ctx, { type: "doughnut", data: { labels: Object.keys(counts), datasets: [{ data: Object.values(counts), backgroundColor:["#667eea","#764ba2","#f093fb","#4facfe","#43e97b","#fa709a","#fee140","#30cfd0"] }] }, options: { responsive:true, plugins:{legend:{position:"bottom"}} } })
}
function renderDurationChart() { renderBarChart("durationChart", "Minutes", "#667eea", w=>w.reduce((s,x)=>s+x.duration,0)) }
function renderCaloriesChart() { renderBarChart("caloriesChart", "Calories", "#764ba2", w=>w.reduce((s,x)=>s+x.calories,0)) }

function renderLineChart(id,label,color,calc) {
  const days = getLast7Days(), data = days.map(d=>workouts.filter(w=>w.date===d).length)
  const ctx = document.getElementById(id)
  charts[id.replace("Chart","")] = new Chart(ctx, { type:"line", data:{ labels:days.map(d=>new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric"})), datasets:[{label,data,borderColor:color,backgroundColor:"rgba(102,126,234,0.1)",tension:0.4,fill:true}] }, options:{responsive:true,plugins:{legend:{display:false}}} })
}
function renderBarChart(id,label,color,calc) {
  const days = getLast7Days(), data = days.map(d=>calc(workouts.filter(w=>w.date===d)))
  const ctx = document.getElementById(id)
  charts[id.replace("Chart","")] = new Chart(ctx, { type:"bar", data:{ labels:days.map(d=>new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric"})), datasets:[{label,data,backgroundColor:color}] }, options:{responsive:true,plugins:{legend:{display:false}}} })
}

function getLast7Days() { return Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); return d.toISOString().split("T")[0] }) }

// Theme
function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute("data-bs-theme")
  const newTheme = current==="light"?"dark":"light"
  html.setAttribute("data-bs-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
  if(document.getElementById("historyView").style.display !== "none") renderCharts()
}
function loadTheme() { const saved = localStorage.getItem("theme") || "light"; document.documentElement.setAttribute("data-bs-theme",saved); updateThemeIcon(saved) }
function updateThemeIcon(theme) { document.getElementById("themeIcon").className = theme==="light"?"bi bi-moon-stars-fill":"bi bi-sun-fill" }
