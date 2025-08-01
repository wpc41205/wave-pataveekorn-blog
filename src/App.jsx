import React from 'react'
import './index.css'; 
import MyImage from './assets/my.jpg';

// NavBar Component
function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto bg-[#F9F8F6] border-b border-[#DAD6D1]">
        <a href="/" className="text-2xl font-bold">
          Wavemashare-blog<span className="text-green-500">.</span>
        </a>
        <div className="w-[276px] h-[48px] gap-[8px] hidden md:flex items-center justify-center space-x-4">
          <a href="/login" className="w-[127px] h-[48px] rounded-full bg-white text-[#26231E] border border-[#75716B] hover:bg-[#75716B] transition-colors text-base font-medium md:flex items-center justify-center">
            Log in
          </a>
          <a
            href="/signup"
            className="w-[141px] h-[48px] rounded-full bg-[#26231E] text-white hover:bg-[#75716B] transition-colors text-base font-medium md:flex items-center justify-center"
          >
            Sign up
          </a>
        </div>
        <button className="md:hidden">Menu</button>
    </nav>
  );
}

function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto border-2 border-red-500">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay <br className="hidden lg:block" />
            Informed, <br />
            Stay Inspired,
          </h1>
          <p className="text-lg text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src={MyImage}
          alt="Person with a cat"
          className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
        />
        <div className="lg:w-1/3 lg:pl-8">
          <h2 className="text-xl font-semibold mb-2">-Author</h2>
          <h3 className="text-2xl font-bold mb-4">Thompson P.</h3>
          <p className="text-gray-500 mb-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-gray-500">
            When I&apos;m not writing, I spend time volunteering at my local
            animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
