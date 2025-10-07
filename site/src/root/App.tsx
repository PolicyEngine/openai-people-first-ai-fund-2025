import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home'
import Application from '../views/Application'
import Budget from '../views/Budget'
import Impact from '../views/Impact'
import AIStrategy from '../views/AIStrategy'

function App() {
  return (
    <Router basename="/openai-people-first-ai-fund-2025">
      <div className="app">
        <aside className="sidebar">
          <h2>OpenAI Fund 2025</h2>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/application" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Application
            </NavLink>
            <NavLink to="/budget" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Budget
            </NavLink>
            <NavLink to="/impact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Impact
            </NavLink>
            <NavLink to="/ai-strategy" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              AI Strategy
            </NavLink>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<Application />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/ai-strategy" element={<AIStrategy />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
