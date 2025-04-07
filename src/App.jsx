import { useState, useEffect } from 'react';
import './App.css';
import MIS from './icons/MIS.png';
import ACM from './icons/ACM.png';
import HH25 from './icons/HH25.png';
import Silas from './icons/Silas.png';
import Jenna from './icons/Jenna.png';
import John from './icons/John.jpg';
import Nicol from './icons/Nicol.png'
import Callie from './icons/Callie.png'
import Emma from './icons/Emma.png'
import Dave from './icons/comic-dave.png'
import CyberHounds from './icons/CyberHounds.png';
import SOS from './icons/stand-out-stickers-logo.png'
import ColorStackLUM from './icons/colorstack-logo.png';
import { BriefcaseMedical, BrainCircuit, CircleDollarSign, GraduationCap, Sparkles, Crown, Eye } from 'lucide-react';
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { TbBrandDiscord } from "react-icons/tb";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // State for toggling visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleApplyClick = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };



  const teamMembers = [
    { 
      name: "Silas Green", 
      role: "Web Developer / Team Member", 
      photo: Silas, 
      github: "https://github.com/SGreen24", 
      linkedin: "https://www.linkedin.com/in/silas-green-069a62250/",
      hometown: "Long Island, NY",
      majorYear: "Computer Science, Senior",
      funFact: "I was a All-State Saxophonist in High School"
    },
    { 
      name: "Callie Walker", 
      role: "Team Member", 
      photo: Callie, 
      github: "https://github.com/ccwalk", 
      linkedin: "https://www.linkedin.com/in/callie-walker-353a1b334/",
      hometown: "Calvert County, MD",
      majorYear: "Computer Science, Senior",
      funFact: "I got 7th in my 8th grade Spelling Bee"
    },
    { name: "Nicol Gutierrez", 
      role: "Team Member", 
      photo: Nicol,
      linkedin: "https://www.linkedin.com/in/nicol-gutierrez-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      hometown: "Pasadena, MD",
      majorYear: "Information Systems and Data Analytics, Senior",
      funFact: "I share a birth day AND  time with my 2 year old sister"
    },
    { name: "Emma Heiser", 
      role: "Team Member", 
      photo: Emma, 
      linkedin: "https://www.linkedin.com/in/emmasheiser/",
      hometown: "Monroe Township, NJ",
      majorYear: "Mathematics and Computer Science, Senior",
      funFact: "I was a bassist for a rock band"
    },
    { name: "Jenna Borowy", 
      role: "Team Member", 
      photo: Jenna, 
      linkedin: "https://www.linkedin.com/in/jenna-borowy/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      hometown: "Baltimore County, MD",
      majorYear: "Computer Science and Applied Math, Senior",
      funFact: "I have extra bones in each of my feet"
    },
    { name: "Dave Optitz", 
      role: "CS Faculty", 
      photo: Dave, 
    },
    { name: "John Nweke", 
      role: "CS Faculty", 
      photo: John 
    },
    
  ];

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Enhanced Background stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 5 === 0 ? '#f0f0ff' : '#ffffff',
              opacity: Math.random() * 0.9 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={HH25} alt="Logo" className="h-10 w-10" />
            <span className="text-white font-bold text-xl ml-2">HackHounds '25</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-green-300 hover:text-pink-100 transition">About</a>
            <a href="#schedule" className="text-green-300 hover:text-pink-100 transition">Schedule</a>
            <a href="#tracks" className="text-green-300 hover:text-pink-100 transition">Tracks</a>
            <a href="#prizes" className="text-green-300 hover:text-pink-100 transition">Prizes</a>
            <a href="#faq" className="text-green-300 hover:text-pink-100 transition">FAQ</a>
            <a href="#team" className="text-green-300 hover:text-pink-100 transition">Team</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:pt-32 md:pb-20 relative z-10 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 md:mb-12 text-center pixelated glow-text">
  <div className="flex flex-col sm:flex-row sm:justify-center">
    <div>HACK</div>
    <div className="text-green-400">HOUNDS</div>
    <div className="sm:ml-2"> </div>
    <div className="sm:ml-2">2025</div>
  </div>
