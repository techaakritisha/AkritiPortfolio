import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaJs, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, SiSocketdotio, SiGo, SiTypescript } from 'react-icons/si'
import { FaGraduationCap } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaTools } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaMedal, FaTrophy, FaCode, FaChartLine, FaBug, FaBitcoin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdVerified } from 'react-icons/md';
import { RiMedalLine } from 'react-icons/ri';
import { FaCertificate } from "react-icons/fa";


const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">

      <h1 className="text-5xl font-semibold text-gray-800 gap-2 text-center">

        About Me
      </h1>

      <br />
      <br />


      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <BsPersonCircle className="text-[#6c63ff]" />
          A Little About Me
        </h1>
        <br />
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">

          <p className="text-gray-700 leading-relaxed">
            I’m <span className="font-semibold text-blue-700">Akriti</span>, a B.Tech undergraduate at <span className="font-semibold">NIT Agartala</span>, majoring in <span className="font-semibold">Electronics and Communication Engineering</span>.
            I’m passionate about <span className="font-semibold">software development</span> and <span className="font-semibold">problem-solving</span>, with hands-on experience in modern web technologies and open-source contributions.
            I constantly strive to learn, grow, and build solutions that create real-world impact.
          </p>

        </div>
      </div>

      <br />

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaGraduationCap className="text-[#6c63ff]" />
          Education
        </h1>
        <br />
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            National Institute of Technology, Agartala
          </h3>
          <p className="text-sm text-gray-900">
            Bachelor of Technology in ELectronics and Communication Engineering
          </p>
          <p className="text-sm text-gray-700">2022 – 2026</p>
        </div>
      </div>
      <br />


      {/* <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <FaTools className="text-[#6c63ff]" />
        Skills
      </h1>
      <br />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 text-sm">
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiCplusplus /> C++
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiC /> C
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaJs /> JavaScript
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaPython /> Python
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiGo /> Go
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiTypescript /> TypeScript
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaHtml5 /> HTML
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaCss3Alt /> CSS
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiTailwindcss /> Tailwind CSS
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiBootstrap /> Bootstrap
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaReact /> React.js
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <FaNodeJs /> Node.js
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiSocketdotio /> Socket.IO
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiMysql /> MySQL
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          <SiMongodb /> MongoDB
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          DSA
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          DBMS
        </span>
        <span className="flex items-center gap-2 px-2 py-1 bg-gray-100 border border-gray-300 rounded-xl w-full max-w-[180px]">
          OOPs
        </span>
      </div> */}

      {/* <br/> */}
      <div className="space-y-2 mt-4">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaBriefcase className="text-[#6c63ff]" />
          Work Experience
        </h1>
        <br />
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <FaBriefcase className="text-blue-500" />
                <span>Software Engineer | Afame Technologies</span>
              </div>
              <p className="text-sm text-gray-600 mt-1 ml-6">Nov 2024 – Dec 2024</p>
            </div>
            <ul className="list-disc ml-10 mt-2 text-gray-700 space-y-1">
              <li>Built modular and reusable <span className="tech">React.js</span> components to enhance UI structure and consistency.</li>
              <li>Optimized service interactions across a <span className="tech">Linux-based stack</span>, improving system responsiveness.</li>
              <li>Collaborated on scalable web solutions in a fast-paced team environment.</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <FaLaptopCode className="text-purple-500" />
                <span>Web Developer | Future Intern</span>
              </div>
              <p className="text-sm text-gray-600 mt-1 ml-6">Oct 2024 – Nov 2024</p>
            </div>
            <ul className="list-disc ml-10 mt-2 text-gray-700 space-y-1">
              <li>Developed dynamic and responsive UIs using <span className="tech">React.js</span>, <span className="tech">Tailwind CSS</span>, and <span className="tech">TypeScript</span>.</li>
              <li>Integrated backend functionalities with <span className="tech">Node.js</span> and <span className="tech">Python</span> to support real-time communication.</li>
              <li>Participated in full-cycle development, ensuring seamless collaboration and smooth project flow.</li>
            </ul>
          </div>


        </div>

      </div>

      <br />
      <br />

      <div className="text-2xl font-bold flex items-center gap-2 text-gray-800 mb-2">
        <FaMedal className="text-[#6c63ff]" />
        <span>Achievements</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200 space-y-4">

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-3 text-gray-800 text-sm">

          <div className="flex items-start gap-2">
            <FaTrophy className="text-[#6c63ff] mt-1" />
            <p className='text-base'>
              <strong className="inline-flex items-center gap-1">
                Finalist – <FcGoogle className="text-xl" /> Google Girl Hackathon 2025
              </strong>: Ranked in the <span className="font-semibold text-blue-600">Top 76</span> out of <span className="font-semibold text-blue-600">58,000+</span> participants across India. Showcased skills in building scalable systems and crafting intuitive UIs.
            </p>
          </div>



          <div className="flex items-start gap-2">
            <FaCode className="text-[#6c63ff] mt-1" />
            <p className='text-base'>
              Solved <span className="font-semibold text-purple-600">2000+ DSA problems</span> across platforms like <span className="font-semibold">LeetCode</span>, <span className="font-semibold">Codeforces</span> (1150+ rating), <span className="font-semibold">GeeksforGeeks</span> (3★, Top 31 at NIT Agartala), <span className="font-semibold">HackerRank</span> (5★). Competitive, consistent, and obsessed with clean C++ logic 💻
            </p>
          </div>

          <div className="flex items-start gap-2">
            <FaChartLine className="text-indigo-500 mt-1" />
            <p className='text-base'>
              Achieved a national rank of <span className="font-semibold text-indigo-600">1319</span> among <span className="font-semibold">27,000+</span> in <strong>LeetCode Biweekly Contest 154</strong>, proving algorithmic agility under time pressure.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <FaBug className="text-[#6c63ff] mt-1" />
            <p className='text-base'>
              Contributed to <strong>GSSoC 2024</strong> by fixing critical bugs and launching new features using <span className="font-semibold">React.js</span> and <span className="font-semibold">Python</span>, directly improving user experience and reliability.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <FaBitcoin className="text-[#6c63ff] mt-1" />
            <p className='text-base'>
              Selected as an <strong>Open Source Contributor</strong> in <strong>Summer of Bitcoin</strong> – built, learned, and shipped real code for decentralization 🚀
            </p>
          </div>
        </div>

      </div>

      <br />
      <br />


      <div className="text-2xl font-bold flex items-center gap-2 text-gray-800 mb-2">
        <RiMedalLine className="text-[#6c63ff]" />
        <span>Certifications</span>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200 space-y-4">

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-3 text-gray-800 text-sm">

        <div className="flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base'>
      <strong>Myntra HackerRamp 2024</strong> – Participated in a national-level tech challenge organized by <span className="text-blue-600 font-medium">Myntra</span> to build scalable retail-tech solutions.
    </p>
  </div>
  <div className="text-lg  flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base'>
      <strong>Flipkart Grid 5.0</strong> – Competed in Flipkart’s flagship engineering challenge designed to solve real-world e-commerce problems.
    </p>
  </div>
  <div className="text-lg  flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base' >
      <strong>Flipkart Runway 2024</strong> – Selected for an exclusive program by <span className="text-blue-600 font-medium">Flipkart</span> aimed at empowering women in tech.
    </p>
  </div>
  <div className="text-lg  flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base' >
      <strong>Google Girl Hackathon 2025</strong> – Finalist among 58,000+ participants in a nationwide event organized by <span className="text-blue-600 font-medium">Google India</span>.
    </p>
  </div>
  <div className="text-lg  flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base' >
      <strong>WeForShe</strong> – Recognized in a program focused on uplifting women developers, organized by <span className="text-blue-600 font-medium">Girlscript Foundation</span>.
    </p>
  </div>
  <div className="text-lg  flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base' >
      <strong>WomenInDev</strong> – Participated in a national women-in-tech initiative by <span className="text-blue-600 font-medium">Coding Ninjas</span> to bridge the gender gap in development.
    </p>
  </div>
  <div className="text- flex items-start gap-2">
    <FaCertificate className="text-yellow-500 mt-1" />
    <p className='text-base' >
      <strong>Vyuh 2023</strong> – Honored for showcasing innovative problem-solving during a nationwide hackathon by <span className="text-blue-600 font-medium">IIT Hyderabad</span>.
    </p>
  </div>
          
        </div>

      </div>


    </div>


  )
}

export default About