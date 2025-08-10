import MyImage from '../assets/my.jpg';

export function HeroSection() {
    return (
      <main className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 text-left sm:text-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Live your life <br className="hidden sm:block" />
            with happiness <br className="hidden sm:block" />
            <span>every day.</span>
          </h1>
            <p className="text-lg text-[#75716B] hover:text-[#26231E]">
              Discover knowledge at your fingertips, <br />
              embrace inspiration every day, <br />
              and live with purpose and passion.
            </p>
          </div>
          <img
            src={MyImage}
            alt="Developer image"
            className="h-[529px] w-[386px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:mb-0"
          />
          <div className="lg:w-1/3 lg:pl-8">
            <h2 className="text-xl font-semibold mb-2">-Author</h2>
            <h3 className="text-2xl font-bold mb-4">Pataveekorn C.</h3>
            <p className="text-gray-500 mb-4 hover:text-[#26231E]">
            "I am passionate about psychology and personal development, 
            always seeking ways to grow and improve. 
            I love reading books that provide new perspectives and insights into self-growth, 
            emotional intelligence, and mental well-being.
            </p>
            <p className="text-gray-500 hover:text-[#26231E]">
            When I&apos;m reading or learning, 
            I focus on applying these concepts to my daily life, 
            striving to become a better version of myself.
            </p>
          </div>
        </div>
      </main>
    );
  }