</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            April 5-6
          </div>
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            Baltimore, MD
          </div>
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            24 Hours
          </div>
        </div>

        <div className="text-center mb-12">
  <p className="text-white text-xl">
    Join the <a href="https://www.instagram.com/loyolacyberhounds?igsh=bGRhcHdzMmR6ZXY0" className="text-pink-300 hover:underline">Instagram</a> and <a href="https://discord.gg/qgKP2akCWK" className="text-pink-300 hover:underline">Discord</a>
  </p>
  <p className="text-white text-xl mt-2">
    for more information on the event!
  </p>
</div>

        {/* Enhanced Apply Button & Form Section */}
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button
              onClick={handleApplyClick}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-green-400 to-green-400 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center">
                <span className="pixelated tracking-wider">APPLY NOW!</span>
              </span>
            </button>
          </div>

          {/* Google Form Embed */}
          {isFormVisible && (
            <div className="max-w-4xl mx-auto mt-8 bg-black/70 border border-white-500/30 rounded-xl p-6 backdrop-blur-sm transition-all transform hover:border-white-500/50 hover:shadow-lg hover:shadow-white-500/20">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdh6kFRQX8A3g1wXj7FoEwqpE98QtSVsjdy8ZC3Y2G0vzjqnw/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 'none', borderRadius: '0.5rem' }}
                title="Application Form"
              >Loading…</iframe>
            </div>
          )}
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center pixelated">
        <div className="mt-4 animate-bounce">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">ABOUT</h2>
          <div className="max-w-4xl mx-auto bg-gray-900/70 border border-gray-500/50 rounded-2xl p-8 shadow-lg backdrop-blur-md">
            {/* Add the HH25 logo here */}
            <div className="flex justify-center mb-8">
              <img src={HH25} alt="HackHounds 25 Logo" className="h-24 w-24" />
            </div>
            <p className="text-white text-lg mb-4">
              HackHounds is Loyola MD's premier student-run hackathon, bringing together innovative minds from across the country for 24 hours of coding, creativity, and collaboration.
            </p>
            <p className="text-white text-lg mb-4">
              Whether you're a seasoned developer or just starting out, join us for a weekend of learning, building, and connecting with industry experts and fellow tech enthusiasts!
            </p>
          </div>
        </div>
      </section>


           {/* Tracks Section - NEW */}
<section id="tracks" className="py-24 relative z-10">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">TRACKS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Track 1 - General */}
      <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Sparkles size={32} className="text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-purple-400 text-center mb-4 pixelated">GENERAL</h3>
        <div className="text-white text-center">
          Submit your project to the General Track to be eligible to win a Mug Warmer!
        </div>
      </div>

      {/* Track 2 - AI/ML */}
<div className="bg-black/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
  <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
    <BrainCircuit size={32} className="text-red-400" />
  </div>
  <h3 className="text-2xl font-bold text-red-400 text-center mb-4 pixelated">AI/ML</h3>
  <p className="text-white text-center">
    Harness the power of artificial intelligence and machine learning. Build intelligent systems, predictive models, or innovative applications that solve real-world problems.
  </p>
</div>

 {/* Track 3 - Fintech */}
 <div className="bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <CircleDollarSign size={32} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-green-400 text-center mb-4 pixelated">FINANCE</h3>
        <p className="text-white text-center">
          Revolutionize financial services with innovative technology solutions. From payment systems to financial education, make finance more accessible and efficient.
        </p>
      </div>

      {/* Track 4 - Computer Vision */}
