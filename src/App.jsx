import './index.css'; 
import { NavBar, HeroSection } from './landingPage';

// NavBar Component
function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
