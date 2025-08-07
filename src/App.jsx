import './index.css'; 
import { NavBar } from './components/Nav';
import { HeroSection } from './components/HeroSection';
import { ArticleSection } from './components/ArticleSection';
import { Footer } from './components/Footer';

// NavBar Component
function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  )
}

export default App