<div className="bg-black/50 border border-teal-200/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
  <div className="w-16 h-16 bg-teal-200/20 rounded-full flex items-center justify-center mb-4 mx-auto">
    <Eye size={32} className="text-teal-200" />
  </div>
  <h3 className="text-2xl font-bold text-teal-200 text-center mb-4 pixelated">COMPUTER VISION</h3>
  <p className="text-white text-center">
    Create solutions that leverage image and video analysis. From object detection to augmented reality, explore how machines can "see" and interpret the world.
  </p>
</div>
{/* Track 5 - Art/Multimedia */}
<div className="bg-black/50 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <GraduationCap size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-400 text-center mb-4 pixelated">ART/ MULTIMEDIA</h3>
        <p className="text-white text-center">
          Explore the intersection of creativity and technology. Build projects that push the boundaries of digital art, animation, interactive media, or generative design. Show us how technology can amplify artistic expression!
        </p>
      </div>

      {/* Track 6 - Health */}
      <div className="bg-black/50 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <BriefcaseMedical size={32} className="text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-blue-400 text-center mb-4 pixelated">HEALTH</h3>
        <p className="text-white text-center">
          Innovate for a healthier future. Create solutions that improve healthcare access, patient outcomes, or wellness. Whether it's AI diagnostics, telemedicine, or fitness tech, your ideas can transform lives.
        </p>
      </div>
    </div>
  </div>
</section>



{/* Prizes Section - NEW */}
<section id="prizes" className="py-24 relative z-10">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">PRIZES</h2>
    <div className="max-w-5xl mx-auto">
      {/* Grand Prize */}
      <div className="bg-gradient-to-r from-amber-500/20 to-amber-300/20 border border-amber-400 rounded-xl p-8 backdrop-blur-sm transform transition-all hover:scale-105 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="w-24 h-24 bg-amber-400/30 rounded-full flex items-center justify-center">
              <TbHexagonNumber1 className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-amber-400 mb-2 pixelated">GRAND PRIZE</h3>
            <p className="text-white text-xl mb-4">Sony WH-CH720N Noise Cancelling Headphones!</p>
          </div>
        </div>
      </div>
      
      {/* Second and Third Place Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Second Place */}
        <div className="bg-gradient-to-r from-slate-400/20 to-slate-300/20 border border-slate-400 rounded-xl p-6 backdrop-blur-sm transform transition-all hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-400/30 rounded-full flex items-center justify-center mb-4">
              <TbHexagonNumber2 className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2 pixelated">SECOND PLACE</h3>
            <p className="text-white text-lg mb-2">JBL Flip 5 Portable Bluetooth Speakers!</p>
          </div>
        </div>
        
        {/* Third Place */}
        <div className="bg-gradient-to-r from-amber-700/20 to-amber-600/20 border border-amber-700 rounded-xl p-6 backdrop-blur-sm transform transition-all hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-700/30 rounded-full flex items-center justify-center mb-4">
              <TbHexagonNumber3 className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-600 mb-2 pixelated">THIRD PLACE</h3>
            <p className="text-white text-lg mb-2">HyperX Mechanical Keyboards!</p>
          </div>
        </div>
      </div>
      
      {/* Track Winners Row */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl border border-purple-500/30 overflow-hidden shadow-lg backdrop-blur-sm p-6 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-white to-purple-500"></div>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Crown size={32} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold pixelated text-purple-400 mb-2">TRACK WINNERS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* General Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-purple-500 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center mr-3">
                  <Sparkles size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-purple-400 pixelated">GENERAL</h4>
                  <p className="text-white text-sm">Mug Warmer</p>
                </div>
              </div>
            </div>

            {/* AI/ML Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-red-500 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-400/20 rounded-full flex items-center justify-center mr-3">
                  <BrainCircuit size={20} className="text-red-400" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-red-400 pixelated">AI/ML</h4>
                  <p className="text-white text-sm">Apple Airtag</p>
                </div>
              </div>
            </div>

            {/* Finance Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-green-500 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mr-3">
                  <CircleDollarSign size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-green-400 pixelated">FINANCE</h4>
                  <p className="text-white text-sm">Portable Charger</p>
                </div>
              </div>
            </div>

            {/* Computer Vision Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-teal-200 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-200/20 rounded-full flex items-center justify-center mr-3">
                  <Eye size={20} className="text-teal-200" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-teal-200 pixelated">COMPUTER VISION</h4>
                  <p className="text-white text-sm">Amazon Echo</p>
                </div>
              </div>
            </div>

            {/* Art/Multimedia Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-yellow-500 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-yellow-400 pixelated">ART/ MULTIMEDIA</h4>
                  <p className="text-white text-sm">Drawing Tablets</p>
                </div>
              </div>
            </div>

            {/* Health Track */}
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-500 hover:bg-black/60 transition-all hover:-translate-y-1 duration-300">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                  <BriefcaseMedical size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-blue-400 pixelated">HEALTH</h4>
                  <p className="text-white text-sm">Fitness Tracker Smart Ring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center pixelated glow-text">SCHEDULE</h2>

          {/* Schedule Grid */}
          <div className="max-w-4xl mx-auto">
            {/* Day 1 - Saturday, April 6 */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-400 mb-6 pixelated">Saturday, April 5</h3>
              <div className="space-y-4">
                {/* Event Items */}
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">10:00 AM</p>
                  <p className="text-white/80">Doors Open</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">11:00 AM</p>
                  <p className="text-white/80">Opening Ceremony</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">12:00 PM</p>
                  <p className="text-white/80">Hacking Begins!</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">12:15 PM</p>
                  <p className="text-white/80">Lunch</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">12:45 PM</p>
                  <p className="text-white/80">Team Formation (optional)</p>
                </div>
              </div>

              {/* Workshops */}
              <h4 className="text-2xl font-bold text-green-400 mt-8 mb-4 pixelated">Workshops</h4>
              <div className="space-y-4">
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">1:30 PM</p>
                  <p className="text-white/80">Workshop #1: Cybersecurity from a CISO's Perspective</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">3:00 PM</p>
                  <p className="text-white/80">Workshop #2: Intro to Game Dev</p>
                </div>
              </div>

              {/* Evening Events */}
              <h4 className="text-2xl font-bold text-green-400 mt-8 mb-4 pixelated">Evening</h4>
              <div className="space-y-4">
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">6:30 PM</p>
                  <p className="text-white/80">Dinner</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">9:00 PM</p>
                  <p className="text-white/80">Break Time - Smash Tournament</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">10:00 PM</p>
                  <p className="text-white/80">Nighttime Snack</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">11:00 PM</p>
                  <p className="text-white/80">Quiet Hours Begin</p>
                </div>
              </div>
            </div>

            {/* Day 2 - Sunday, April 7 */}
            <div>
              <h3 className="text-3xl font-bold text-green-400 mb-6 pixelated">Sunday, April 6</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">7:30 AM</p>
                  <p className="text-white/80">Breakfast</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">9:00 AM</p>
                  <p className="text-white/80">Continue Hacking</p>
                </div>
    
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">11:00 AM</p>
                  <p className="text-white/80">Staff available for Submission Questions</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">12:00 PM</p>
                  <p className="text-white/80">Hacking Ends!</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">12:15 PM</p>
                  <p className="text-white/80">Lunch</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">1:00 PM</p>
                  <p className="text-white/80">Project Presentations and Judging</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">2:00 PM</p>
                  <p className="text-white/80">Workshop #3: How to add a Hackathon to your Resume</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">3:00 PM</p>
                  <p className="text-white/80">Awards Ceremony</p>
                </div>
                <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
                  <p className="text-white font-medium">4:00 PM</p>
                  <p className="text-white/80">Event Ends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



{/* FAQ Section - Restructured */}
<section id="faq" className="py-24 relative z-10">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">FAQ</h2>
    
    <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
      {/* FAQ Item 1 */}
      <div className="bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-green-400 pixelated italic">Who can participate?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              HackHounds is open to all college and university students, regardless of major or experience level. You don't need to be a programming expert - we welcome beginners and will have plenty of workshops and mentors to help you learn!
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Item 2 */}
      <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-purple-400 pixelated italic">How much does it cost?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Absolutely nothing! HackHounds is completely free to attend. We'll provide meals, snacks, swag, and a space to work throughout the event.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Item 3 */}
      <div className="bg-black/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-red-400 pixelated italic">What should I bring?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Bring your laptop, charger, and any hardware you might need. We'll provide everything else, including food, drinks, and a comfortable workspace.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div className="bg-black/50 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-blue-400 pixelated italic">Can I work in a team?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Yes! You can work solo or in teams of up to four people. Teaming up is a great way to collaborate, learn from each other, and build something amazing together. If you don't have a team, we'll have a team-forming session at the start of the event.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Item 5 */}
      <div className="bg-black/50 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-yellow-400 pixelated italic">Will there be workshops?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Yes! We'll have a variety of workshops throughout the event. Currently the workshops are being set up, we will update this once we have some confirmations!
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Item 6 */}
      <div className="bg-black/50 border border-teal-200/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-teal-200 pixelated italic">What is the judging criteria?</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Projects will be judged on innovation, technical complexity, creativity, and presentation!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
                onClick={() => toggleFlip(index)}
              >
                <div className="flip-card-inner">
                  {/* Front of the card */}
                  <div className="flip-card-front">
                    {member.photo && (
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full mb-4 object-cover" 
                      />
                    )}
                    <h3 className="text-2xl font-bold text-white text-center">{member.name}</h3>
                    <p className="text-white/80 text-center mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      {member.github && (
                        <a 
                          href={member.github} 
                          className="text-white hover:text-green-400 transition-colors"
                          onClick={(e) => e.stopPropagation()} 
                        >
                          <GrGithub className="w-6 h-6" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          className="text-white hover:text-green-400 transition-colors"
                          onClick={(e) => e.stopPropagation()} 
                        >
                          <GrLinkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Back of the card */}
                  <div className="flip-card-back">
                    <h3 className="text-2xl font-bold text-white mb-4">{member.name}</h3>
                    {member.hometown && (
                      <p className="text-white/80 mb-2"><strong>Hometown:</strong> {member.hometown}</p>
                    )}
                    {member.majorYear && (
                      <p className="text-white/80 mb-2"><strong>Major/Year:</strong> {member.majorYear}</p>
                    )}
                    {member.funFact && (
                      <p className="text-white/80"><strong>Fun Fact:</strong> {member.funFact}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Sponsors Section - Redesigned */}
  <section id="sponsors" className="py-24 relative z-10">
  <div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold text-white mb-12 text-center pixelated glow-text">SPONSORS</h2>
    
    {/* Redesigned Grid for Sponsors */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Sponsor 1 - MIS with Instagram Link */}
      <a href="https://www.instagram.com/loyolamis" target="_blank" rel="noopener noreferrer" 
         className="transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center bg-black/50 border border-white rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <img src={MIS} alt="MIS" className="max-h-12" />
            </div>
            <h3 className="text-xl font-bold text-white pixelated text-center">MIS</h3>
          </div>
        </div>
      </a>
      
      {/* Sponsor 2 - CyberHounds with Instagram Link */}
      <a href="https://www.instagram.com/loyolacyberhounds" target="_blank" rel="noopener noreferrer"
         className="transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16rounded-full flex items-center justify-center mb-4">
              <img src={CyberHounds} alt="CyberHounds" className="max-h-12" />
            </div>
            <h3 className="text-xl font-bold text-green-300 pixelated text-center">CYBER HOUNDS</h3>
          </div>
        </div>
      </a>
      
      {/* Sponsor 3 - ACM with Instagram Link */}
      <a href="https://www.instagram.com/loyolacomputes" target="_blank" rel="noopener noreferrer"
         className="transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4">
              <img src={ACM} alt="ACM" className="max-h-12" />
            </div>
            <h3 className="text-xl font-bold text-green-400 pixelated text-center">ACM</h3>
          </div>
        </div>
      </a>
      

      {/* Sponsor 4 - SOS with Site Link */}
      <a href="https://nam04.safelinks.protection.outlook.com/?url=http%3A%2F%2Femail2click.mlh.io%2Fls%2Fclick%3Fupn%3Du001.RdozofatWF2I0U8RNZ0g-2Bs5RDtELZ06J1YoJ8HGyd-2F67eMyOvJXFcFGNppLJ-2BKk-2FMh7MmiTl7y8xdv9hVe3ApnCKm4aDh1POhPGXJ3ZQcxZOkgZJDcqQbs8dgHH-2FIuSd46yAYKuBj1Gb3mF548jGmBaDw55K8wnEURAWgksxqWrskGSXqk8PX4L7GEozpkZJDDnqGIOEEFfuKWaG0PNYQLKm158apzcwZ6o6VVHqSlc9nvK8pHn6bo5nusCHr00HIYzMFFhv43BLvrJd6y9t2ni2Drwqvx8DZamuzXPZnI8eY17T-2BdxB1RafBEH36k4O7elCchhFzJqrIf4Xr1piffi850VGF83evVazISw-2BE6gMNLZG1eblGaoyt9-2FCf02o89TjdMiv37ba8QsXNJuKxJAIyVw4J1ykNg6EfXBtztM-3DLdOb_uT-2B2KJTFkm3vjCS7TDFkjTNaJW3LWM7sfE04Qvh-2FFQc-2BKxD4u4Aio4XulPQ0-2B-2BdS-2BlE-2FK2sRQVrLRsZXVzJwxcaRJhrBw8GJoAHHW36s7a5sk3Bzz9Fl-2F2IOyh0yViVuGpHmkIfdhDDq2UzjUSRN5srsw7M0EBwKyQCvFDtsB6eSn-2BwNC6gBMsuqfUhher9hguyshs36v3-2Fp3w2Zid7ZWiVejE-2BiR1eByGciglJzhu0WMW-2FjHlEuIRgRffF1m5Q7GdMqYH-2BY-2FdLETiH1AKy12qEvKsVKNOlo2pkhH4IWfhM-3D&data=05%7C02%7Csgreen%40loyola.edu%7Cf94d5d70b0ae4fbd724708dd68808a95%7C30ae0a8f3cdf44fdaf34278bf639b85d%7C0%7C0%7C638781623499231941%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=mapky1%2BmTkEDQt%2BqaDthxo6%2F%2FMRTKH0gQj17a%2BwuEj0%3D&reserved=0" 
         target="_blank" rel="noopener noreferrer"
         className="transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center bg-black/50 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4">
              <img src={SOS} alt="SOS" className="max-h-12" />
            </div>
            <h3 className="text-xl font-bold text-blue-400 pixelated text-center">Stand out Stickers</h3>
          </div>
        </div>
      </a>

      {/* Sponsor 5 - ColorStack LUM with Site Link */}
      <a href="https://www.instagram.com/colorstacklum/" 
         target="_blank" rel="noopener noreferrer"
         className="transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center justify-center bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4">
              <img src={ColorStackLUM} alt="ColorStack LUM" className="max-h-12" />
            </div>
            <h3 className="text-xl font-bold pixelated text-center" style={{ color: "#00B555" }}>ColorStack LUM</h3>
          </div>
        </div>
      </a>
      
    </div>
  </div>
</section>



      {/* Footer - NEW */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 mb-4">
            &copy; 2025 HackHounds. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://discord.gg/qgKP2akCWK" className="text-white/70 hover:text-green-400 transition-colors">
              <TbBrandDiscord className='w-6 h-6' />
            </a>
            <a href="https://www.instagram.com/loyolacyberhounds?igsh=bGRhcHdzMmR6ZXY0" className="text-white/70 hover:text-green-400 transition-colors">
            <GrInstagram className='w-6 h-6' />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;